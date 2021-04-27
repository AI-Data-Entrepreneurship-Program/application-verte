import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DetailsScreen from '../screens/DetailsScreen';
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
            <Stack.Screen
                name='Details'
                component={DetailsScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
