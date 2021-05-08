import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import ActionCard from '../../components/ActionCard';
import styles from './styles';

const HomeDiscoverSection = ({ actions, setTogglePersonnalSection }) => {
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Decouverte</Text>
            </View>

            <View style={styles.section}>
                <MasonryList
                    data={actions}
                    keyExtractor={item => item.id}
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
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </>
    );
};

export default HomeDiscoverSection;
