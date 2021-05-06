import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    sectionHeader: {
        flexDirection: 'row',
        marginHorizontal: 10
    },
    sectionTitle: {
        fontSize: 24,
        fontFamily: 'Roboto, sans-serif',
        color: colors.darkGreen
    },
    section: {
        flex: 1,
        width: '90%',
        alignItems: 'center'
    }
});

export default styles;
