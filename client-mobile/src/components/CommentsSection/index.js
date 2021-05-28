import React, { useContext, useEffect, useRef, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import uuid from 'react-native-uuid';
import { useMutation } from 'react-query';
import * as Comments from '../../api/comments';
import * as Likes from '../../api/likes';
import TouchableIcon from '../../components/TouchableIcon';
import { colors } from '../../consts/styles';
import { UserContext } from '../../context/UserContextProvider';
import useComments from '../../hooks/action/useComments';
import styles from './styles';

const createEntryPlaceholder = currentUser => ({
    user_id: currentUser.user_id,
    avatar_url: currentUser.avatar_url,
    username: currentUser.username,
    content: '',
    likes_count: 0,
    dislikes_count: 0,
    entry: true
});

const EntryCard = ({ submitHandler }) => {
    const { currentUser } = useContext(UserContext);
    const [content, setContent] = useState('');
    const textInputRef = useRef(null);

    useEffect(() => {
        if (textInputRef.current) textInputRef.current.focus();
    }, [textInputRef]);

    return (
        <>
            <View style={styles.commentHeader}>
                <Image
                    style={styles.commentAvatar}
                    source={{
                        uri: currentUser.avatar_url
                    }}
                />
                <Text style={styles.commentUsername}>
                    {currentUser.username}
                </Text>
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
                    onPress={() => submitHandler(content)}
                >
                    <Text style={styles.commentBtnTitle}>Commenter</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const Card = ({ comment, setter, likeElement, dislikeElement }) => {
    const { currentUser } = useContext(UserContext);

    const [isLiked, setIsLiked] = useState('');
    const [likesCount, setLikesCount] = useState(comment.likes_count);
    const [dislikesCount, setDislikesCount] = useState(comment.dislikes_count);

    const createEntryAnswer = () => {
        setter(old =>
            old.map(el => {
                if (el.comment_id === comment.comment_id)
                    el.answers = [
                        createEntryPlaceholder(currentUser),
                        ...el.answers
                    ];
                return el;
            })
        );
    };

    const likePressHandler = () => {
        if (isLiked !== 'liked') {
            if (isLiked === 'dislike') setDislikesCount(old => old - 1);

            likeElement();
            setIsLiked('liked');
            setLikesCount(old => old + 1);
        } else {
            dislikeElement();
            setIsLiked('');
            setLikesCount(old => old - 1);
        }
    };

    const dislikePressHandler = () => {
        if (isLiked !== 'disliked') {
            if (isLiked === 'liked') setLikesCount(old => old - 1);

            dislikeElement();
            setIsLiked('disliked');
            setDislikesCount(old => old + 1);
        } else {
            likeElement();
            setIsLiked('');
            setDislikesCount(old => old - 1);
        }
    };

    return (
        <>
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
                        onPress={createEntryAnswer}
                    >
                        <Text style={styles.commentBtnTitle}>Répondre</Text>
                    </TouchableOpacity>
                )}
                <Text>{dislikesCount}</Text>
                <TouchableIcon
                    type='AntDesign'
                    name='arrowdown'
                    color={isLiked === 'disliked' ? 'red' : 'black'}
                    onPress={dislikePressHandler}
                />
                <TouchableIcon
                    type='AntDesign'
                    name='arrowup'
                    color={isLiked === 'liked' ? colors.lightPurple : 'black'}
                    onPress={likePressHandler}
                />
                <Text>{likesCount}</Text>
            </View>
        </>
    );
};

const CommentCard = ({ action_id, comment, setter }) => {
    const { currentUser } = useContext(UserContext);

    const commentMutation = useMutation(props =>
        Comments.comment(...Object.values(props))
    );

    const commentLikesMutation = useMutation(props =>
        Likes.comment(...Object.values(props))
    );

    const likeElement = () => {
        commentLikesMutation.mutate({
            action_id,
            comment_id: comment.comment_id,
            user_id: currentUser.user_id,
            likes: 1
        });
    };

    const dislikeElement = () => {
        commentLikesMutation.mutate({
            action_id,
            comment_id: comment.comment_id,
            user_id: currentUser.user_id,
            likes: -1
        });
    };

    const submitHandler = content => {
        commentMutation.mutate({
            action_id,
            user_id: currentUser.user_id,
            username: currentUser.username,
            avatar_url: currentUser.avatar_url,
            content
        });

        comment.content = content;
        delete comment.entry;
    };

    return (
        <View style={styles.commentContainer}>
            {!comment?.entry && (
                <Card {...{ comment, setter, likeElement, dislikeElement }} />
            )}
            {comment?.entry && <EntryCard submitHandler={submitHandler} />}

            <View style={styles.commentAnswers}>
                {comment?.answers &&
                    comment.answers.map(el => (
                        <AnswerCard
                            key={uuid.v4()}
                            action_id={action_id}
                            comment={el}
                            setter={undefined}
                            parent_id={comment.comment_id}
                        />
                    ))}
            </View>
        </View>
    );
};

const AnswerCard = ({ action_id, comment, setter, parent_id }) => {
    const { currentUser } = useContext(UserContext);

    const commentMutation = useMutation(props =>
        Comments.answer(...Object.values(props))
    );

    const answerLikesMutation = useMutation(props =>
        Likes.answer(...Object.values(props))
    );

    const likeElement = () => {
        answerLikesMutation.mutate({
            action_id,
            comment_id: parent_id,
            answer_id: comment.answer_id,
            user_id: currentUser.user_id,
            likes: 1
        });
    };

    const dislikeElement = () => {
        answerLikesMutation.mutate({
            action_id,
            comment_id: parent_id,
            answer_id: comment.answer_id,
            user_id: currentUser.user_id,
            likes: -1
        });
    };

    const submitHandler = content => {
        commentMutation.mutate({
            action_id,
            comment_id: parent_id,
            user_id: currentUser.user_id,
            username: currentUser.username,
            avatar_url: currentUser.avatar_url,
            content
        });

        comment.content = content;
        delete comment.entry;
    };
    return (
        <View style={styles.commentContainer}>
            {!comment?.entry && (
                <Card {...{ comment, setter, likeElement, dislikeElement }} />
            )}
            {comment?.entry && <EntryCard submitHandler={submitHandler} />}
        </View>
    );
};

const CommentsSection = ({ item }) => {
    const { currentUser } = useContext(UserContext);
    const [comments, setComments] = useComments(item);

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Commentaires</Text>
                <TouchableOpacity
                    style={styles.headerBtn}
                    activeOpacity={0.8}
                    onPress={() =>
                        setComments(old => [
                            createEntryPlaceholder(currentUser),
                            ...old
                        ])
                    }
                >
                    <Text style={styles.headerBtnTitle}>Commenter</Text>
                </TouchableOpacity>
            </View>

            {comments.map(el => (
                <CommentCard
                    key={uuid.v4()}
                    action_id={item.action_id}
                    comment={el}
                    setter={setComments}
                />
            ))}
        </>
    );
};

export default CommentsSection;
