import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardDetailsContent from '../../components/CardDetailsContent';
import CardDetailsHeader from '../../components/CardDetailsHeader';
import styles from './styles';

const CardDetails = ({ route, navigation }) => {
    const { item } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <CardDetailsHeader />
            <CardDetailsContent item={item} />
            {/* <CardDetailsComments item={item} /> */}
        </SafeAreaView>
    );
};

export default CardDetails;
