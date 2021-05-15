import React from 'react';
import { Text, TextInput } from 'react-native';
import styles from './styles';

const InputWithTitle = ({
    title,
    content,
    onChangeContent,
    isPassword = false
}) => {
    return (
        <>
            <Text style={styles.inputHeader}>{title}</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={onChangeContent}
                secureTextEntry={isPassword}
            />
        </>
    );
};

export default InputWithTitle;
