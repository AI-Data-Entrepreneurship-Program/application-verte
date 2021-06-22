import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CardDetails from '../screens/CardDetailsExp';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import SplashScreen from '../screens/Splash';

const StackNavigator = createStackNavigator();

export default function StackNavigatorProvider() {
    return (
        <StackNavigator.Navigator initialRouteName='Splash'>
            <StackNavigator.Screen
                name='Splash'
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name='CardDetails'
                component={CardDetails}
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
