import axios from 'axios';
import { apiUrl } from '../consts/api';

export const find = () => {
    return axios.get(apiUrl + 'cartes');
};

export const get = id => {
    return axios.get(apiUrl + `cartes/${id}`);
};
