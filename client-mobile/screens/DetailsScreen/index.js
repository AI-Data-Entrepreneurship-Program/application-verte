import React, { useContext, useEffect, useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { default as AntDesignIcon } from 'react-native-vector-icons/AntDesign';
import { default as FontAwesomeIcon } from 'react-native-vector-icons/FontAwesome';
import { useMutation } from 'react-query';
import * as actions from '../../api/actions';
import { colors } from '../../consts/styles';
import { UserContext } from '../../context/UserContext';
import styles from './styles';

const likeOrDislikeAction = ({ user_id, action_id, likes }) => {
    return actions.like(user_id, action_id, likes);
};

const DetailsScreen = ({ route, navigation }) => {
    const { item, yours, setYours, refetch } = route.params;

    const { current } = useContext(UserContext);
    const mutation = useMutation(likeOrDislikeAction);

    const [like, setLike] = useState('like2');
    const [dislike, setDislike] = useState('dislike2');

    const likePressHandler = () => {
        if (like === 'like1') {
            setLike('like2');
            item.like = -1;
            mutation.mutate({
                user_id: current.user_id,
                action_id: item.action_id,
                likes: -1
            });
        } else {
            setLike('like1');
            item.like = 1;
            mutation.mutate({
                user_id: current.user_id,
                action_id: item.action_id,
                likes: 1
            });
        }

        if (dislike === 'dislike1') setDislike('dislike2');
    };

    const dislikePressHandler = () => {
        if (dislike === 'dislike1') {
            setDislike('dislike2');
            item.like = 1;
            mutation.mutate({
                user_id: current.user_id,
                action_id: item.action_id,
                likes: 1
            });
        } else {
            setDislike('dislike1');
            item.like = -1;
            mutation.mutate({
                user_id: current.user_id,
                action_id: item.action_id,
                likes: -1
            });
        }

        if (like === 'like1') setLike('like2');
    };

    const goBackPressHandler = () => {
        refetch();
        navigation.goBack();
    };

    useEffect(() => {
        if (item.notation >= 1) setLike('like1');
        if (item.notation <= -1) setDislike('dislike1');
    }, []);

    return (
        <View style={styles.container}>
            {!item.action_image && (
                <View style={styles.image}>
                    <TouchableOpacity
                        style={{ justifyContent: 'center' }}
                        activeOpacity={0.8}
                        onPress={goBackPressHandler}
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
                        onPress={goBackPressHandler}
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
                        <View
                            style={{ flexDirection: 'row', marginVertical: 5 }}
                        >
                            <TouchableOpacity
                                style={styles.reaction}
                                activeOpacity={0.8}
                                onPress={likePressHandler}
                            >
                                <AntDesignIcon
                                    name={like}
                                    size={28}
                                    color={
                                        like === 'like2'
                                            ? '#222222'
                                            : colors.one
                                    }
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.reaction}
                                activeOpacity={0.8}
                                onPress={dislikePressHandler}
                            >
                                <AntDesignIcon
                                    name={dislike}
                                    size={28}
                                    color='#222222'
                                />
                            </TouchableOpacity>
                        </View>

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
