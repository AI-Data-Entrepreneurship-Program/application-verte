import React, { createContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import * as users from '../api/users';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const { data } = useQuery('user', users.find);
    const [current, setCurrent] = useState(data);

    useEffect(() => data && setCurrent(JSON.parse(data)[0]), [data]);

    return (
        <UserContext.Provider value={{ current }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
