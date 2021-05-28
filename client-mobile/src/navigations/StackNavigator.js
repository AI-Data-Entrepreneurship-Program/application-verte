import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CardDetails from '../screens/CardDetailsExp';
import FormScreen from '../screens/Form';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import ProfileScreen from '../screens/Profile';
import RegisterScreen from '../screens/Register';

const StackNavigator = createStackNavigator();

export default function StackNavigatorProvider() {
    return (
        <StackNavigator.Navigator initialRouteName='Home'>
            <StackNavigator.Screen
                name='CardDetails'
                component={CardDetails}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name='Login'
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name='Register'
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name='Form'
                component={FormScreen}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name='Home'
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name='Profile'
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
        </StackNavigator.Navigator>
    );
}
