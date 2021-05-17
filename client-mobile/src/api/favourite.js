import axios from 'axios';
import { apiUrl } from '../consts/api';

export const create = (user_id, action_id) => {
    return axios.post(`${apiUrl}favourite`, { user_id, action_id });
};
