import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useMutation } from 'react-query';
import * as Likes from '../../api/likes';
import { getImage } from '../../consts/filters';
import { colors } from '../../consts/styles';
import { UserContext } from '../../context/UserContextProvider';
import TouchableIcon from '../TouchableIcon';
import styles from './styles';

const CardDetailsContent = ({ item }) => {
    const { currentUser, addAction, removeAction } = useContext(UserContext);

    const [isFavorite, setIsFavorite] = useState(false);
    const [isLiked, setIsLiked] = useState(item.isLiked || false);
    const [rating, setRating] = useState(item.rating);

    const likeMutation = useMutation(props =>
        Likes.action(...Object.values(props))
    );

    const btnPressHandler = () => {
        if (!isFavorite) addAction(item);
        else removeAction(item.action_id);
    };

    const likeHandler = () => {
        if (isLiked) {
            likeMutation.mutate({
                action_id: item.action_id,
                user_id: currentUser.user_id,
                likes: -1
            });
            setIsLiked(false);
            setRating(old => old - 1);
        } else {
            likeMutation.mutate({
                action_id: item.action_id,
                user_id: currentUser.user_id,
                likes: 1
            });
            setIsLiked(true);
            setRating(old => old + 1);
        }
    };

    useEffect(() => {
        setIsFavorite(
            currentUser.actions.some(el => el.action_id === item.action_id)
        );
    }, [currentUser.actions]);

    useEffect(() => {
        item.isLiked = isLiked;
        item.rating = rating;
    }, [isLiked, rating]);

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={getImage(item.category[0])}
                resizeMode='cover'
            />

            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={btnPressHandler}
            >
                <TouchableIcon
                    type='AntDesign'
                    name={isFavorite ? 'check' : 'plus'}
                    size={20}
                    color={colors.lightOrange}
                />
                <Text style={styles.buttonTitle}>
                    {isFavorite ? 'Ajoutée' : 'Commencer'}
                </Text>
            </TouchableOpacity>

            <View style={styles.ratingContainer}>
                <Text>{rating}</Text>
                <TouchableIcon
                    type='AntDesign'
                    name={isLiked ? 'heart' : 'hearto'}
                    color={isLiked ? colors.darkGreen : 'black'}
                    style={styles.ratingIcon}
                    onPress={likeHandler}
                />
            </View>
        </View>
    );
};

export default CardDetailsContent;
