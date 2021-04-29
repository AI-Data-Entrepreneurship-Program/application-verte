import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    mainContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    radioButtonIcon: {
        backgroundColor: colors.three,
        borderWidth: 3,
        borderColor: colors.four,
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioButtonIconInnerIcon: {
        height: 25,
        width: 25,
        backgroundColor: colors.four,
        borderRadius: 25 / 2,
        borderWidth: 3,
        borderColor: colors.three
    },
    radioButtonTextContainer: {
        flex: 5,
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    radioButtonText: {
        fontSize: 18,
        color: '#222222'
    }
});

export default styles;
