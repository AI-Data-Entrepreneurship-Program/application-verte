import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigatorProvider from './src/navigations/StackNavigator';

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <StackNavigatorProvider />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
