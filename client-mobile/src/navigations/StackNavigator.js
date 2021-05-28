import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CardDetails from '../screens/CardDetailsExp';
import FormScreen from '../screens/Form';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import BottomTabNavigatorProvider from './BottomTabNavigator';

const StackNavigator = createStackNavigator();

export default function StackNavigatorProvider() {
    return (
        <StackNavigator.Navigator initialRouteName='BottomTabStack'>
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
                name='BottomTabStack'
                component={BottomTabNavigatorProvider}
                options={{ headerShown: false }}
            />
        </StackNavigator.Navigator>
    );
}
