import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.three,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scollView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    appName: {
        fontSize: 42,
        color: colors.one
    },
    questionHeader: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: colors.one,
        borderRadius: 5,
        alignSelf: 'center',
        paddingVertical: 10,
        width: '100%'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.three,
        marginHorizontal: 5
    },
    answersContainer: {
        flex: 1,
        paddingHorizontal: 50
    },
    footer: {
        flex: 1,
        alignItems: 'center'
    },
    submitBtn: {
        width: '80%',
        height: 50,
        backgroundColor: colors.one,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    footerText: {
        fontSize: 18,
        color: '#222222'
    },
    arrowIcon: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 100,
        borderColor: colors.one,
        marginTop: 20
    },
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.three
    },
    loginTitle: {
        fontSize: 24,
        color: '#222222'
    },
    loginInput: {
        borderBottomWidth: 1,
        borderBottomColor: colors.one,
        marginVertical: 10
    },
    loginBtn: {
        width: '80%',
        height: 50,
        backgroundColor: colors.one,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginBtnTitle: {
        fontSize: 24,
        color: colors.three
    }
});

export default styles;
