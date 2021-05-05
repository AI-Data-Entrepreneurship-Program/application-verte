import axios from 'axios';
import { apiUrl } from '../consts/api';

export const find = () => {
    return axios.get(apiUrl + 'actions');
};

export const get = id => {
    return axios.get(apiUrl + `actions/${id}`);
};

export const create = (title, description, category, image_url = '') => {
    return axios.post(apiUrl + 'actions', {
        body: { title, description, category, image_url }
    });
};

export const update = (id, title, description, category, image_url) => {
    return axios.put(apiUrl + `actions/${id}`, {
        body: { title, description, category, image_url }
    });
};

export const remove = id => {
    return axios.delete(apiUrl + `actions/${id}`);
};
