import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { useQuery } from 'react-query';
import * as Cartes from '../../api/cartes';
import ActionCard from '../../components/ActionCard';
import styles from './styles';

const HomeMasonry = ({ currentFilter, searchQuery }) => {
    const { width } = useWindowDimensions();
    const cartesQuery = useQuery('cartes', Cartes.find);
    const navigation = useNavigation();

    const [cartes, setCartes] = useState([]);

    useEffect(() => {
        cartesQuery.isSuccess &&
            setCartes(Object.values(cartesQuery.data.data));
    }, [cartesQuery.status]);

    useEffect(() => {
        if (!cartesQuery.isSuccess) return;

        setCartes(
            currentFilter === 'All'
                ? Object.values(cartesQuery.data.data)
                : Object.values(cartesQuery.data.data).filter(el =>
                      el.category.includes(currentFilter)
                  )
        );
    }, [currentFilter]);

    useEffect(() => {
        if (!cartesQuery.isSuccess) return;

        setCartes(
            searchQuery.length === 0
                ? Object.values(cartesQuery.data.data)
                : Object.values(cartesQuery.data.data).filter(el =>
                      el.title.toLowerCase().includes(searchQuery.toLowerCase())
                  )
        );
    }, [searchQuery]);

    return (
        <>
            {cartesQuery.isLoading && (
                <Text style={styles.loadingText}>Chargement...</Text>
            )}

            {cartesQuery.isSuccess && (
                <MasonryList
                    data={cartes}
                    keyExtractor={item => item.action_id}
                    numColumns={Math.floor(width / 170)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <ActionCard
                            key={item.action_id}
                            item={item}
                            focused={false}
                            onPress={() =>
                                navigation.navigate('CardDetails', { item })
                            }
                        />
                    )}
                />
            )}
        </>
    );
};

export default HomeMasonry;