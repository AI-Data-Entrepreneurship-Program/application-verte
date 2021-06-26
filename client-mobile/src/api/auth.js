import axios from 'axios';
import { apiUrl } from '../consts/api';

export const login = () => {
    const username = ''; // username token here
    const password = ''; // password token here

    return axios.post(apiUrl + '/api/auth/login', { username, password });
};
