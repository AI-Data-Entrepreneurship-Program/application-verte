import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardDetailsContent from '../../components/CardDetailsContent';
import CardDetailsHeader from '../../components/CardDetailsHeader';
import CommentsSection from '../../components/CommentsSection';
import styles from './styles';

const CardDetails = ({ route, navigation }) => {
    const { item } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView stickyHeaderIndices={[0]}>
                <CardDetailsHeader />
                <CardDetailsContent item={item} />
                <View style={styles.separation} />
                <CommentsSection item={item} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default CardDetails;
