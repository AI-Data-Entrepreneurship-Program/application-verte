import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/Home';

const BottomTabNavigator = createBottomTabNavigator();

export default function BottomTabNavigatorProvider() {
    return (
        <BottomTabNavigator.Navigator>
            <BottomTabNavigator.Screen name='Home' component={HomeScreen} />
        </BottomTabNavigator.Navigator>
    );
}
