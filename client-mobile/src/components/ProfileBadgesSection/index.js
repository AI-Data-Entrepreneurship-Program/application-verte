import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import TouchableIcon from '../../components/TouchableIcon';
import Badges from '../../consts/fakebadge';
import { colors } from '../../consts/styles';
import styles from './styles';

const Badge = ({ item }) => {
    return (
        <View style={styles.badgeContainer}>
            <Image style={styles.badgeImage} source={{ uri: item.image_url }} />
        </View>
    );
};

const ProfileBadgesSection = () => {
    const navigation = useNavigation();

    const [badges, setBadges] = useState(Badges);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Badges</Text>
                <TouchableIcon
                    type='Entypo'
                    name='dots-three-horizontal'
                    color={colors.lightPurple}
                />
            </View>

            <FlatList
                data={badges}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Badge item={item} />}
            />
        </View>
    );
};

export default ProfileBadgesSection;
