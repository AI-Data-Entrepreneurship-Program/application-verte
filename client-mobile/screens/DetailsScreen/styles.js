import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.three
    },
    image: {
        width: '100%',
        height: '45%',
        backgroundColor: colors.four,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    body: {
        flex: 1,
        width: '100%'
    },
    title: {
        fontSize: 32,
        color: '#222222',
        marginHorizontal: 10
    },
    description: {
        fontSize: 18,
        color: '#222222',
        marginHorizontal: 10,
        marginVertical: 10
    },
    backgroundIcon: {
        position: 'absolute',
        bottom: -150,
        zIndex: -1
    }
});

export default styles;
