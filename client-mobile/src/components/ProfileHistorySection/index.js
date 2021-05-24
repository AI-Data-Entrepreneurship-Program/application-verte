import AsyncStorage from '@react-native-async-storage/async-storage';
import MasonryList from '@react-native-seoul/masonry-list';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ActionCard from '../ActionCard';
import styles from './styles';

const ProfileHistorySection = () => {
    const [actions, setActions] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('@user_actions').then(
            data => data && setActions(JSON.parse(data))
        );
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Mes actions</Text>
            </View>

            {actions.length === 0 && (
                <Text style={styles.placeholderText}>
                    Vous n'avez pas d'actions
                </Text>
            )}

            {actions.length !== 0 && (
                <MasonryList
                    data={actions}
                    keyExtractor={item => item.action_id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <ActionCard
                            key={item.action_id}
                            item={item}
                            focused={false}
                        />
                    )}
                />
            )}
        </View>
    );
};

export default ProfileHistorySection;
