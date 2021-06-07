import React, { createContext, useEffect, useState } from 'react';

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

    const onQuit = () => {
        setAnalytics(old => {
            old.time_ended = Date();
            old.time_spent = old.time_ended - old.time_started;
            return old;
        });
    };

    useEffect(() => {
        console.log(analytics);

        if (analytics.time_spent !== 0) {
            // TODO: send analytics to server
        }
    }, [analytics]);

    return (
        <AnalyticsContext.Provider value={{ analytics, setAnalytics, onQuit }}>
            {children}
        </AnalyticsContext.Provider>
    );
};

export default AnalyticsContextProvider;
