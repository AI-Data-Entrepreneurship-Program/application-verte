import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import BackgroundCurve from '../../components/BackgroundCurve';
import { colors } from '../../consts/styles';
import styles from './styles';

const ActionDetailsScreen = ({ route, navigation }) => {
    const { item } = route.params;

    return (
        <SafeAreaView style={styles.container}>
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
                        <Text style={styles.btnTitle}>Commencer</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <SafeAreaView style={styles.header}>
                <TouchableOpacity
                    style={styles.icon}
                    activeOpacity={0.8}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name='arrowleft' size={28} />
                </TouchableOpacity>
            </SafeAreaView>

            <BackgroundCurve
                firstColor={colors.lightPink}
                secondColor={colors.orange}
            />
        </SafeAreaView>
    );
};

export default ActionDetailsScreen;
