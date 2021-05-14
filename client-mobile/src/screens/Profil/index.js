import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundCurve from '../../components/BackgroundCurve';
import RadioButtonContainer from '../../components/RadioButton/RadioButtonContainer';
import ProfilInformationsSection from '../../components/ProfilInformationsSection';
import ProfilBadgesSection from '../../components/ProfilBadgesSection';
import ProfilHistorySection from '../../components/ProfilHistorySection';
import { Icon } from 'react-native-elements';

import { data } from '../../consts/fakebadge';
import { data_a } from '../../consts/fakeData';

import * as loginQuestions from '../../consts/loginQuestions';
import { colors } from '../../consts/styles';
import styles from './styles';


const ProfilScreen = ({ navigation: { goBack } }) => {
    const [actions, setActions] = useState(data_a);
    const [badges, setBadges] = useState(data);
    return (
        <SafeAreaView style={styles.container}>
            <ProfilInformationsSection/>
            <ProfilBadgesSection badges={badges}/>
            <ProfilHistorySection actions={badges}/>
            <BackgroundCurve
                firstColor={colors.lightPink}
                secondColor={colors.lightPink}
            />
            <Icon
                name='x'
                type='feather'
                color='gray'
                raised='true'
                containerStyle={{margin: 35}}
                onPress={() => goBack()}
            />
        </SafeAreaView>
    );
};

export default ProfilScreen;

