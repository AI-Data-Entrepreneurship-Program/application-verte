import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [currentUserID, setCurrentUserID] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('@user_id').then(data => setCurrentUserID(data));
    }, []);

    return (
        <UserContext.Provider value={{ currentUserID, setCurrentUserID }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
