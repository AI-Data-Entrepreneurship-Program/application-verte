import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginVertical: 8,
        paddingHorizontal: 5
    },
    bubble: {
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        margin: 2,
        borderRadius: 100
    },
    bubbleText: {
        fontSize: 18,
        color: colors.darkGreen
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5
    }
});

export default styles;
