import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { default as AntDesignIcon } from 'react-native-vector-icons/AntDesign';
import { default as FontAwesomeIcon } from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../consts/styles';
import styles from './styles';

const DetailsScreen = ({ route, navigation }) => {
    const { item } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.image}>
                <TouchableOpacity
                    style={{ justifyContent: 'center' }}
                    activeOpacity={0.8}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesignIcon
                        style={{ margin: 20 }}
                        name='arrowleft'
                        size={28}
                        color='#222222'
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.body}>
                <Text style={styles.title}>{item.action_title}</Text>
                <Text style={styles.description}>
                    {item.action_description}
                </Text>
            </View>

            <FontAwesomeIcon
                style={styles.backgroundIcon}
                name='leaf'
                size={450}
                color={`${colors.one}50`}
            />
        </SafeAreaView>
    );
};

export default DetailsScreen;
