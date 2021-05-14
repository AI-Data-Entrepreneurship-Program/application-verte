import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from './styles';
import MasonryList from '@react-native-seoul/masonry-list';


const ProfilHistorySection = ({ actions }) => {
    return(
        <TouchableOpacity
        nativeID="TOUCHABLE 1"
            style={[styles.container, {}]}
            activeOpacity={0.8}
        >
            <View nativeID="VIEW TITRE">
                <Text style={styles.Title}>
                    Historique
                </Text>
            </View>
            <MasonryList
                nativeID="MASONRY LIST"
                style={styles.ActionsListContainer}
                data={actions}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    nativeID="TOUCHABLE 2"
                    style={[styles.contain]}
                    activeOpacity={0.8}
                    >
                        {/* <View style={styles.action} nativeID="VIEW ACTIONS"> */}
                            <Image style={[styles.image]}
                                source={{ uri: item.image_url }}
                                />
                            <Text style={styles.text}>{item.title}</Text>
                        {/* /</View> */}
                    </TouchableOpacity>
                )}
                numColumns={3}
                showsHorizontalScrollIndicator={false}>
            </MasonryList>
        </TouchableOpacity>
    );
};

export default ProfilHistorySection;
