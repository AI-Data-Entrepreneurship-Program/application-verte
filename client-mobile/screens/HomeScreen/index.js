import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import _ from 'lodash';

import styles from './styles';
import Card from '../../components/Card';

const data = [
    {
        id: 1,
        title: 'How to recycle cans',
        image:
            'https://www.instrupix.com/wp-content/uploads/2019/10/diy-rope-wrapped-tin-cans-for-office-supplies.jpg',
        user: {
            avatar:
                'https://i.pinimg.com/originals/ce/da/29/ceda297b3ec4d9f166e3fbd408becb25.png'
        },
        category: { color: 'pink' }
    },
    {
        id: 2,
        title: 'Reduce how much electricity we use',
        image:
            'https://cdn.pixabay.com/photo/2020/05/31/19/53/light-bulb-5244001_960_720.jpg',
        category: { color: 'orange' }
    },
    {
        id: 3,
        title: 'Install solar pannels',
        image:
            'https://cdn.pixabay.com/photo/2012/03/03/23/11/alternative-21581_960_720.jpg',
        category: { color: 'orange' }
    },
    {
        id: 4,
        title: 'Stop sending emails',
        image:
            'https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373_960_720.jpg',
        category: { color: 'cyan' }
    }
];

const YoursSection = () => {
    const [state, setState] = useState(_.shuffle(data));

    return (
        <View style={styles.yoursContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>Yours</Text>
            </View>
            <View>
                <FlatList
                    data={state}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <Card item={item} large={true} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                />
            </View>
        </View>
    );
};

const ExploreSection = () => {
    const [state, setState] = useState(_.shuffle([...data]));

    return (
        <View style={styles.exploreContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>Explore</Text>
                {/* this should probably be turned into a button component */}
                <TouchableOpacity
                    style={[styles.button, { width: 50 }]}
                    activeOpacity={0.8}
                >
                    <Text style={{ fontSize: 16 }}>Sort</Text>
                </TouchableOpacity>
                {/*  */}
            </View>
            <View>
                <FlatList
                    data={state}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <Card item={item} />}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                />
            </View>
        </View>
    );
};

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <YoursSection />
            <ExploreSection />
        </SafeAreaView>
    );
};

export default HomeScreen;
