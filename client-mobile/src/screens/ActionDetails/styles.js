import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        marginLeft: 20
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
        height: 350,
        borderRadius: 20,
        marginBottom: 20,
        marginTop: 40,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        width: '90%'
    },
    title: {
        fontSize: 28,
        color: colors.darkGreen,
        marginBottom: 5
    },
    description: {
        fontSize: 18,
        textAlign: 'justify'
    },
    button: {
        flexDirection: 'row',
        width: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: colors.darkGreen,
        marginVertical: 5,
        padding: 10
    },
    btnTitle: {
        fontSize: 20,
        color: colors.lightOrange,
        marginLeft: 5
    }
});

export default styles;
