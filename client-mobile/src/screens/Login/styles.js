import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 32,
        marginVertical: 10,
        color: colors.lightPurple
    },
    inputContainer: {
        marginVertical: 20
    }
});

export default styles;
