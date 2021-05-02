import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { default as AntDesignIcon } from 'react-native-vector-icons/AntDesign';
import { default as FontAwesomeIcon } from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../consts/styles';
import styles from './styles';

const DetailsScreen = ({ route, navigation }) => {
    const { item, yours, setYours } = route.params;

    return (
        <View style={styles.container}>
            {!item.action_image && (
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
            )}

            {item.action_image && (
                <ImageBackground
                    style={styles.image}
                    imageStyle={[styles.image, { height: '100%' }]}
                    source={{ uri: item.action_image }}
                >
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
                </ImageBackground>
            )}

            <View style={styles.body}>
                <Text style={styles.title}>{item.action_title}</Text>
                <Text style={styles.description}>
                    {item.action_description}
                </Text>
                {yours && (
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={styles.addBtn}
                            activeOpacity={0.8}
                            onPress={() => setYours([...yours, item])}
                        >
                            <Text style={styles.addBtnTitle}>
                                Ajouter une action
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            <FontAwesomeIcon
                style={styles.backgroundIcon}
                name='leaf'
                size={450}
                color={`${colors.one}50`}
            />
        </View>
    );
};

export default DetailsScreen;
