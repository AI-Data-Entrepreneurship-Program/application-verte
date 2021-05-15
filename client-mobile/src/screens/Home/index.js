import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundCurve from '../../components/BackgroundCurve';
import HeaderProfile from '../../components/HeaderProfile';
import HomeDiscoverSection from '../../components/HomeDiscoverSection';
import HomePersonalSection from '../../components/HomePersonalSection';
import { colors } from '../../consts/styles';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderProfile />
            <HomePersonalSection />
            <HomeDiscoverSection />
            <BackgroundCurve
                firstColor={colors.lightPink}
                secondColor={colors.lightGreen}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
