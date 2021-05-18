import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeExpHeader from '../../components/HomeExpHeader';
import HomeExpMasonry from '../../components/HomeExpMasonry';
import styles from './styles';

const HomeExpScreen = () => {
    const [currentFilter, setCurrentFilter] = useState('All');

    return (
        <SafeAreaView style={styles.container}>
            <HomeExpHeader {...{ currentFilter, setCurrentFilter }} />
            <HomeExpMasonry currentFilter={currentFilter} />
        </SafeAreaView>
    );
};

export default HomeExpScreen;
