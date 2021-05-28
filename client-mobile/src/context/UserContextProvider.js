import React, { createContext } from 'react';
import { useMutation } from 'react-query';
import * as Favourite from '../api/favourite';
import useUser from '../hooks/user/useUser';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useUser();

    const favouriteMutation = useMutation(props =>
        Favourite.create(...Object.values(props))
    );

    const addAction = action => {
        favouriteMutation.mutate({
            user_id: currentUser.user_id,
            action_id: action.action_id
        });

        setCurrentUser(old => ({
            ...currentUser,
            actions: [...currentUser.actions, action]
        }));
    };

    return (
        <UserContext.Provider value={{ currentUser, addAction }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
