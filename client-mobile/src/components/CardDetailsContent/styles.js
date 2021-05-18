import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: 600,
        paddingHorizontal: 20
    },
    containerContent: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '50%',
        maxWidth: 400,
        maxHeight: 600,
        resizeMode: 'cover',
        borderRadius: 20,
        marginBottom: 10,
        backgroundColor: colors.lightOrange,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 28,
        color: colors.darkGreen,
        textAlign: 'center'
    },
    description: {
        fontSize: 18,
        textAlign: 'justify'
    },
    button: {
        width: '80%',
        maxWidth: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkGreen,
        flexDirection: 'row',
        borderRadius: 20,
        paddingVertical: 5,
        marginVertical: 10
    },
    buttonTitle: {
        fontSize: 24,
        color: colors.lightOrange,
        marginLeft: 10
    }
});

export default styles;
