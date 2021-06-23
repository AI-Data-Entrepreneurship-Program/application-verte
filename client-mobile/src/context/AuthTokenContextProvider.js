import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import * as Auth from '../api/auth.js';

export const AuthTokenContext = createContext();

const AuthTokenContextProvider = ({ children }) => {
    const [token, setToken] = useState('');

    const loginMutation = useQuery('login', Auth.login);

    useEffect(() => {
        if (!loginMutation.isSuccess) return;
        setToken(loginMutation.data.data.token);
    }, [loginMutation.status]);

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }, [token]);

    return (
        <AuthTokenContext.Provider value={token}>
            {children}
        </AuthTokenContext.Provider>
    );
};

export default AuthTokenContextProvider;
