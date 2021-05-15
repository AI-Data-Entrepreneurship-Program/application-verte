import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import StackNavigatorProvider from './src/navigations/StackNavigator';

const client = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={client}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <StackNavigatorProvider />
                </NavigationContainer>
            </SafeAreaProvider>
        </QueryClientProvider>
    );
};

export default App;
