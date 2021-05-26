import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../../components/HomeHeader';
import HomeMasonry from '../../components/HomeMasonry';
import styles from './styles';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader />
            <HomeMasonry />
        </SafeAreaView>
    );
};

export default HomeScreen;
