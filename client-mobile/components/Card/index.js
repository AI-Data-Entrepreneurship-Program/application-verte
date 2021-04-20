import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles';

const troncateTitle = (title, large = false) => {
    const maxLength = large ? 30 : 12;

    if (title.length < maxLength) return title;
    return title.substring(0, maxLength).trimEnd().concat('...');
};

const Card = ({ item, large = false }) => {
    return (
        <TouchableOpacity
            style={large ? styles.containerLarge : styles.containerSmall}
            activeOpacity={0.8}
        >
            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                imageStyle={styles.imageBackground}
                source={{ uri: item.image }}
            >
                <View style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <Icon
                            name='bookmark'
                            size={28}
                            color={item.category.color}
                            style={styles.bookmark}
                        />
                        {item.user?.avatar && (
                            <Image
                                style={styles.avatar}
                                source={{ uri: item.user.avatar }}
                            />
                        )}
                    </View>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {troncateTitle(item.title, large)}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default Card;
