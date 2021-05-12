import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        margin: 30,
        height: 150,
        backgroundColor: 'white'
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    User: {
        fontSize: 18,
        lineHeight: 12,
        color: 'black',
        margin: 10,
    },
    City: {
        fontSize: 11,
        lineHeight: 10,
        color: 'black',
        textTransform: 'uppercase'
    },
    header: {
        flex: 1,
        alignItems: 'center'
    }
});

export default styles;
