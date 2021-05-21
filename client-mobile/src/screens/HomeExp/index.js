import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeExpHeader from '../../components/HomeExpHeader';
import HomeExpMasonry from '../../components/HomeExpMasonry';
import styles from './styles';

const HomeExpScreen = () => {
    const [currentFilter, setCurrentFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <HomeExpHeader
                {...{
                    currentFilter,
                    setCurrentFilter,
                    searchQuery,
                    setSearchQuery
                }}
            />
            <HomeExpMasonry {...{ currentFilter, searchQuery }} />
        </SafeAreaView>
    );
};

export default HomeExpScreen;
