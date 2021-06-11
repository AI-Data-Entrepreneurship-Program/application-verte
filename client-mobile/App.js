import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import ActionContextProvider from './src/context/ActionContextProvider';
import AnalyticsContextProvider from './src/context/AnalyticsContextProvider';
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
    const [isFontLoaded] = useFonts({
        'roboto-regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf')
    });

    return isFontLoaded ? (
        <QueryClientProvider client={client}>
            <AnalyticsContextProvider>
                <UserContextProvider>
                    <ActionContextProvider>
                        <SafeAreaProvider>
                            <NavigationContainer>
                                <StackNavigatorProvider />
                            </NavigationContainer>
                        </SafeAreaProvider>
                    </ActionContextProvider>
                </UserContextProvider>
            </AnalyticsContextProvider>
        </QueryClientProvider>
    ) : (
        <AppLoading />
    );
};

export default App;
