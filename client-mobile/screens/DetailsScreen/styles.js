import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    imageContainer: {
        width: '100%',
        height: '50%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'flex-start'
    },
    image: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    body: {
        flex: 1,
        width: '100%'
    },
    title: {
        fontSize: 32,
        marginVertical: 5,
        marginHorizontal: 5
    },
    description: {
        fontSize: 18,
        marginVertical: 5,
        marginHorizontal: 5
    },
    button: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        marginVertical: 10
    }
});

export default styles;
