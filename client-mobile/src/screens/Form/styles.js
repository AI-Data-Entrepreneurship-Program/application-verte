import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    appTitle: {
        fontSize: 42,
        color: colors.darkGreen
    },
    separation: {
        width: '80%',
        borderBottomWidth: 1,
        borderColor: colors.darkGreen,
        marginVertical: 10
    },
    title: {
        fontSize: 18,
        width: '80%',
        textAlign: 'center',
        marginVertical: 10
    },
    answersContainer: {
        width: '100%',
        paddingLeft: 50
    },
    submitBtn: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        marginVertical: 10,
        borderRadius: 20,
        backgroundColor: colors.darkGreen
    },
    scrollView: {
        width: '100%'
    },
    scrollViewContent: {
        alignItems: 'center'
    }
});

export default styles;
