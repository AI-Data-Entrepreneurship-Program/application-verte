import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import gstyles, { colors } from '../../consts/styles';
import BackgroundCurve from '../BackgroundCurve';
import styles from './styles';

const ScreenContainer = ({
    children,
    style = {},
    safe = true,
    curve = true
}) => {
    return safe ? (
        <SafeAreaView style={[gstyles.containerCenter, style]}>
            <View style={styles.children}>{children}</View>
            {curve && (
                <BackgroundCurve
                    firstColor='white'
                    secondColor={colors.lightGreen}
                />
            )}
        </SafeAreaView>
    ) : (
        <View style={[gstyles.containerCenter, style]}>
            <View style={styles.children}>{children}</View>
            {curve && (
                <BackgroundCurve
                    firstColor='white'
                    secondColor={colors.lightGreen}
                />
            )}
        </View>
    );
};

export default ScreenContainer;
