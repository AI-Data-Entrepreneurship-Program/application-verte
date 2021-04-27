import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeContextProvider from './contexts/Theme';
import StackNavigator from './navigation/StackNavigator';

const App = () => {
    return (
        <SafeAreaProvider>
            <ThemeContextProvider>
                <NavigationContainer>
                    <StackNavigator />
                </NavigationContainer>
            </ThemeContextProvider>
        </SafeAreaProvider>
    );
};

export default App;
