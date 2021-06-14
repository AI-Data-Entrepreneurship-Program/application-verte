import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ActionContextProvider from './src/context/ActionContextProvider';
import AnalyticsContextProvider from './src/context/AnalyticsContextProvider';
import UserContextProvider from './src/context/UserContextProvider';
import useQueryClientProvider from './src/hooks/useQueryClientProvider';
import StackNavigatorProvider from './src/navigations/StackNavigator';

const ContextProviders = ({ children }) => (
    <AnalyticsContextProvider>
        <UserContextProvider>
            <ActionContextProvider>{children}</ActionContextProvider>
        </UserContextProvider>
    </AnalyticsContextProvider>
);

const App = () => {
    const Provider = useQueryClientProvider();

    return (
        <Provider>
            <ContextProviders>
                <SafeAreaProvider>
                    <NavigationContainer>
                        <StackNavigatorProvider />
                    </NavigationContainer>
                </SafeAreaProvider>
            </ContextProviders>
        </Provider>
    );
};

export default App;
