import _ from 'lodash';
import React, { useState } from 'react';
import { FlatList, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Card from '../../components/Card';
import styles from './styles';

const data = [
    {
        id: 1,
        title: 'How to recycle cans',
        description: 'Occaecat id cillum et aute.',
        // image:
        //     'https://www.instrupix.com/wp-content/uploads/2019/10/diy-rope-wrapped-tin-cans-for-office-supplies.jpg',
        user: {
            avatar:
                'https://i.pinimg.com/564x/7b/e3/c8/7be3c860904fd21fbc09bb5422035f2a.jpg'
        },
        category: { color: 'pink' }
    },
    {
        id: 2,
        title: 'Reduce how much electricity we use',
        description:
            'Velit magna amet ipsum ad culpa laboris adipisicing et anim officia officia est incididunt quis.',
        image:
            'https://cdn.pixabay.com/photo/2020/05/31/19/53/light-bulb-5244001_960_720.jpg',
        category: { color: 'orange' }
    },
    {
        id: 3,
        title: 'Install solar pannels',
        description: 'Ex non sit laborum id dolore.',
        // image:
        //     'https://cdn.pixabay.com/photo/2012/03/03/23/11/alternative-21581_960_720.jpg',
        category: { color: 'orange' }
    },
    {
        id: 4,
        title: 'Stop sending emails',
        description:
            'Ullamco ex exercitation id ex elit sint irure esse dolore irure excepteur cillum anim incididunt.',
        // image:
        //     'https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373_960_720.jpg',
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
            <View style={{ flex: 1, width: '100%', marginTop: 5 }}>
                <FlatList
                    data={state}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <Card item={item} type='normal' />
                    )}
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
    const { width } = useWindowDimensions();

    return (
        <View style={styles.exploreContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>Explore</Text>
                <Button containerStyle={styles.button} title='Sort' />
            </View>
            <View
                style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                    marginTop: 5
                }}
            >
                <FlatList
                    data={state}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <Card item={item} type='detailed' />
                    )}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    key={width < 1500 ? '1' : '2'}
                    numColumns={width < 1500 ? 1 : 2}
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
