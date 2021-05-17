import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import { default as EntypoIcon } from 'react-native-vector-icons/Entypo';
import { default as FontAwesome5Icon } from 'react-native-vector-icons/FontAwesome5';
import { default as OcticonsIcon } from 'react-native-vector-icons/Octicons';
import { colors } from '../consts/styles';
import HomeScreen from '../screens/Home';
import RankingScreen from '../screens/Ranking';
import SuggestionsScreen from '../screens/Suggestions';

const BottomTabNavigator = createBottomTabNavigator();

export default function BottomTabNavigatorProvider() {
    return (
        <BottomTabNavigator.Navigator
            tabBarOptions={{
                showLabel: false,
                style: styles.container
            }}
        >
            <BottomTabNavigator.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <EntypoIcon
                            name='home'
                            size={24}
                            color={
                                focused ? colors.darkGreen : colors.lightGreen
                            }
                        />
                    )
                }}
            />
            <BottomTabNavigator.Screen
                name='Suggestions'
                component={SuggestionsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <OcticonsIcon
                            name='comment-discussion'
                            size={24}
                            color={
                                focused ? colors.darkGreen : colors.lightGreen
                            }
                        />
                    )
                }}
            />
            <BottomTabNavigator.Screen
                name='Ranking'
                component={RankingScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5Icon
                            name='medal'
                            size={24}
                            color={
                                focused ? colors.darkGreen : colors.lightGreen
                            }
                        />
                    )
                }}
            />
        </BottomTabNavigator.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '40%',
        height: 50,
        bottom: 12.5,
        left: '30%',
        right: '30%',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        elevation: 0
    }
});
