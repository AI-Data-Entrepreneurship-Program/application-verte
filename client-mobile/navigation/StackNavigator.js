import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='HomeStack'
                component={TabNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
