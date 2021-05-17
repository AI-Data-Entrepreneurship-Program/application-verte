import {StyleSheet} from 'react-native';
import {colors} from '../../consts/styles';

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.lightGreen,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 75,
        borderWidth: 0,
        elevation: 1
    }
});

export default styles;