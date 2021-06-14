import React, { createContext, useContext } from 'react';
import { UserContext } from '../context/UserContextProvider';
import useActions from '../hooks/action/useActions';
import useBatch from '../hooks/action/useBatch';
import useFilter from '../hooks/action/useFilter';
// import useSearch from '../hooks/action/useSearch';

export const ActionContext = createContext();

export default function ActionContextProvider({ children }) {
    const { currentUser } = useContext(UserContext);

    const batches = useBatch(currentUser.user_id);
    const [actions, setActions, actionsQuery, batchIdx, setBatchIdx] =
        useActions(batches);

    const [currentFilters, setCurrentFilters] = useFilter();

    // const [searchQuery, setSearchQuery] = useSearch(actionsQuery, setActions);

    const onEndScroll = () => {
        console.log('hello');
        // setBatchIdx(batchIdx + 1);
    };

    return (
        <ActionContext.Provider
            value={{
                actions,
                setActions,
                actionsQuery,
                currentFilters,
                setCurrentFilters,
                // searchQuery,
                // setSearchQuery,
                onEndScroll
            }}
        >
            {children}
        </ActionContext.Provider>
    );
}
