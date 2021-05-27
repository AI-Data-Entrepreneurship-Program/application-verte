import React, { useEffect, useRef, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import uuid from 'react-native-uuid';
import { useMutation } from 'react-query';
import * as Comments from '../../api/comments';
import TouchableIcon from '../../components/TouchableIcon';
import useComments from '../../hooks/action/useComments';
import styles from './styles';

// TODO: user info to be completed
const createEntryPlaceholder = () => ({
    user_id: 'xxx',
    avatar_url: 'https://www.w3schools.com/w3images/avatar6.png',
    username: 'Toto',
    content: '',
    likes_count: 0,
    dislikes_count: 0,
    entry: true
});

const EntryCard = ({ submitHandler }) => {
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
                    onPress={() => submitHandler(content)}
                >
                    <Text style={styles.commentBtnTitle}>Commenter</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const Card = ({ comment, setter }) => {
    const createEntryAnswer = () => {
        setter(old =>
            old.map(el => {
                if (el.comment_id === comment.comment_id)
                    el.answers = [createEntryPlaceholder(), ...el.answers];
                return el;
            })
        );
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
                <Text>{comment.dislikes_count}</Text>
                <TouchableIcon type='AntDesign' name='arrowdown' />
                <TouchableIcon type='AntDesign' name='arrowup' />
                <Text>{comment.likes_count}</Text>
            </View>
        </>
    );
};

const CommentCard = ({ action_id, comment, setter }) => {
    const commentMutation = useMutation(props =>
        Comments.comment(...Object.values(props))
    );

    const submitHandler = content => {
        commentMutation.mutate({
            action_id,
            user_id: 'xxx',
            username: 'Toto',
            avatar_url: 'https://www.w3schools.com/w3images/avatar6.png',
            content
        });

        comment.content = content;
        delete comment.entry;
    };

    return (
        <View style={styles.commentContainer}>
            {!comment?.entry && <Card {...{ comment, setter }} />}
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
    const commentMutation = useMutation(props =>
        Comments.answer(...Object.values(props))
    );

    const submitHandler = content => {
        commentMutation.mutate({
            action_id,
            comment_id: parent_id,
            user_id: 'xxx',
            username: 'Toto',
            avatar_url: 'https://www.w3schools.com/w3images/avatar6.png',
            content
        });

        comment.content = content;
        delete comment.entry;
    };
    return (
        <View style={styles.commentContainer}>
            {!comment?.entry && <Card {...{ comment, setter }} />}
            {comment?.entry && <EntryCard submitHandler={submitHandler} />}
        </View>
    );
};

const CommentsSection = ({ item }) => {
    const [comments, setComments] = useComments(item);

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Commentaires</Text>
                <TouchableOpacity
                    style={styles.headerBtn}
                    activeOpacity={0.8}
                    onPress={() =>
                        setComments(old => [createEntryPlaceholder(), ...old])
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
