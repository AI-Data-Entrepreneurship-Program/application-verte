import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserContextProvider from './src/context/User';
import StackNavigatorProvider from './src/navigations/StackNavigator';

const client = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={client}>
            <UserContextProvider>
                <SafeAreaProvider>
                    <NavigationContainer>
                        <StackNavigatorProvider />
                    </NavigationContainer>
                </SafeAreaProvider>
            </UserContextProvider>
        </QueryClientProvider>
    );
};

export default App;
