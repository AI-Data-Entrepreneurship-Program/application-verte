import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/Home';

const StackNavigator = createStackNavigator();

export default function StackNavigatorProvider() {
    return (
        <StackNavigator.Navigator initialRouteName='Home'>
            <StackNavigator.Screen
                name='Home'
                component={HomeScreen}
                options={{ headerShown: false }}
            />
        </StackNavigator.Navigator>
    );
}
