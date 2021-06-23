import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import * as Actions from '../../api/cartes';

const cleanActionData = actionData => {
    return actionData.map(el => {
        const commentKeys = Object.keys(el.comments);
        el.comments = Object.values(el.comments).map((_el, idx) => {
            _el.comment_id = commentKeys[idx];
            return _el;
        });

        el.comments.map(_el => {
            const answerKeys = Object.keys(_el.answers);
            _el.answers = Object.values(_el.answers).map((__el, idx) => {
                __el.answer_id = answerKeys[idx];
                return __el;
            });
        });

        return el;
    });
};

export default function useActions(batches) {
    const [actions, setActions] = useState([]);
    const [batchIdx, setBatchIdx] = useState(0);

    // batch system won't work on web so we take all batches here
    let actionsQuery = useQuery(
        ['actions', batches, batchIdx],
        () =>
            Actions.getMany(
                batches.reduce((previous, current) => previous + current)
                // batches[0]
            ),
        { enabled: false }
    );

    useEffect(() => {
        if (!batches) return;
        actionsQuery.refetch();
    }, [batches, batchIdx]);

    useEffect(() => {
        if (!actionsQuery.isSuccess || !actionsQuery.data) return;

        const data = Object.values(actionsQuery.data.data);
        setActions(old => old.concat(_.shuffle(cleanActionData(data))));
    }, [actionsQuery.status]);

    return [actions, setActions, actionsQuery, batchIdx, setBatchIdx];
}
