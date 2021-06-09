import { useContext, useEffect, useState } from 'react';
import { AnalyticsContext } from '../../context/AnalyticsContextProvider';

export default function useFilter(query, setter, defaultFilter = ['All']) {
    const { setAnalytics } = useContext(AnalyticsContext);

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

        setAnalytics(old => {
            currentFilter.forEach(
                filter =>
                    !old.filters_selected.includes(filter) &&
                    old.filters_selected.push(filter)
            );
            old.time_ended = Date();
            old.time_spent = old.time_ended - old.time_started;
            return old;
        });
    }, [currentFilter]);

    return [currentFilter, setCurrentFilter];
}
