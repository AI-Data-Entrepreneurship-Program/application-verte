import axios from 'axios';
import { apiUrl } from '../consts/api';

export const find = () => {
    return axios.get(apiUrl + 'users');
};

export const get = id => {
    return axios.get(apiUrl + `users/${id}`);
};

export const create = (username, password, avatar_url = '') => {
    return axios.post(apiUrl + 'users', {
        body: { username, password, avatar_url }
    });
};

export const update = (id, username, password, avatar_url) => {
    return axios.put(apiUrl + `users/${id}`, {
        body: { username, password, avatar_url }
    });
};

export const remove = id => {
    return axios.delete(apiUrl + `users/${id}`);
};
