import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
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
    let [fontsLoaded] = useFonts({
        'Poppins-text': require('./assets/fonts/Poppins/Poppins-Light.ttf'),
        'Poppins-title': require('./assets/fonts/Poppins/Poppins-Medium.ttf')
    });

    const Provider = useQueryClientProvider();

    return fontsLoaded ? (
        <Provider>
            <ContextProviders>
                <SafeAreaProvider>
                    <NavigationContainer>
                        <StackNavigatorProvider />
                    </NavigationContainer>
                </SafeAreaProvider>
            </ContextProviders>
        </Provider>
    ) : (
        <AppLoading />
    );
};

export default App;
