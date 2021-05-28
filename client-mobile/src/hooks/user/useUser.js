import { useEffect, useState } from 'react';
import uuid from 'react-native-uuid';
import { useMutation } from 'react-query';
import * as Users from '../../api/users';

export default function useUser() {
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
    }, []);

    return [currentUser, setCurrentUser];
}
