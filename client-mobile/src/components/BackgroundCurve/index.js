import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';
import styles from './styles';

const BackgroundCurve = ({ firstColor, secondColor }) => {
    const { width, height } = useWindowDimensions();

    return (
        <View style={[StyleSheet.absoluteFill, styles.container]}>
            <Svg
                width='100%'
                height='50%'
                style={{ backgroundColor: firstColor }}
            >
                <Ellipse
                    cx={width}
                    cy={height / 2}
                    rx={width / 2}
                    ry={height / 4}
                    fill={secondColor}
                />
            </Svg>
            <Svg
                width='100%'
                height='50%'
                style={{ backgroundColor: secondColor }}
            >
                <Ellipse
                    cx={0}
                    cy={0}
                    rx={width / 2}
                    ry={height / 4}
                    fill={firstColor}
                />
            </Svg>
        </View>
    );
};

export default BackgroundCurve;
