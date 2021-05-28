import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../consts/styles';
import styles from './styles';

const HeaderProfile = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.pictureContainer}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Profil')}
            >
                <Icon name='user' size={32} color={colors.lightPurple} />
            </TouchableOpacity>
        </View>
    );
};

export default HeaderProfile;
