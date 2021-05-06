import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ActionDetailsScreen from '../screens/ActionDetails';
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
            <StackNavigator.Screen
                name='ActionDetails'
                component={ActionDetailsScreen}
                options={{ headerShown: false }}
            />
        </StackNavigator.Navigator>
    );
}
