import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ActionDetailsScreen from '../screens/ActionDetails';
import FormScreen from '../screens/Form';
import LoginScreen from '../screens/Login';
import ProfilScreen from '../screens/Profil';
import RegisterScreen from '../screens/Register';
import BottomTabNavigatorProvider from './BottomTabNavigator';

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
            <StackNavigator.Screen
                name='ActionDetails'
                component={ActionDetailsScreen}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name='Profil'
                component={ProfilScreen}
                options={{ headerShown: false }}
            />
        </StackNavigator.Navigator>
    );
}
