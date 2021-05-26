import _ from 'lodash';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import categoryFilters from '../../consts/filters';
import { colors } from '../../consts/styles';
import { ActionContext } from '../../context/ActionContextProvider';
import TouchableIcon from '../TouchableIcon';
import styles from './styles';

const FilterBubble = ({ title, onPress, currentFilter }) => {
    return (
        <TouchableOpacity
            style={[
                styles.bubble,
                {
                    backgroundColor:
                        currentFilter === title
                            ? colors.orange
                            : colors.lightOrange
                }
            ]}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Text style={styles.bubbleText}>{title}</Text>
        </TouchableOpacity>
    );
};

const HomeHeader = () => {
    const { currentFilter, setCurrentFilter, searchQuery, setSearchQuery } =
        useContext(ActionContext);

    const [filters, setFilters] = useState(categoryFilters);
    const [toggleFilter, setToggleFilter] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);

    const searchbarRef = useRef(null);

    //? focus not working: ref is null (component textinput is not mounted by default)
    useEffect(() => {
        searchbarRef.current && searchbarRef.current.focus();
    }, [searchbarRef]);

    return (
        <>
            <View style={styles.container}>
                {(toggleFilter ? filters : _.take(filters, 3)).map(
                    (item, idx) => (
                        <FilterBubble
                            key={idx.toString()}
                            title={item}
                            currentFilter={currentFilter}
                            onPress={() => setCurrentFilter(item)}
                        />
                    )
                )}

                <TouchableIcon
                    style={styles.icon}
                    type='MaterialIcons'
                    name={toggleFilter ? 'arrow-back-ios' : 'arrow-forward-ios'}
                    color={colors.darkGreen}
                    onPress={() => setToggleFilter(old => !old)}
                />

                <TouchableIcon
                    style={styles.icon}
                    type='AntDesign'
                    name='search1'
                    color={colors.darkGreen}
                    onPress={() => setToggleSearch(old => !old)}
                />

                {toggleSearch && (
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
            </View>
        </>
    );
};

export default HomeHeader;
