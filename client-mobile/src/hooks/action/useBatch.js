import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import * as Batch from '../../api/batch';

export default function useBatch(user_id) {
    const [batches, setBatches] = useState([]);
    const batchQuery = useQuery(['batch', user_id], () => Batch.get(user_id));

    useEffect(() => {
        if (!batchQuery.isSuccess) return;

        const data = batchQuery.data.data;
        setBatches(Object.values(data));
    }, [batchQuery.status]);

    return batches;
}
