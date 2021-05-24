import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '../../consts/styles';
import styles from './styles';

const ProfileInformationsSection = () => {
    return (
        <View style={styles.container}>
            <Icon name='user' size={124} color={colors.darkGreen} />
            <Text style={styles.username}>Jean Ecolo</Text>
        </View>
    );
};

export default ProfileInformationsSection;
