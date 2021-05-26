import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

export default function useActions(find) {
    const [actions, setActions] = useState([]);

    const actionsQuery = useQuery('actions', find);

    useEffect(() => {
        if (actionsQuery.isSuccess)
            setActions(Object.values(actionsQuery.data.data));
    }, [actionsQuery.status]);

    return [actions, setActions, actionsQuery];
}
