import _ from 'lodash';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../consts/styles';
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
    const [filters, setFilters] = useState([
        'All',
        'Energie',
        'Alimentation',
        'Zero déchets',
        'Transport'
    ]);
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

                <TouchableOpacity
                    style={styles.icon}
                    activeOpacity={0.8}
                    onPress={() => setToggleFilter(old => !old)}
                >
                    <Icon
                        name={
                            toggleFilter
                                ? 'arrow-back-ios'
                                : 'arrow-forward-ios'
                        }
                        size={24}
                        color={colors.darkGreen}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
};

export default HomeExpHeader;
