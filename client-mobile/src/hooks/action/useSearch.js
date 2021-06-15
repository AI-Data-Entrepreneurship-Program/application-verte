import { useContext, useEffect, useState } from 'react';
import { AnalyticsContext } from '../../context/AnalyticsContextProvider';

export default function useSearch(value) {
    const { setAnalytics } = useContext(AnalyticsContext);

    const [searchQuery, setSearchQuery] = useState('');
    const [actionsMirror, setActionsMirror] = useState(value);

    const filter = () => {
        setActionsMirror(
            searchQuery.length === 0
                ? value
                : value.filter(el =>
                      el.title.toLowerCase().includes(searchQuery.toLowerCase())
                  )
        );
    };

    useEffect(() => filter(value), [value]);

    useEffect(() => {
        filter();
        setAnalytics(old => {
            if (
                !searchQuery ||
                old.terms_selected.some(term => term === searchQuery)
            )
                return old;
            old.terms_selected.push(searchQuery);
            old.time_ended = Date();
            old.time_spent = old.time_ended - old.time_started;
            return old;
        });
    }, [searchQuery]);

    return [searchQuery, setSearchQuery, actionsMirror];
}
