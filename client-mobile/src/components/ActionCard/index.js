import React, { useMemo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const ActionCard = ({ item, focused, onPress }) => {
    const randomBool = useMemo(() => focused || Math.random() < 0.5, []);

    return (
        <TouchableOpacity
            style={[styles.container, { height: randomBool ? 180 : 230 }]}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Image
                style={[styles.image, { height: randomBool ? 150 : 200 }]}
                source={{ uri: item.image_url }}
                resizeMode='cover'
            />
            <View style={styles.header}>
                <Text
                    style={styles.title}
                    numberOfLines={2}
                    ellipsizeMode='tail'
                >
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ActionCard;
