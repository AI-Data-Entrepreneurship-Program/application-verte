import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { /* FlatList,  */ Text, View } from 'react-native';
import ActionCard from '../../components/ActionCard';
import styles from './styles';

const HomeDiscoverSection = ({ actions }) => {
    const navigation = useNavigation();

    return (
        <>
            {/* do not change fragment to a View, it will break for some reason */}
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
                                navigation.navigate('ActionDetails', { item })
                            }
                        />
                    )}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={<View style={{ height: 260 }} />}
                />
            </View>
        </>
    );
};

export default HomeDiscoverSection;
