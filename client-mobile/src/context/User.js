import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [currentUserID, setCurrentUserID] = useState('');

    useEffect(() => {
        const fetchUserID = async () => AsyncStorage.getItem('@user_id');
        fetchUserID().then(data => setCurrentUserID(data));
    }, []);

    return (
        <UserContext.Provider value={{ currentUserID, setCurrentUserID }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
