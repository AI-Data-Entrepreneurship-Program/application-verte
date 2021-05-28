import { useEffect, useState } from 'react';

export default function useFilter(query, setter, defaultFilter = ['All']) {
    const [currentFilter, setCurrentFilter] = useState(defaultFilter);

    useEffect(() => {
        if (!query.isSuccess) return;

        let filtered = [];
        const data = Object.values(query.data.data);

        data.forEach(action => {
            action.category.forEach(category => {
                if (currentFilter.includes(category)) filtered.push(action);
            });
        });

        setter(currentFilter.some(el => el === 'All') ? data : filtered);
    }, [currentFilter]);

    return [currentFilter, setCurrentFilter];
}
