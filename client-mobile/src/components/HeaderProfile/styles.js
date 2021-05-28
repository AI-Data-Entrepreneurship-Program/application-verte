import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'flex-end'
    },
    pictureContainer: {
        width: 50,
        height: 50,
        borderRadius: 20,
        backgroundColor: colors.lightPurple,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginVertical: 5
    }
});

export default styles;
