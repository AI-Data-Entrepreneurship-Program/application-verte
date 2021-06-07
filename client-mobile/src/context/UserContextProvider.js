import React, { createContext, useContext } from 'react';
import { useMutation } from 'react-query';
import * as Favourite from '../api/favourite';
import useUser from '../hooks/user/useUser';
import { AnalyticsContext } from './AnalyticsContextProvider';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const { setAnalytics } = useContext(AnalyticsContext);

    const [currentUser, setCurrentUser] = useUser();

    const favouriteMutation = useMutation(props =>
        Favourite.create(...Object.values(props))
    );

    const addAction = action => {
        if (currentUser.actions.some(el => el.action_id === action.action_id))
            return;

        favouriteMutation.mutate({
            user_id: currentUser.user_id,
            action_id: action.action_id
        });

        setCurrentUser(old => ({ ...old, actions: [...old.actions, action] }));

        setAnalytics(old => {
            if (old.actions_added.some(id => id === action.action_id))
                return old;

            old.actions_added.push(action.action_id);
            return old;
        });
    };

    const removeAction = action_id => {
        setCurrentUser(old => ({
            ...old,
            actions: old.actions.filter(el => el.action_id !== action_id)
        }));
    };

    return (
        <UserContext.Provider value={{ currentUser, addAction, removeAction }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
