import axios from 'axios';
import { apiUrl } from '../consts/api';

export const send = (
    id_session,
    time_started,
    time_ended,
    time_spent,
    device,
    actions_clicked,
    actions_added,
    actions_liked_commented,
    actions_viewed,
    actions_stopped,
    filters_selected,
    terms_selected
) => {
    return axios.post(apiUrl + 'prototypetesting', {
        id_session,
        time_started,
        time_ended,
        time_spent,
        device,
        actions_clicked,
        actions_added,
        actions_liked_commented,
        actions_viewed,
        actions_stopped,
        filters_selected,
        terms_selected
    });
};
