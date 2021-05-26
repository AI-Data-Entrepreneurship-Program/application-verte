import { useEffect, useState } from 'react';

export default function useSearch(query, setter) {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (!query.isSuccess) return;

        setter(
            searchQuery.length === 0
                ? Object.values(query.data.data)
                : Object.values(query.data.data).filter(el =>
                      el.title.toLowerCase().includes(searchQuery.toLowerCase())
                  )
        );
    }, [searchQuery]);

    return [searchQuery, setSearchQuery];
}
