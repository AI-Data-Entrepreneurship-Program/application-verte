import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 200,
        borderRadius: 10,
        margin: 10
    },
    image: {
        width: '100%',
        height: '90%',
        borderRadius: 10
    },
    header: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        fontFamily: ['Roboto', 'sans-serif']
    }
});

export default styles;
