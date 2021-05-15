import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: 170,
        borderRadius: 10,
        margin: 5,
        height: 150
    },
    image: {
        width: 170,
        height: 150,
        borderRadius: 10
    },
    header: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 12,
        lineHeight: 12,
        color: 'black'
    },
    notLoadedImg: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgrey',
        borderRadius: 10
    }
});

export default styles;
