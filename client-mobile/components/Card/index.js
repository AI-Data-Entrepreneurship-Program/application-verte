import React, { useContext } from 'react';
import {
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View
} from 'react-native';
import { ThemeContext } from '../../contexts/Theme';
import PressableIcon from '../PressableIcon';
import styles from './styles';

const getCardWidth = (width, type) => {
    let cardWidth = width;

    if (type === 'normal') {
        if (width <= 400) cardWidth = width * 0.9;
        else cardWidth = 400;
    }

    if (type === 'detailed') {
        if (width <= 800) cardWidth = width * 0.9;
        else cardWidth = 700;
    }

    return cardWidth;
};

const Normal = ({ item }) => {
    const { width } = useWindowDimensions();
    const { theme } = useContext(ThemeContext);
    const colors = Object.values(theme.colors);

    const containerPressHandler = () => {};

    const ImageContent = () => {
        return (
            <View style={{ flex: 1 }}>
                <View style={[styles.header, { flex: 1 }]}></View>
                <View style={styles.footer}>
                    <Text
                        style={[
                            styles.title,
                            { color: 'white', marginLeft: 5 }
                        ]}
                        numberOfLines={1}
                        ellipsizeMode='tail'
                    >
                        {item.title}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <TouchableOpacity
            style={[
                styles.normalContainer,
                { width: getCardWidth(width, 'normal') }
            ]}
            activeOpacity={0.8}
            onPress={containerPressHandler}
        >
            {item.image ? (
                <ImageBackground
                    style={styles.imageBackgroundContainer}
                    imageStyle={styles.imageBackground}
                    source={{ uri: item.image }}
                >
                    <ImageContent />
                </ImageBackground>
            ) : (
                <View
                    style={[
                        styles.imageBackgroundContainer,
                        styles.imageBackground,
                        {
                            backgroundColor:
                                colors[
                                    Math.floor(Math.random() * colors.length)
                                ]
                        }
                    ]}
                >
                    <ImageContent />
                </View>
            )}
        </TouchableOpacity>
    );
};

const Detailed = ({ item }) => {
    const { width } = useWindowDimensions();
    const { theme } = useContext(ThemeContext);
    const colors = Object.values(theme.colors);

    const containerPressHandler = () => {};

    return (
        <TouchableOpacity
            style={[
                styles.detailedContainer,
                { width: getCardWidth(width, 'detailed') }
            ]}
            activeOpacity={0.8}
            onPress={containerPressHandler}
        >
            {item.image ? (
                <Image style={styles.image} source={{ uri: item.image }} />
            ) : (
                <View
                    style={[
                        styles.image,
                        {
                            backgroundColor:
                                colors[
                                    Math.floor(Math.random() * colors.length)
                                ]
                        }
                    ]}
                />
            )}
            <View style={styles.content}>
                <Text
                    style={styles.title}
                    numberOfLines={2}
                    ellipsizeMode='tail'
                >
                    {item.title}
                </Text>
            </View>
            <View style={styles.header}>
                {item.user?.avatar && (
                    <Image
                        style={styles.avatar}
                        source={{ uri: item.user.avatar }}
                    />
                )}
                <PressableIcon
                    style={styles.bookmark}
                    name='bookmark'
                    size={28}
                    color={item.category.color}
                />
            </View>
        </TouchableOpacity>
    );
};

const Card = ({ item, type = 'normal' }) => {
    if (type === 'normal') return <Normal item={item} />;
    if (type === 'detailed') return <Detailed item={item} />;

    throw new Error('Unknown card type');
};

export default Card;
