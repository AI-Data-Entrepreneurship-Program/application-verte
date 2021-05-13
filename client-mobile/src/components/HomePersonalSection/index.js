import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ActionCard from '../../components/ActionCard';
import styles from './styles';

const HomePersonnalSection = ({ actions }) => {
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Vos actions</Text>
            </View>

            <View style={styles.section}>
                <FlatList
                    data={actions}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ActionCard
                            key={item.id}
                            item={item}
                            focused={true}
                            onPress={() =>
                                navigation.navigate('ActionDetails', { item })
                            }
                        />
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </>
    );
};

export default HomePersonnalSection;
