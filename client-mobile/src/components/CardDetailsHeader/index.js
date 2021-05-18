import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { colors } from '../../consts/styles';
import TouchableIcon from '../TouchableIcon';
import styles from './styles';

const CardDetailsHeader = () => {
    const { goBack } = useNavigation();

    return (
        <>
            <View style={styles.container}>
                <TouchableIcon
                    type='AntDesign'
                    name='arrowleft'
                    color={colors.darkGreen}
                    onPress={goBack}
                />
            </View>
        </>
    );
};

export default CardDetailsHeader;
