import React, { useMemo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

export const verifyImageUrl = url => {
    const verifiedSuffix = ['jpg', 'png'];
    const splittedUrl = url.split('.');
    return verifiedSuffix.includes(splittedUrl[splittedUrl.length - 1]);
};

const ActionCard = ({ item, focused, onPress }) => {
    const randomBool = useMemo(() => focused || Math.random() < 0.5, []);

    const isImageExist = verifyImageUrl(item.image_url);

    return (
        <TouchableOpacity
            style={[styles.container, { height: randomBool ? 180 : 230 }]}
            activeOpacity={0.8}
            onPress={onPress}
        >
            {isImageExist && (
                <Image
                    style={[styles.image, { height: randomBool ? 150 : 200 }]}
                    source={{ uri: item.image_url }}
                    resizeMode='cover'
                />
            )}

            {!isImageExist && (
                <View
                    style={[
                        styles.image,
                        styles.notLoadedImg,
                        {
                            height: randomBool ? 150 : 200
                        }
                    ]}
                >
                    <Icon name='circle-with-cross' size={28} />
                </View>
            )}

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
