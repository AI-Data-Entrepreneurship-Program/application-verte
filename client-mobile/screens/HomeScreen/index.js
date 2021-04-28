import _ from 'lodash';
import React, { useState } from 'react';
import {
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
    useWindowDimensions,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { default as AntDesignIcon } from 'react-native-vector-icons/AntDesign';
import { default as FontAwesomeIcon } from 'react-native-vector-icons/FontAwesome';
import Card from '../../components/Card';
import { colors } from '../../consts/styles';
import styles from './styles';

const data = [
    {
        id: 1,
        title: 'How to recycle cans',
        description: 'Occaecat id cillum et aute.',
        user: {
            avatar:
                'https://i.pinimg.com/564x/7b/e3/c8/7be3c860904fd21fbc09bb5422035f2a.jpg'
        },
        category: { color: 'cadetblue' }
    },
    {
        id: 2,
        title: 'Reduce how much electricity we use',
        description:
            'Velit magna amet ipsum ad culpa laboris adipisicing et anim officia officia est incididunt quis.',
        image:
            'https://cdn.pixabay.com/photo/2020/05/31/19/53/light-bulb-5244001_960_720.jpg',
        category: { color: 'burlywood' }
    },
    {
        id: 3,
        title: 'Install solar pannels',
        description: 'Ex non sit laborum id dolore.',
        category: { color: 'darkgrey' }
    },
    {
        id: 4,
        title: 'Stop sending emails',
        description:
            'Ullamco ex exercitation id ex elit sint irure esse dolore irure excepteur cillum anim incididunt.',
        category: { color: 'crimson' }
    },
    {
        id: 5,
        title: 'Lorem Ipsum',
        description: 'Nostrud laboris qui consequat reprehenderit.',
        category: { color: 'rosybrown' }
    },
    {
        id: 6,
        title: 'Lorem Ipsum',
        description:
            'Excepteur exercitation ut cillum occaecat ad ex ipsum cupidatat deserunt incididunt magna.',
        category: { color: 'orange' }
    }
];

const HomeScreen = () => {
    const { height } = useWindowDimensions();
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.header, { height: height * 0.1 }]}>
                <Text style={styles.appName}>Gethr</Text>
                <View style={styles.userPicturePlaceholder} />
            </View>

            <View style={styles.yoursSection}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Yours</Text>
                </View>

                <View style={styles.listContainer}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={styles.flatlistContent}
                        data={data}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <Card item={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                    />
                </View>
            </View>

            <View style={styles.exploreSection}>
                <View style={[styles.sectionHeader, { marginBottom: 5 }]}>
                    <Text style={styles.sectionTitle}>Explore</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.searchbar}>
                            <TouchableOpacity
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 5
                                }}
                                activeOpacity={0.8}
                            >
                                <AntDesignIcon
                                    name='search1'
                                    size={18}
                                    color='#222222'
                                />
                            </TouchableOpacity>
                            <TextInput
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                                placeholder='search...'
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.sectionHeaderBtn}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.sectionHeaderBtnTitle}>
                                Sort
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.listContainer}>
                    <FlatList
                        contentContainerStyle={styles.flatlistContent}
                        data={_.shuffle(data)}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <Card item={item} />}
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                    />
                </View>
            </View>

            <FontAwesomeIcon
                style={styles.backgroundIcon}
                name='leaf'
                size={450}
                color={`${colors.one}50`}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
