import React from 'react';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileBadgesSection from '../../components/ProfileBadgesSection';
import ProfileHistorySection from '../../components/ProfileHistorySection';
import ProfileInformationsSection from '../../components/ProfileInformationsSection';
import styles from './styles';

const ProfileScreen = ({ navigation: { goBack } }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ProfileInformationsSection />
            <ProfileBadgesSection />
            <ProfileHistorySection />
            <Icon
                name='x'
                type='feather'
                color='gray'
                raised='true'
                containerStyle={styles.exitIcon}
                onPress={() => goBack()}
            />
        </SafeAreaView>
    );
};

export default ProfileScreen;
