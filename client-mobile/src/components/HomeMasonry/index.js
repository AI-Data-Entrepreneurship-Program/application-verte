import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, useWindowDimensions } from 'react-native';
import ActionCard from '../../components/ActionCard';
import { ActionContext } from '../../context/ActionContextProvider';
import styles from './styles';

const HomeMasonry = () => {
    const { width } = useWindowDimensions();
    const navigation = useNavigation();
    const { actions, actionsQuery } = useContext(ActionContext);

    return (
        <>
            {actionsQuery.isLoading && (
                <Text style={styles.loadingText}>Chargement...</Text>
            )}

            {actionsQuery.isSuccess && (
                <MasonryList
                    data={actions}
                    keyExtractor={item => item.action_id}
                    numColumns={Math.floor(width / 170)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <ActionCard
                            key={item.action_id}
                            item={item}
                            focused={false}
                            onPress={() =>
                                navigation.navigate('CardDetails', { item })
                            }
                        />
                    )}
                />
            )}
        </>
    );
};

export default HomeMasonry;
