import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CommunityScreen from '../screens/CommunityScreen';
import HomeScreen from '../screens/HomeScreen';
import SuggestionScreen from '../screens/SuggestionScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Suggestion' component={SuggestionScreen} />
            <Tab.Screen name='Community' component={CommunityScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
