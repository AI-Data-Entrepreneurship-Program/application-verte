import axios from 'axios';
import uuid from 'react-native-uuid';
import { apiUrl } from '../consts/api';

export const comment = (action_id, user_id, username, avatar_url, content) => {
    return axios.post(apiUrl + '/comment', {
        action_id,
        comment_id: uuid.v4(),
        user_id,
        type: 'comment',
        username,
        avatar_url,
        content
    });
};

export const answer = (
    action_id,
    comment_id,
    user_id,
    username,
    avatar_url,
    content
) => {
    return axios.post(apiUrl + '/comment', {
        action_id,
        comment_id,
        answer_id: uuid.v4(),
        user_id,
        type: 'answer',
        username,
        avatar_url,
        content
    });
};
