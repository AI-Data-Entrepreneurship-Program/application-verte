import _ from 'lodash';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import categoryFilters from '../../consts/filters';
import { colors } from '../../consts/styles';
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

const HomeExpHeader = ({ currentFilter, setCurrentFilter }) => {
    const [filters, setFilters] = useState(categoryFilters);
    const [toggleFilter, setToggleFilter] = useState(false);

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
            </View>
        </>
    );
};

export default HomeExpHeader;
