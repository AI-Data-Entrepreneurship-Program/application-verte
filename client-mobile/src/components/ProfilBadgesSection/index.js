import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';

const ProfilBadgesSection = ({ badges }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={[styles.container, {}]} activeOpacity={0.8}>
            <View style={styles.header}>
                <Text style={styles.Title}>Badges</Text>
                <Icon
                    name='more-horizontal'
                    type='feather'
                    color='gray'
                    containerStyle={{ marginRight: 10 }}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={styles.BadgesListContainer}>
                <FlatList
                    data={badges}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View>
                            <Image
                                style={[styles.image]}
                                source={{ uri: item.image_url }}
                            />
                        </View>
                    )}
                    horizontal
                ></FlatList>
            </View>
        </TouchableOpacity>
    );
};

export default ProfilBadgesSection;
