import MasonryList from '@react-native-seoul/masonry-list';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionCard from '../../components/ActionCard';
import BackgroundCurve from '../../components/BackgroundCurve';
import { data } from '../../consts/fakeData';
import { colors } from '../../consts/styles';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
    const [actions, setActions] = useState(data);

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
                        <ActionCard key={item.id} item={item} focused={true} />
                    )}
                    numColumns={2}
                />
            </View>

            <BackgroundCurve
                firstColor='white'
                secondColor={colors.lightGreen}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
