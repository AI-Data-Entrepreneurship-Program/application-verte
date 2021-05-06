import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import BackgroundCurve from '../../components/BackgroundCurve';
import { colors } from '../../consts/styles';
import styles from './styles';

const ActionDetailsScreen = ({ route, navigation }) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <Image style={styles.image} source={{ uri: item.image_url }} />

                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>

                    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                        <Icon
                            name='plus'
                            size={20}
                            color={colors.lightOrange}
                        />
                        <Text style={styles.btnTitle}>Start</Text>
                    </TouchableOpacity>

                    {/* footer */}
                    <View>
                        <Text> </Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.icon}
                    activeOpacity={0.8}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name='arrowleft' size={28} />
                </TouchableOpacity>
            </View>

            <BackgroundCurve
                firstColor='white'
                secondColor={colors.lightOrange}
            />
        </View>
    );
};

export default ActionDetailsScreen;
