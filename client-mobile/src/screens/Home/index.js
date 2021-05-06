import MasonryList from '@react-native-seoul/masonry-list';
import _ from 'lodash';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
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
                <Text style={styles.sectionTitle}>Discover</Text>
            </View>
            <View style={styles.section}>
                <MasonryList
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
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <BackgroundCurve firstColor='white' secondColor={colors.orange} />
        </SafeAreaView>
    );
};

export default HomeScreen;
