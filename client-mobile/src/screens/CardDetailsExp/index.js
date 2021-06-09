import React, { useContext, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardDetailsContent from '../../components/CardDetailsContent';
import CardDetailsHeader from '../../components/CardDetailsHeader';
import CommentsSection from '../../components/CommentsSection';
import { AnalyticsContext } from '../../context/AnalyticsContextProvider';
import styles from './styles';

const CardDetails = ({ route, navigation }) => {
    const { item } = route.params;

    const { setAnalytics } = useContext(AnalyticsContext);

    useEffect(() => {
        setAnalytics(old => {
            if (old.actions_clicked.some(id => id === item.action_id)) return;

            old.actions_clicked.push(item.action_id);
            old.time_ended = Date();
            old.time_spent = old.time_ended - old.time_started;
            return old;
        });
    }, []);

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
