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
        marginHorizontal: 5
    },
    searchbarContainer: {
        width: '70%',
        height: 30,
        backgroundColor: colors.lightOrange,
        marginHorizontal: '15%',
        marginTop: 5,
        borderColor: colors.darkGreen,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: '10%'
    },
    searchbar: {
        width: '100%',
        height: '100%'
    }
});

export default styles;
