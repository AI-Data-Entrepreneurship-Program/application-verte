import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    sectionHeader: {
        flexDirection: 'row',
        marginHorizontal: 10
    },
    sectionTitle: {
        fontSize: 24,
        color: colors.darkGreen
    },
    section: {
        flex: 1
    }
});

export default styles;