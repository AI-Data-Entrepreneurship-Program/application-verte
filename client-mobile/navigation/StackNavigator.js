import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DetailsScreen from '../screens/DetailsScreen';
import LoginQuestionScreen from '../screens/LoginScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='LoginQuestion'>
            <Stack.Screen
                name='LoginQuestion'
                component={LoginQuestionScreen}
                options={{ headerShown: false }}
            />
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
