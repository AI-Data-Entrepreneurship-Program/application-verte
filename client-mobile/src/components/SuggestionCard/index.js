import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles';

const SuggestionCard = (props) => {
    return(
        <View style = {styles.container}>
            <Text>{props.title}</Text>
            <Text style={styles.content}>{props.content}</Text>
        </View>
    );
};

export default SuggestionCard;