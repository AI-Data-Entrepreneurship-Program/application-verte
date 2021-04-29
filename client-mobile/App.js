import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserContextProvider from './context/UserContext';
import StackNavigator from './navigation/StackNavigator';

const client = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={client}>
            <UserContextProvider>
                <SafeAreaProvider>
                    <NavigationContainer>
                        <StackNavigator />
                    </NavigationContainer>
                </SafeAreaProvider>
            </UserContextProvider>
        </QueryClientProvider>
    );
};

export default App;
