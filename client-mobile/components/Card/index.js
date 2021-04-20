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
    const maxLength = large ? 18 : 35;

    if (title.length < maxLength) return title;
    return title.substring(0, maxLength).trimEnd().concat('...');
};

const Large = ({ item }) => {
    const containerPressHandler = () => {};

    return (
        <TouchableOpacity
            style={styles.largeContainer}
            activeOpacity={0.8}
            onPress={containerPressHandler}
        >
            <ImageBackground
                style={styles.imageBackgroundContainer}
                imageStyle={styles.imageBackground}
                source={{ uri: item.image }}
            >
                <View style={[styles.header, { flex: 1 }]}></View>
                <View style={styles.footer}>
                    <Text
                        style={[
                            styles.title,
                            { color: 'white', marginLeft: 5 }
                        ]}
                    >
                        {troncateTitle(item.title, true)}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const Small = ({ item }) => {
    const containerPressHandler = () => {};

    return (
        <TouchableOpacity
            style={styles.smallContainer}
            activeOpacity={0.8}
            onPress={containerPressHandler}
        >
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.content}>
                <Text style={styles.title}>{troncateTitle(item.title)}</Text>
            </View>
            <View style={styles.header}>
                {item.user?.avatar && (
                    <Image
                        style={styles.avatar}
                        source={{ uri: item.user.avatar }}
                    />
                )}
                <Icon
                    style={styles.bookmark}
                    name='bookmark'
                    size={28}
                    color={item.category.color}
                />
            </View>
        </TouchableOpacity>
    );
};

const Card = ({ item, large = false }) => {
    return large ? <Large item={item} /> : <Small item={item} />;
};

export default Card;
