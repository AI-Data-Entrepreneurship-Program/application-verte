import React, { createContext } from 'react';
import * as Actions from '../api/cartes';
import useActions from '../hooks/action/useActions';
import useFilter from '../hooks/action/useFilter';
import useSearch from '../hooks/action/useSearch';

export const ActionContext = createContext();

export default function ActionContextProvider({ children }) {
    const [actions, setActions, actionsQuery] = useActions(Actions.find);

    const [currentFilter, setCurrentFilter] = useFilter(
        actionsQuery,
        setActions
    );

    const [searchQuery, setSearchQuery] = useSearch(actionsQuery, setActions);

    return (
        <ActionContext.Provider
            value={{
                actions,
                setActions,
                actionsQuery,
                currentFilter,
                setCurrentFilter,
                searchQuery,
                setSearchQuery
            }}
        >
            {children}
        </ActionContext.Provider>
    );
}
