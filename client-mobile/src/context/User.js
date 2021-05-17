import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';
import * as Users from '../api/users';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [currentUserID, setCurrentUserID] = useState('');
    const [currentUserInfo, setCurrentUserInfo] = useState({});

    const refreshUserInfo = () => {
        Users.get(currentUserID).then(data =>
            setCurrentUserInfo(data.data[currentUserID])
        );
    };

    useEffect(() => {
        AsyncStorage.getItem('@user_id').then(data => setCurrentUserID(data));
    }, []);

    useEffect(() => {
        if (currentUserID) refreshUserInfo();
    }, [currentUserID]);

    return (
        <UserContext.Provider
            value={{
                currentUserID,
                setCurrentUserID,
                currentUserInfo,
                refreshUserInfo
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
