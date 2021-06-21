import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const SlashScreen = () => {
    const { navigate } = useNavigation();

    const imagePath = require('../../../assets/logo_turtle.png');

    useEffect(() => {
        const timer = setTimeout(() => navigate('Home'), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={imagePath} />
        </SafeAreaView>
    );
};

export default SlashScreen;
