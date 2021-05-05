import React from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ScreenContainer from './src/components/ScreenContainer';

const App = () => {
    return (
        <SafeAreaProvider>
            <ScreenContainer>
                <Text>Hello, world!</Text>
            </ScreenContainer>
        </SafeAreaProvider>
    );
};

export default App;
