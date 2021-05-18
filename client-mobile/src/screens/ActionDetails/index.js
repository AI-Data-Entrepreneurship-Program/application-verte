import React, { useContext, useEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { default as AntDesignIcon } from 'react-native-vector-icons/AntDesign';
import { default as EntypoIcon } from 'react-native-vector-icons/Entypo';
import { useMutation } from 'react-query';
import * as Favourite from '../../api/favourite';
import { verifyImageUrl } from '../../components/ActionCard';
import { colors } from '../../consts/styles';
import { UserContext } from '../../context/User';
import styles from './styles';

const ActionDetailsScreen = ({ route, navigation }) => {
    const { item } = route.params;

    const { currentUserID, refreshUserInfo } = useContext(UserContext);

    const favouriteMutation = useMutation(props =>
        Favourite.create(...Object.values(props))
    );

    const isImageExist = verifyImageUrl(item.image_url);

    const startBtnHandler = () => {
        favouriteMutation.mutate({
            user_id: currentUserID,
            action_id: item.action_id
        });
    };

    useEffect(() => {
        if (favouriteMutation.isSuccess) refreshUserInfo();
    }, [favouriteMutation.status]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                {isImageExist && (
                    <Image
                        style={styles.image}
                        source={{ uri: item.image_url }}
                    />
                )}

                {!isImageExist && (
                    <View style={styles.image}>
                        <EntypoIcon name='circle-with-cross' size={28} />
                    </View>
                )}

                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>

                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                        onPress={startBtnHandler}
                    >
                        <AntDesignIcon
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
                    <AntDesignIcon
                        name='arrowleft'
                        size={28}
                        color={colors.darkGreen}
                    />
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default ActionDetailsScreen;
