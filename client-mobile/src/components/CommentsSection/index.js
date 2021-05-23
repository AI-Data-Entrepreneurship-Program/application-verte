import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import uuid from 'react-native-uuid';
import TouchableIcon from '../../components/TouchableIcon';
import styles from './styles';

const Card = ({ comment }) => {
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        if (comment?.answers)
            setAnswers(
                Object.values(comment.answers).sort((a, b) => {
                    console.log(a.likes_count - b.likes_count);
                    b.likes_count - a.likes_count;
                })
            );
    }, []);

    return (
        <View style={styles.commentContainer}>
            <View style={styles.commentHeader}>
                <Image
                    style={styles.commentAvatar}
                    source={{ uri: comment.avatar_url }}
                />
                <Text style={styles.commentUsername}>{comment.username}</Text>
            </View>

            <Text style={styles.commentContent}>{comment.content}</Text>

            <View style={styles.commentFooter}>
                {comment?.answers && (
                    <TouchableOpacity
                        style={styles.commentBtn}
                        activeOpacity={0.8}
                        onPress={() => {}}
                    >
                        <Text style={styles.commentBtnTitle}>Répondre</Text>
                    </TouchableOpacity>
                )}
                <Text>{comment.dislikes_count}</Text>
                <TouchableIcon type='AntDesign' name='arrowdown' />
                <TouchableIcon type='AntDesign' name='arrowup' />
                <Text>{comment.likes_count}</Text>
            </View>

            <View style={styles.commentAnswers}>
                {answers.map(el => (
                    <Card key={uuid.v4()} comment={el} />
                ))}
            </View>
        </View>
    );
};

const CommentsSection = ({ item }) => {
    const [comments, setComments] = useState(
        Object.values(item.comments).sort(
            (a, b) => b.likes_count - a.likes_count
        )
    );

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Commentaires</Text>
                <TouchableOpacity
                    style={styles.headerBtn}
                    activeOpacity={0.8}
                    onPress={() => {}}
                >
                    <Text style={styles.headerBtnTitle}>Commenter</Text>
                </TouchableOpacity>
            </View>

            {comments.map(el => (
                <Card key={uuid.v4()} comment={el} />
            ))}
        </>
    );
};

export default CommentsSection;
