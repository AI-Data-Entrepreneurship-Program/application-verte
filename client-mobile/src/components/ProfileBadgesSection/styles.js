import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    header: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    headerTitle: {
        fontSize: 18,
        color: colors.lightPurple
    },
    badgeContainer: {
        width: 50,
        height: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5
    },
    badgeImage: {
        width: '100%',
        height: '100%',
        borderRadius: 100
    }
});

export default styles;
