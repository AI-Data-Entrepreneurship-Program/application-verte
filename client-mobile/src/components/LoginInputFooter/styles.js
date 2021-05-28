import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    inputFooterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputFooterText: {
        fontSize: 12,
        color: 'black',
        textDecorationLine: 'underline',
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    inputFooterBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: colors.lightPurple,
        marginLeft: 10
    },
    inputFooterBtnTitle: {
        fontSize: 18,
        color: colors.lightPink,
        paddingHorizontal: 12,
        paddingVertical: 5
    }
});

export default styles;
