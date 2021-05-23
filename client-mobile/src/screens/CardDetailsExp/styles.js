import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    separation: {
        width: '70%',
        borderBottomWidth: 1,
        borderColor: colors.darkGreen,
        marginVertical: 15,
        alignSelf: 'center'
    }
});

export default styles;
