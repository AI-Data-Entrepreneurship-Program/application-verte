import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({
    containerStyle = {},
    titleStyle = {},
    title,
    onPress = () => {}
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, containerStyle]}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Text style={[styles.title, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

                