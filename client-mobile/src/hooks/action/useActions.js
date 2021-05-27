import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

export default function useActions(find) {
    const [actions, setActions] = useState([]);

    const actionsQuery = useQuery('actions', find);

    useEffect(() => {
        if (actionsQuery.isSuccess) {
            let tmpActions = Object.values(actionsQuery.data.data);

            setActions(
                tmpActions.map(el => {
                    const commentKeys = Object.keys(el.comments);
                    el.comments = Object.values(el.comments).map((_el, idx) => {
                        _el.comment_id = commentKeys[idx];
                        return _el;
                    });

                    el.comments.map(_el => {
                        const answerKeys = Object.keys(_el.answers);
                        _el.answers = Object.values(_el.answers).map(
                            (__el, idx) => {
                                __el.answer_id = answerKeys[idx];
                                return __el;
                            }
                        );
                    });

                    return el;
                })
            );
        }
    }, [actionsQuery.status]);

    return [actions, setActions, actionsQuery];
}
