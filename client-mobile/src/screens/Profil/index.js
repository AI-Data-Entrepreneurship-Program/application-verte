import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundCurve from '../../components/BackgroundCurve';
import ProfilBadgesSection from '../../components/ProfilBadgesSection';
import ProfilHistorySection from '../../components/ProfilHistorySection';
import ProfilInformationsSection from '../../components/ProfilInformationsSection';
import { data } from '../../consts/fakebadge';
import { colors } from '../../consts/styles';
import styles from './styles';

const ProfilScreen = ({ navigation: { goBack } }) => {
    const [badges, setBadges] = useState(data);

    return (
        <SafeAreaView style={styles.container}>
            <ProfilInformationsSection />
            <ProfilBadgesSection badges={badges} />
            <ProfilHistorySection actions={badges} />
            <BackgroundCurve
                firstColor={colors.lightPink}
                secondColor={colors.lightPink}
            />
            <Icon
                name='x'
                type='feather'
                color='gray'
                raised='true'
                containerStyle={{ margin: 35 }}
                onPress={() => goBack()}
            />
        </SafeAreaView>
    );
};

export default ProfilScreen;
