import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 150,
        borderRadius: 20,
        margin: 5,
        alignItems: 'center'
    },
    header: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        bottom: 5,
        marginHorizontal: 10
    },
    footer: {
        width: '100%',
        height: '25%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        color: 'white',
        marginHorizontal: 5
    },
    userPicturePlaceholder: {
        width: 30,
        height: 30,
        borderRadius: 100,
        backgroundColor: colors.five,
        bottom: 3
    }
});

export default styles;
