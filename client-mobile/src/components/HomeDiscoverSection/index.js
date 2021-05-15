import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from 'react-query';
import * as Cartes from '../../api/cartes';
import ActionCard from '../../components/ActionCard';
import styles from './styles';

const HomeDiscoverSection = () => {
    const navigation = useNavigation();

    const cartesQuery = useQuery('cartes', Cartes.find);

    return (
        <>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Découverte</Text>
            </View>

            <View style={styles.section}>
                {cartesQuery.isLoading && (
                    <Text style={styles.loadingTxt}>Chargement...</Text>
                )}

                {cartesQuery.isSuccess && (
                    <MasonryList
                        data={_.shuffle(Object.values(cartesQuery.data.data))}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <ActionCard
                                key={item.id}
                                item={item}
                                focused={false}
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

export default HomeDiscoverSection;
