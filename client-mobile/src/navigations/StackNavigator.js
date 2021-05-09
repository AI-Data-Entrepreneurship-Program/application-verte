import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ActionDetailsScreen from '../screens/ActionDetails';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';

const StackNavigator = createStackNavigator();

export default function StackNavigatorProvider() {
    return (
        <StackNavigator.Navigator initialRouteName='Login'>
            <StackNavigator.Screen
                name='Login'
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name='Home'
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name='ActionDetails'
                component={ActionDetailsScreen}
                options={{ headerShown: false }}
            />
        </StackNavigator.Navigator>
    );
}
