import _ from 'lodash';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundCurve from '../../components/BackgroundCurve';
import HomeDiscoverSection from '../../components/HomeDiscoverSection';
import HomePersonalSection from '../../components/HomePersonalSection';
import { data } from '../../consts/fakeData';
import { colors } from '../../consts/styles';
import styles from './styles';
import HeaderProfile from '../../components/HeaderProfile';

const HomeScreen = ({ navigation }) => {
    const [actions, setActions] = useState(data);

    return (
        <SafeAreaView style={styles.container}>
            <HeaderProfile />
            <HomePersonalSection actions={_.take(actions, 4)} />
            <HomeDiscoverSection actions={actions} />
            <BackgroundCurve
                firstColor={colors.lightPink}
                secondColor={colors.lightGreen}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
