import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../consts/styles';
import { verifyImageUrl } from '../ActionCard';
import TouchableIcon from '../TouchableIcon';
import styles from './styles';

const CardDetailsContent = ({ item }) => {
    const startActionHandler = async () => {
        const data = await AsyncStorage.getItem('@user_actions');
        let newData = [item];

        if (data)
            newData = newData.concat(
                JSON.parse(data).filter(el => el.action_id !== item.action_id)
            );

        await AsyncStorage.setItem('@user_actions', JSON.stringify(newData));
    };

    return (
        <View style={styles.container}>
            {verifyImageUrl(item.image_url) ? (
                <Image style={styles.image} source={{ uri: item.image_url }} />
            ) : (
                <View style={styles.image}>
                    <TouchableIcon name='circle-with-cross' size={28} />
                </View>
            )}

            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={startActionHandler}
            >
                <TouchableIcon
                    type='AntDesign'
                    name='plus'
                    size={20}
                    color={colors.lightOrange}
                />
                <Text style={styles.buttonTitle}>Commencer</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CardDetailsContent;
