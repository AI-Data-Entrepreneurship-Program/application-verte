import React from 'react';
import { TouchableOpacity } from 'react-native';
import { default as AntDesign } from 'react-native-vector-icons/AntDesign';
import { default as Entypo } from 'react-native-vector-icons/Entypo';
import { default as MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const IconSelector = ({ type, name, size, color }) => {
    switch (type) {
        default:
        case 'Entypo':
            return <Entypo {...{ name, size, color }} />;
        case 'MaterialIcons':
            return <MaterialIcons {...{ name, size, color }} />;
        case 'AntDesign':
            return <AntDesign {...{ name, size, color }} />;
    }
};

const TouchableIcon = ({
    type = 'Entypo',
    style = {},
    size = 24,
    color = 'black',
    onPress = () => {},
    activeOpacity = 0.8,
    name
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, style]}
            {...{ activeOpacity, onPress }}
        >
            <IconSelector {...{ type, name, size, color }} />
        </TouchableOpacity>
    );
};

export default TouchableIcon;
