import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';
import styles from './styles';

const TypeOne = ({ firstColor, secondColor }) => {
    const { width, height } = useWindowDimensions();

    return (
        <>
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
        </>
    );
};

const TypeTwo = ({ firstColor, secondColor }) => {
    const { width, height } = useWindowDimensions();

    return (
        <>
            <Svg
                width='100%'
                height='80%'
                style={{ backgroundColor: firstColor }}
            >
                <Ellipse
                    cx={0}
                    cy='100%'
                    rx={width / 2}
                    ry={height / 4}
                    fill={secondColor}
                />
            </Svg>
            <Svg
                width='100%'
                height='20%'
                style={{ backgroundColor: secondColor }}
            >
                <Ellipse
                    cx={width}
                    cy={0}
                    rx={width / 2}
                    ry={height / 6}
                    fill={firstColor}
                />
            </Svg>
        </>
    );
};

const BackgroundCurve = ({ firstColor, secondColor, type = 1 }) => {
    return (
        <View style={[StyleSheet.absoluteFill, styles.container]}>
            {type === 1 && (
                <TypeOne firstColor={firstColor} secondColor={secondColor} />
            )}
            {type === 2 && (
                <TypeTwo firstColor={firstColor} secondColor={secondColor} />
            )}
        </View>
    );
};

export default BackgroundCurve;
