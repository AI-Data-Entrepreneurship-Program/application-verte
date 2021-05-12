import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ActionDetailsScreen from '../screens/ActionDetails';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import ProfilScreen from '../screens/Profil'

const StackNavigator = createStackNavigator();

export default function StackNavigatorProvider() {
    return (
        <StackNavigator.Navigator initialRouteName='Profil'>
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
            <StackNavigator.Screen
                name='Profil'
                component={ProfilScreen}
                options={{ headerShown: false }}
            />
        </StackNavigator.Navigator>
    );
}
