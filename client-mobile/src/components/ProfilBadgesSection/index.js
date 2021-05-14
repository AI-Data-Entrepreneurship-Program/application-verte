import React from 'react';
import { Text, View, TouchableOpacity, useState, FlatList, Image } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements';


const ProfilBadgesSection = ({ badges }) => {
    return(
        <TouchableOpacity
            style={[styles.container, {}]}
            activeOpacity={0.8}
        >
            <View style={styles.header}>
                <Text style={styles.Title}>
                    Badges
                </Text>
                <Icon
                    name='more-horizontal'
                    type='feather'
                    color='gray'
                    containerStyle={{marginRight: 10}}
                    onPress={() => goBack()}
                />
            </View>
            <View style={styles.BadgesListContainer}>
                <FlatList
                    data={badges}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View>
                            <Image style={[styles.image]}
                                source={{ uri: item.image_url }}
                                />
                        </View>
                    )}
                    horizontal
                >
                </FlatList>
            </View>
        </TouchableOpacity>
    );
};

export default ProfilBadgesSection;
