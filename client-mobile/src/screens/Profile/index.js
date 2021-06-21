import React from 'react';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileHistorySection from '../../components/ProfileHistorySection';
import ProfileInformationsSection from '../../components/ProfileInformationsSection';
import styles from './styles';

const ProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ProfileInformationsSection />
            <ProfileHistorySection />
            <Icon
                name='x'
                type='feather'
                color='gray'
                raised='true'
                containerStyle={styles.exitIcon}
                onPress={() => navigation.goBack()}
            />
        </SafeAreaView>
    );
};

export default ProfileScreen;
