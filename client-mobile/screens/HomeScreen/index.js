import _ from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import {
    FlatList,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    useWindowDimensions,
    View
} from 'react-native';
import { default as AntDesignIcon } from 'react-native-vector-icons/AntDesign';
import { default as FontAwesomeIcon } from 'react-native-vector-icons/FontAwesome';
import { useQuery } from 'react-query';
import * as actions from '../../api/actions';
import * as users from '../../api/users';
import Card from '../../components/Card';
import { colors } from '../../consts/styles';
import { UserContext } from '../../context/UserContext';
import styles from './styles';

const HomeScreen = () => {
    const { height } = useWindowDimensions();

    const { current, updateCurrentUser } = useContext(UserContext);
    const { data: usersData, status: usersDataStatus } = useQuery(
        'getUsers',
        users.find
    );

    const [searchQuery, setSearchQuery] = useState('');

    const [yoursActions, setYoursActions] = useState([]);

    const { data: exploreData, status: exploreStatus, refetch } = useQuery(
        'exploreActions',
        actions.find
    );
    const [exploreActions, setExploreActions] = useState(exploreData);

    const searchWithQuery = (query, actions, setActions) => {
        actions &&
            setActions(
                actions.filter(el =>
                    el.action_title.toLowerCase().includes(query.toLowerCase())
                )
            );
    };

    useEffect(() => {
        if (usersDataStatus === 'success') {
            const user = usersData[current.user_id];
            updateCurrentUser({ username: current.username, ...user });
        }
    }, [usersData]);

    useEffect(
        () => exploreData && setExploreActions(Object.values(exploreData)),
        [exploreData]
    );

    useEffect(() => {
        if (!searchQuery && exploreData)
            setExploreActions(Object.values(exploreData));
        else searchWithQuery(searchQuery, exploreActions, setExploreActions);
    }, [searchQuery]);

    return (
        <View style={styles.container}>
            <View style={[styles.header, { height: height * 0.1 }]}>
                <Text style={styles.appName}>Gethr</Text>
                <View style={styles.userPicturePlaceholder} />
            </View>

            <View style={styles.yoursSection}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Vos Actions</Text>
                </View>

                <View style={styles.listContainer}>
                    {yoursActions.length === 0 && (
                        <Text style={styles.loadingText}>
                            Vous devriez ajouter des actions
                        </Text>
                    )}

                    {yoursActions.length !== 0 && (
                        <FlatList
                            style={{ width: '100%' }}
                            data={yoursActions}
                            keyExtractor={item => item.action_id.toString()}
                            renderItem={({ item }) => <Card item={item} />}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            bounces={false}
                        />
                    )}
                </View>
            </View>

            <View style={styles.exploreSection}>
                <View style={[styles.sectionHeader, { marginBottom: 5 }]}>
                    <Text style={styles.sectionTitle}>Explorer</Text>
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
                                placeholder='recherche...'
                            />
                        </View>
                        {/* <TouchableOpacity
                            style={styles.sectionHeaderBtn}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.sectionHeaderBtnTitle}>
                                Sort
                            </Text>
                        </TouchableOpacity> */}
                    </View>
                </View>

                <View style={styles.listContainer}>
                    {exploreStatus === 'loading' && (
                        <Text style={styles.loadingText}>Fetching data</Text>
                    )}
                    {exploreStatus === 'success' && (
                        <FlatList
                            contentContainerStyle={
                                Platform.OS === 'web'
                                    ? styles.flatlistContent
                                    : {}
                            }
                            data={_.shuffle(exploreActions)}
                            keyExtractor={item => item.action_id.toString()}
                            renderItem={({ item }) => (
                                <Card
                                    item={item}
                                    yours={yoursActions}
                                    setYours={setYoursActions}
                                    refetch={refetch}
                                />
                            )}
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            bounces={false}
                        />
                    )}
                </View>
            </View>

            <FontAwesomeIcon
                style={styles.backgroundIcon}
                name='leaf'
                size={450}
                color={`${colors.one}50`}
            />
        </View>
    );
};

export default HomeScreen;
