import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import * as Cartes from '../../api/cartes';
import ActionCard from '../../components/ActionCard';
import { UserContext } from '../../context/User';
import styles from './styles';

const formatFavourites = input =>
    input ? JSON.parse(input.replace(/'/g, '"')) : [];

const HomePersonnalSection = () => {
    const navigation = useNavigation();

    const { currentUserInfo } = useContext(UserContext);

    const cartesQuery = useQuery('cartes', Cartes.find);

    const [actions, setActions] = useState([]);

    useEffect(() => {
        if (!cartesQuery.isSuccess) return;

        const cartes = Object.values(cartesQuery.data.data);
        const favorites = formatFavourites(currentUserInfo?.actions);

        setActions(cartes.filter(el => favorites.includes(el.action_id)));
    }, [currentUserInfo, cartesQuery.status]);

    return (
        <>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Vos actions</Text>
            </View>

            <View style={styles.section}>
                {cartesQuery.isLoading && (
                    <Text style={styles.loadingTxt}>Chargement...</Text>
                )}

                {cartesQuery.isSuccess && actions.length === 0 && (
                    <Text style={styles.loadingTxt}>
                        Vous n'avez pas d'action pour le moment
                    </Text>
                )}

                {cartesQuery.isSuccess && actions.length !== 0 && (
                    <FlatList
                        data={_.shuffle(Object.values(actions))}
                        keyExtractor={item => item.action_id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <ActionCard
                                key={item.action_id}
                                item={item}
                                focused={true}
                                onPress={() =>
                                    navigation.navigate('ActionDetails', {
                                        item
                                    })
                                }
                            />
                        )}
                    />
                )}
            </View>
        </>
    );
};

export default HomePersonnalSection;
