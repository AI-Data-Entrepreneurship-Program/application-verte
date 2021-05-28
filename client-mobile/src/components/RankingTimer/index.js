import React from 'react';
import { Text, View } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import { colors } from '../../consts/styles';
import styles from './styles';

const RankingTimer = () => {
    const size = 256;
    const strokeWidth = 6;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>
                <G rotation='-90' origin={center}>
                    <Circle fill='white' cx={center} cy={center} r={radius} />

                    <Circle
                        stroke={colors.lightPurple}
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={
                            circumference - (circumference * 66) / 100
                        }
                    />
                </G>
            </Svg>

            <Text style={styles.title}>1:06:45:23</Text>
        </View>
    );
};

export default RankingTimer;
