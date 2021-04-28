import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Card = ({ item }) => {
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            onPress={() => navigate('Details', { item })}
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
                    color={item.category.color}
                />
            </View>

            <View style={styles.footer}>
                <Text
                    style={styles.title}
                    numberOfLines={1}
                    ellipsizeMode='tail'
                >
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default Card;
