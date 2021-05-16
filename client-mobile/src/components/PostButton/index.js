import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';


const PostButton = (props) => {
    return(
        <TouchableOpacity
            onPress = {props.onPress}
            style = {styles.button}
        >
            <Text>
                Press
            </Text>
        </TouchableOpacity>
    );
};

export default PostButton;