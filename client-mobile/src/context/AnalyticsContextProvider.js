import React, { createContext, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import * as Analytics from '../api/analytics';

export const AnalyticsContext = createContext();

const initAnalytics = () => {
    return {
        id_session: '',
        time_started: '',
        time_ended: '',
        time_spent: 0,
        device: '',
        actions_clicked: [],
        actions_added: [],
        actions_liked_commented: [],
        actions_viewed: [],
        actions_stopped: [],
        filters_selected: [],
        terms_selected: []
    };
};

const AnalyticsContextProvider = ({ children }) => {
    const [analytics, setAnalytics] = useState(initAnalytics());
    const analyticsMutation = useMutation(props =>
        Analytics.send(...Object.values(props))
    );

    useEffect(() => {
        console.log(analytics);
        analyticsMutation.mutate(analytics);
    }, [analytics]);

    return (
        <AnalyticsContext.Provider value={{ analytics, setAnalytics }}>
            {children}
        </AnalyticsContext.Provider>
    );
};

export default AnalyticsContextProvider;
