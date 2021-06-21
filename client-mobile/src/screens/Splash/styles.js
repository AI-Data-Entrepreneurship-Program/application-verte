import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.lightPurple
    },
    image: {
        maxWidth: '80%',
        width: 552,
        maxHeight: '30%',
        height: 452
    }
});

export default styles;
