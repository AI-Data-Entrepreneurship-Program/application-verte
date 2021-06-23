import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Platform.OS === 'web' ? '80%' : '100%',
        alignSelf: 'center',
        alignItems: 'center'
    },
    separation: {
        width: '70%',
        borderBottomWidth: 1,
        borderColor: colors.lightPurple,
        marginVertical: 15,
        alignSelf: 'center'
    }
});

export default styles;
