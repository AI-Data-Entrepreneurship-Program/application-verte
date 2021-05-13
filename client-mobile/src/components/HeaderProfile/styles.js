import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        width: '95%',
        alignItems: 'flex-end'
    },
    pictureContainer: {
        width: 50,
        height: 50,
        borderRadius: 20,
        backgroundColor: colors.darkGreen,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;
