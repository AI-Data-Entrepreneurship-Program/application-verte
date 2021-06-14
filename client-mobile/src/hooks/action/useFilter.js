import { useContext, useEffect, useState } from 'react';
import { AnalyticsContext } from '../../context/AnalyticsContextProvider';

export default function useFilter(defaultFilter = ['All']) {
    const { setAnalytics } = useContext(AnalyticsContext);

    const [currentFilters, setCurrentFilters] = useState(defaultFilter);

    useEffect(() => {
        setAnalytics(old => {
            currentFilters.forEach(
                filter =>
                    !old.filters_selected.includes(filter) &&
                    old.filters_selected.push(filter)
            );
            old.time_ended = Date();
            old.time_spent = old.time_ended - old.time_started;
            return old;
        });
    }, [currentFilters]);

    return [currentFilters, setCurrentFilters];
}
