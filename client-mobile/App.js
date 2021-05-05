import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigatorProvider from './src/navigations/StackNavigator';

const App = () => {
    return (
        <NavigationContainer>
            <StackNavigatorProvider />
        </NavigationContainer>
    );
};

export default App;
