import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SuggestionScreen from '../screens/SuggestionScreen';
import CommunityScreen from '../screens/CommunityScreen';
import LoginQuestionScreen from '../screens/LoginQuestion';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='LoginQuestion'>
            <Tab.Screen name="LoginQuestion" component={LoginQuestionScreen} />
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Suggestion' component={SuggestionScreen} />
            <Tab.Screen name='Community' component={CommunityScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
