import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundCurve from '../../components/BackgroundCurve';
import RadioButtonContainer from '../../components/RadioButton/RadioButtonContainer';
import * as loginQuestions from '../../consts/loginQuestions';
import { colors } from '../../consts/styles';
import styles from './styles';


const ProfilScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bienvenue</Text>
            <BackgroundCurve firstColor='#f5efe7' secondColor={colors.orange} />
        </SafeAreaView>
    );
};

export default ProfilScreen;