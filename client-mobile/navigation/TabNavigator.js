import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SuggestionScreen from '../screens/SuggestionScreen';
import CommunityScreen from '../screens/CommunityScreen';

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
