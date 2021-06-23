import axios from 'axios';
import { apiUrl } from '../consts/api';

export const login = () => {
    const username = 'turtleiatech';
    const password = 'ds2LKKJD342jkdjs23jkdj4JDS';

    return axios.post(apiUrl + '/api/auth/login', { username, password });
};
