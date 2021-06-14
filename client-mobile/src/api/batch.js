import axios from 'axios';
import { apiUrl } from '../consts/api';

export const get = user_id => {
    return axios.get(apiUrl + 'batches/' + user_id);
};
