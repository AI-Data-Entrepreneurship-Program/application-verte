import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

const PressableIcon = ({
    name,
    style: propsStyles = {},
    size,
    color,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, propsStyles]}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Icon style={styles.icon} name={name} size={size} color={color} />
        </TouchableOpacity>
    );
};

export default PressableIcon;
