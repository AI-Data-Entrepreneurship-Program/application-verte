import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import BackgroundCurve from '../../components/BackgroundCurve';
import HeaderProfile from '../../components/HeaderProfile';
import RankingDescriptionSection from '../../components/RankingDescriptionSection';
import RankingTimer from '../../components/RankingTimer';
import { colors } from '../../consts/styles';
import styles from './styles';

const RankingScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderProfile />

            <RankingDescriptionSection />

            <RankingTimer />

            <TouchableOpacity
                style={styles.startBtn}
                activeOpacity={0.8}
                onPress={() => {}}
            >
                <Text style={styles.startBtnTitle}>Participer !</Text>
                <Icon name='arrowright' size={18} color={colors.orange} />
            </TouchableOpacity>

            <BackgroundCurve
                firstColor={colors.lightPink}
                secondColor={colors.pink}
                type={2}
            />
        </SafeAreaView>
    );
};

export default RankingScreen;
