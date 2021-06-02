import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {
    Image,
    Modal,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import uuid from 'react-native-uuid';
import categoryFilters from '../../consts/filters';
import { colors } from '../../consts/styles';
import { ActionContext } from '../../context/ActionContextProvider';
import { UserContext } from '../../context/UserContextProvider';
import TouchableIcon from '../TouchableIcon';
import styles from './styles';

const ModalContent = ({
    filters,
    currentFilter,
    modalFilterBubbleHandler,
    setToggleFilter
}) => {
    return (
        <View style={styles.modalContainer}>
            <View style={styles.modalCard}>
                <View style={styles.modalCardHeader}>
                    <Text style={styles.modalCardTitle}>Filtrer</Text>
                    <TouchableIcon
                        name='cross'
                        size={21}
                        onPress={() => setToggleFilter(false)}
                    />
                </View>

                <>
                    {filters.map(filter => (
                        <View
                            key={uuid.v4()}
                            style={styles.modalFilterContainer}
                        >
                            <TouchableOpacity
                                style={[
                                    styles.modalFilterBubble,
                                    {
                                        backgroundColor: currentFilter.includes(
                                            filter
                                        )
                                            ? colors.lightPurple
                                            : 'lightgrey'
                                    }
                                ]}
                                activeOpacity={0.8}
                                onPress={() => modalFilterBubbleHandler(filter)}
                            />
                            <Text style={styles.modalFilterTitle}>
                                {filter}
                            </Text>
                        </View>
                    ))}
                </>
            </View>
        </View>
    );
};

const WebFilters = ({ filters, currentFilter, modalFilterBubbleHandler }) => {
    return (
        <View style={styles.webFilters}>
            {filters.map(filter => (
                <View key={uuid.v4()} style={styles.webModalFilterContainer}>
                    <TouchableOpacity
                        style={[
                            styles.modalFilterBubble,
                            {
                                backgroundColor: currentFilter.includes(filter)
                                    ? colors.lightPurple
                                    : 'lightgrey'
                            }
                        ]}
                        activeOpacity={0.8}
                        onPress={() => modalFilterBubbleHandler(filter)}
                    />
                    <Text style={styles.modalFilterTitle}>{filter}</Text>
                </View>
            ))}
        </View>
    );
};

const HomeHeader = () => {
    const { navigate } = useNavigation();

    const { currentUser } = useContext(UserContext);
    const { currentFilter, setCurrentFilter, searchQuery, setSearchQuery } =
        useContext(ActionContext);

    const [filters, setFilters] = useState(categoryFilters);
    const [toggleFilter, setToggleFilter] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);

    const modalFilterBubbleHandler = filter => {
        if (currentFilter.some(el => el === filter))
            setCurrentFilter(old => {
                if (old.length === 1) old.push('All');
                return old.filter(el => el !== filter);
            });
        else
            setCurrentFilter(old =>
                [...old, filter].filter(
                    el =>
                        (filter === 'All' && el === 'All') ||
                        (filter !== 'All' && el !== 'All')
                )
            );
    };

    return (
        <>
            <View style={styles.container}>
                {Platform.OS !== 'web' && (
                    <Modal
                        animationType='slide'
                        visible={toggleFilter}
                        transparent={true}
                    >
                        <ModalContent
                            {...{
                                filters,
                                currentFilter,
                                modalFilterBubbleHandler,
                                setToggleFilter
                            }}
                        />
                    </Modal>
                )}
                <TouchableOpacity
                    style={styles.bubble}
                    activeOpacity={0.8}
                    onPress={() => setToggleFilter(old => !old)}
                >
                    <TouchableIcon
                        type='AntDesign'
                        name='filter'
                        color={colors.lightPurple}
                    />
                    <Text style={styles.bubbleText}>Filtrer</Text>
                </TouchableOpacity>

                <View style={styles.searchbarContainer}>
                    <TextInput
                        style={styles.searchbar}
                        value={searchQuery}
                        placeholder='search...'
                        onChangeText={setSearchQuery}
                    />
                </View>

                {/* <View style={styles.avatarContainer}> */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigate('Profile')}
                >
                    <Image
                        style={styles.avatar}
                        source={{ uri: currentUser.avatar_url }}
                        resizeMode='cover'
                    />
                </TouchableOpacity>
                {/* </View> */}
                {Platform.OS !== 'web' && toggleSearch && (
                    <View style={styles.searchbarContainer}>
                        <TextInput
                            style={styles.searchbar}
                            ref={searchbarRef}
                            value={searchQuery}
                            placeholder='search...'
                            onChangeText={setSearchQuery}
                        />
                    </View>
                )}
                {Platform.OS === 'web' && toggleFilter && (
                    <WebFilters
                        {...{
                            filters,
                            currentFilter,
                            modalFilterBubbleHandler
                        }}
                    />
                )}
            </View>
        </>
    );
};

export default HomeHeader;
