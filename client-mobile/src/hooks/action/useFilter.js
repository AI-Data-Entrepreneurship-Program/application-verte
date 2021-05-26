import { useEffect, useState } from 'react';

export default function useFilter(query, setter, defaultFilter = 'All') {
    const [currentFilter, setCurrentFilter] = useState(defaultFilter);

    useEffect(() => {
        if (!query.isSuccess) return;

        setter(
            currentFilter === 'All'
                ? Object.values(query.data.data)
                : Object.values(query.data.data).filter(el =>
                      el.category.includes(currentFilter)
                  )
        );
    }, [currentFilter]);

    return [currentFilter, setCurrentFilter];
}
