import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/Home';
import RankingScreen from '../screens/Ranking';

const BottomTabNavigator = createBottomTabNavigator();

export default function BottomTabNavigatorProvider() {
    return (
        <BottomTabNavigator.Navigator>
            <BottomTabNavigator.Screen name='Home' component={HomeScreen} />
            <BottomTabNavigator.Screen
                name='Ranking'
                component={RankingScreen}
            />
        </BottomTabNavigator.Navigator>
    );
}
