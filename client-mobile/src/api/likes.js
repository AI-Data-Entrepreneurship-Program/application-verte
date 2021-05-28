import axios from 'axios';
import { apiUrl } from '../consts/api';

export const action = (action_id, user_id, likes) => {
    return axios.post(apiUrl + 'likes', {
        type: 'action',
        action_id,
        user_id,
        likes
    });
};

export const comment = (action_id, comment_id, user_id, likes) => {
    return axios.post(apiUrl + 'likes', {
        type: 'comment',
        action_id,
        comment_id,
        user_id,
        likes
    });
};

export const answer = (action_id, comment_id, answer_id, user_id, likes) => {
    return axios.post(apiUrl + 'likes', {
        type: 'answer',
        action_id,
        comment_id,
        answer_id,
        user_id,
        likes
    });
};
