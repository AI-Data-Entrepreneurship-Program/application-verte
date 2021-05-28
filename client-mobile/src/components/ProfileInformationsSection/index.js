import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { UserContext } from '../../context/UserContextProvider';
import styles from './styles';

const ProfileInformationsSection = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={{ uri: currentUser.avatar_url }}
            />
            <Text style={styles.username}>{currentUser.username}</Text>
        </View>
    );
};

export default ProfileInformationsSection;
