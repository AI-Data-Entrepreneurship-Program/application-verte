import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginVertical: 10
    },
    header: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontSize: 18,
        color: colors.lightPurple,
        fontFamily: 'Poppins-title'
    },
    placeholderText: {
        fontSize: 14,
        fontFamily: 'Poppins-text'
    }
});

export default styles;
