import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigatorProvider from './src/navigations/StackNavigator';

import SuggestionsScreen from './src/screens/Suggestions';

const App = () => {
    return (
        // <SafeAreaProvider>
        //     <NavigationContainer>
        //         <StackNavigatorProvider />
        //     </NavigationContainer>
        // </SafeAreaProvider>
        <SuggestionsScreen/>
    );
};

export default App;
