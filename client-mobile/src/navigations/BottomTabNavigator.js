import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';

const BottomTabNavigator = createBottomTabNavigator();

export default function BottomTabNavigatorProvider() {
    return (
        <BottomTabNavigator.Navigator>
            <BottomTabNavigator.Screen
                name='Home'
                component={HomeScreen}
                options={{ tabBarVisible: false }}
            />
            <BottomTabNavigator.Screen
                name='Profile'
                component={ProfileScreen}
                options={{ tabBarVisible: false }}
            />
        </BottomTabNavigator.Navigator>
    );
}
