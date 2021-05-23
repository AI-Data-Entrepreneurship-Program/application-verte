import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import { default as AntDesignIcon } from 'react-native-vector-icons/AntDesign';
import { default as EntypoIcon } from 'react-native-vector-icons/Entypo';
import { colors } from '../consts/styles';
import HomeScreen from '../screens/Home';
import ProfilScreen from '../screens/Profil';

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
                name='Profil'
                component={ProfilScreen}
                options={{
                    tabBarVisible: false,
                    tabBarIcon: ({ focused }) => (
                        <AntDesignIcon
                            name='user'
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
