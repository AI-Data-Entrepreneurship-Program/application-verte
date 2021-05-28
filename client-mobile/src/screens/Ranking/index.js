import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
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
            <ScrollView
                style={{ width: '100%', height: '100%' }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ alignItems: 'center' }}>
                    <HeaderProfile />

                    <RankingDescriptionSection />

                    <RankingTimer />

                    <TouchableOpacity
                        style={styles.startBtn}
                        activeOpacity={0.8}
                        onPress={() => {}}
                    >
                        <Text style={styles.startBtnTitle}>Participer !</Text>
                        <Icon
                            name='arrowright'
                            size={18}
                            color={colors.lightPurple}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.footer} />
            </ScrollView>

            <BackgroundCurve
                firstColor={colors.lightPink}
                secondColor={colors.pink}
                type={2}
            />
        </SafeAreaView>
    );
};

export default RankingScreen;
