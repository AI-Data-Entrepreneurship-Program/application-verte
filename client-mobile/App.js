import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import ActionContextProvider from './src/context/ActionContextProvider';
import UserContextProvider from './src/context/UserContextProvider';
import StackNavigatorProvider from './src/navigations/StackNavigator';

const client = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

const App = () => {
    return (
        <QueryClientProvider client={client}>
            <UserContextProvider>
                <ActionContextProvider>
                    <SafeAreaProvider>
                        <NavigationContainer>
                            <StackNavigatorProvider />
                        </NavigationContainer>
                    </SafeAreaProvider>
                </ActionContextProvider>
            </UserContextProvider>
        </QueryClientProvider>
    );
};

export default App;
