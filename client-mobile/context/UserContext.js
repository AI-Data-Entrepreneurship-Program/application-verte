import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [current, setCurrent] = useState({});

    const isLoggedIn = () => !_.isEmpty(current);

    const updateCurrentUser = async user => {
        try {
            const storedValue = JSON.stringify(user);
            await AsyncStorage.setItem('@current_user', storedValue);
            setCurrent(user);
        } catch (error) {
            console.log(`Couldn't update current user: ${error}`);
        }
    };

    const getCurrentUser = async () => {
        try {
            return await AsyncStorage.getItem('@current_user');
        } catch (error) {
            console.log(`Couldn't get current user: ${error}`);
        }
    };

    return (
        <UserContext.Provider
            value={{
                current,
                setCurrent,
                updateCurrentUser,
                getCurrentUser,
                isLoggedIn
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
