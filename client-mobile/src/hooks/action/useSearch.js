import { useContext, useEffect, useState } from 'react';
import { AnalyticsContext } from '../../context/AnalyticsContextProvider';

export default function useSearch(query, setter) {
    const { setAnalytics } = useContext(AnalyticsContext);

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

        setAnalytics(old => {
            if (
                !searchQuery &&
                old.terms_selected.some(term => term === searchQuery)
            )
                return old;
            old.terms_selected.push(searchQuery);
            return old;
        });
    }, [searchQuery]);

    return [searchQuery, setSearchQuery];
}
