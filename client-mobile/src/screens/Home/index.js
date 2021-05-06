import MasonryList from '@react-native-seoul/masonry-list';
import _ from 'lodash';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionCard from '../../components/ActionCard';
import BackgroundCurve from '../../components/BackgroundCurve';
import { data } from '../../consts/fakeData';
import { colors } from '../../consts/styles';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
    const [actions, setActions] = useState(_.shuffle(data));

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Vos actions</Text>
            </View>
            <View style={[styles.section, { width: '100%' }]}>
                <FlatList
                    data={_.take(actions, 4)}
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

            <BackgroundCurve firstColor='white' secondColor={colors.orange} />
        </SafeAreaView>
    );
};

export default HomeScreen;
