import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../consts/styles';
import styles from './styles';

const getCategoryColor = category => {
    switch (category) {
        case 'Energie':
            return 'gold';
        case 'Zero déchets':
            return 'forestgreen';
        case 'Alimentation':
            return 'darkorange';
        case 'Transport':
            return 'peru';
        default:
            return 'steelblue';
    }
};

const Card = ({ item, yours, setYours, refetch }) => {
    const { navigate } = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                style={styles.container}
                activeOpacity={0.8}
                onPress={() =>
                    navigate('Details', { item, yours, setYours, refetch })
                }
            >
                {!item.action_image && (
                    <View
                        style={[
                            styles.container,
                            { backgroundColor: colors.four }
                        ]}
                    >
                        <View style={styles.header}>
                            <View style={{ flex: 1 }} />
                            {item.user?.avatar && (
                                <View style={styles.userPicturePlaceholder} />
                            )}
                            <Icon
                                style={{ marginHorizontal: 10 }}
                                name='bookmark'
                                size={24}
                                color={getCategoryColor(item.category)}
                            />
                        </View>

                        <View style={styles.footer}>
                            <Text
                                style={styles.title}
                                numberOfLines={1}
                                ellipsizeMode='tail'
                            >
                                {item.action_title}
                            </Text>
                        </View>
                    </View>
                )}

                {item.action_image && (
                    <ImageBackground
                        style={styles.container}
                        imageStyle={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 20
                        }}
                        source={{ uri: item.action_image }}
                    >
                        <View style={styles.header}>
                            <View style={{ flex: 1 }} />
                            {item.user?.avatar && (
                                <View style={styles.userPicturePlaceholder} />
                            )}
                            <Icon
                                style={{ marginHorizontal: 10 }}
                                name='bookmark'
                                size={24}
                                color={getCategoryColor(item.category)}
                            />
                        </View>
                        <View style={styles.footer}>
                            <Text
                                style={styles.title}
                                numberOfLines={1}
                                ellipsizeMode='tail'
                            >
                                {item.action_title}
                            </Text>
                        </View>
                    </ImageBackground>
                )}
            </TouchableOpacity>
        </View>
    );
};

export default Card;
