import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Tab from './navigation/TabNavigator';
import HomeScreen from './screens/HomeScreen';
import SuggestionScreen from './screens/SuggestionScreen';
import CommunityScreen from './screens/CommunityScreen';

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen name='Home' component={HomeScreen} />
                <Tab.Screen name='Suggestion' component={SuggestionScreen} />
                <Tab.Screen name='Community' component={CommunityScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
