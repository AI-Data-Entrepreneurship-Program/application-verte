import React, { useEffect, useRef, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import uuid from 'react-native-uuid';
import { useMutation } from 'react-query';
import * as Comment from '../../api/comments';
import TouchableIcon from '../../components/TouchableIcon';
import styles from './styles';

const EntryCard = ({ action_id, comment, setComments }) => {
    const [content, setContent] = useState('');
    const textInputRef = useRef(null);

    const commentMutation = useMutation(props =>
        Comment.comment(...Object.values(props))
    );

    const addCommentHandler = () => {
        setComments(old =>
            old.map(el => {
                if (el.content.length === 0) el.content = content;
                return el;
            })
        );

        commentMutation.mutate({
            action_id: action_id,
            user_id: 'xxx',
            username: 'dsdfs',
            avatar_url:
                'https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg',
            content
        });
    };

    useEffect(() => {
        if (textInputRef.current) textInputRef.current.focus();
    }, [textInputRef]);

    return (
        <View style={styles.commentContainer}>
            <View style={styles.commentHeader}>
                <Image
                    style={styles.commentAvatar}
                    source={{
                        uri: 'https://www.w3schools.com/w3images/avatar6.png'
                    }}
                />
                <Text style={styles.commentUsername}>Toto</Text>
            </View>

            <TextInput
                style={styles.commentContent}
                ref={textInputRef}
                value={content}
                onChangeText={setContent}
            />

            <View style={styles.commentFooter}>
                <TouchableOpacity
                    style={styles.commentBtn}
                    activeOpacity={0.8}
                    onPress={addCommentHandler}
                >
                    <Text style={styles.commentBtnTitle}>Commenter</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const Card = ({ action_id, comment, setComments }) => {
    const [answers, setAnswers] = useState([]);

    const answerHandler = () => {
        //? la réponse n'est pas persistente
        setAnswers(old => [
            {
                user_id: 'xxx',
                avatar_url: 'https://www.w3schools.com/w3images/avatar6.png',
                username: 'Toto',
                content: '',
                likes_count: 0,
                dislikes_count: 0
            },
            ...old
        ]);
    };

    useEffect(() => {
        if (comment?.answers)
            setAnswers(
                Object.values(comment.answers).sort((a, b) => {
                    b.likes_count - a.likes_count;
                })
            );
    }, []);

    if (comment.content.length === 0)
        return (
            <EntryCard
                action_id={action_id}
                comment={comment}
                setComments={setComments}
            />
        );

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
                        onPress={answerHandler}
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
                    <Card
                        key={uuid.v4()}
                        comment={el}
                        setComments={setComments}
                    />
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

    const commentHandler = () => {
        setComments(old => [
            {
                user_id: 'xxx',
                avatar_url: 'https://www.w3schools.com/w3images/avatar6.png',
                username: 'Toto',
                content: '',
                likes_count: 0,
                dislikes_count: 0,
                answers: {}
            },
            ...old
        ]);
    };

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Commentaires</Text>
                <TouchableOpacity
                    style={styles.headerBtn}
                    activeOpacity={0.8}
                    onPress={commentHandler}
                >
                    <Text style={styles.headerBtnTitle}>Commenter</Text>
                </TouchableOpacity>
            </View>

            {comments.map(el => (
                <Card
                    key={uuid.v4()}
                    action_id={item.action_id}
                    comment={el}
                    setComments={setComments}
                />
            ))}
        </>
    );
};

export default CommentsSection;
