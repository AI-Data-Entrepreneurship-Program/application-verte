import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const ActionCard = ({ item, focused, onPress }) => {
    return focused ? (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Image style={styles.image} source={{ uri: item.image_url }} />
            <View style={styles.header}>
                <Text
                    style={styles.title}
                    numberOfLines={1}
                    ellipsizeMode='tail'
                >
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    ) : (
        <View>
            <Text>not focussed not yet implemented</Text>
        </View>
    );
};

export default ActionCard;
