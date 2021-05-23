import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../../components/HomeHeader';
import HomeMasonry from '../../components/HomeMasonry';
import styles from './styles';

const HomeScreen = () => {
    const [currentFilter, setCurrentFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader
                {...{
                    currentFilter,
                    setCurrentFilter,
                    searchQuery,
                    setSearchQuery
                }}
            />
            <HomeMasonry {...{ currentFilter, searchQuery }} />
        </SafeAreaView>
    );
};

export default HomeScreen;
