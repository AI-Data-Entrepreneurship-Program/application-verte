import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const LoginInputFooter = ({
    leftTitle,
    buttonTitle,
    onLeftTitlePress,
    onButtonPress
}) => {
    return (
        <View style={styles.inputFooterContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={onLeftTitlePress}>
                <Text style={styles.inputFooterText}>{leftTitle}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.inputFooterBtn}
                activeOpacity={0.8}
                onPress={onButtonPress}
            >
                <Text style={styles.inputFooterBtnTitle}>{buttonTitle}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginInputFooter;
