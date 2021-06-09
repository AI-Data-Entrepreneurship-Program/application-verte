import { useContext, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import uuid from 'react-native-uuid';
import { useMutation } from 'react-query';
import * as Users from '../../api/users';
import { AnalyticsContext } from '../../context/AnalyticsContextProvider';

export default function useUser() {
    const { setAnalytics } = useContext(AnalyticsContext);

    const user_id = uuid.v4();

    const [currentUser, setCurrentUser] = useState({
        user_id,
        username: `user-${user_id.split('-')[0]}`,
        password: user_id,
        avatar_url: 'https://www.w3schools.com/w3images/avatar6.png',
        actions: []
    });

    const userMutation = useMutation(props =>
        Users.create(...Object.values(props))
    );

    useEffect(() => {
        userMutation.mutate({
            user_id: currentUser.user_id,
            username: currentUser.username,
            password: currentUser.password,
            avatar_url: currentUser.avatar_url
        });

        setAnalytics(old => {
            old.id_session = currentUser.user_id;
            old.time_started = Date();
            old.device = Platform.OS;
            old.time_ended = Date();
            old.time_spent = old.time_ended - old.time_started;
            return old;
        });
    }, []);

    return [currentUser, setCurrentUser];
}
