import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute'
    },
    icon: {
        alignSelf: 'center',
        padding: 3
    },
    contentContainer: {
        alignItems: 'center'
    },
    image: {
        width: '80%',
        height: '100%',
        borderRadius: 20,
        marginVertical: 20
    },
    content: {
        flex: 1,
        width: '90%'
    },
    title: {
        fontSize: 28,
        fontFamily: 'Roboto, sans-serif',
        color: colors.darkGreen,
        marginBottom: 5
    },
    description: {
        fontSize: 18,
        fontFamily: 'Roboto, sans-serif',
        textAlign: 'justify'
    },
    button: {
        flexDirection: 'row',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: colors.darkGreen,
        marginVertical: 5,
        paddingVertical: 10
    },
    btnTitle: {
        fontSize: 20,
        fontFamily: 'Roboto, sans-serif',
        color: colors.lightOrange
    }
});

export default styles;
