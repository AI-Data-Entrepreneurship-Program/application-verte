import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 8,
        paddingHorizontal: 5
    },
    bubble: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        margin: 2,
        borderRadius: 100,
        backgroundColor: 'white'
    },
    bubbleText: {
        fontSize: 18,
        color: colors.lightPurple
    },
    icon: {
        marginHorizontal: 5
    },
    searchbarContainer: {
        flexGrow: 1,
        maxWidth: '70%',
        height: 30,
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: colors.lightPurple,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 30,
        marginHorizontal: 5
    },
    searchbar: {
        width: '100%',
        height: '100%'
    },
    avatarContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: colors.lightPurple
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalCard: {
        width: '70%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: colors.lightPurple
    },
    modalCardHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modalCardTitle: {
        fontSize: 21
    },
    modalFilterContainer: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 3
    },
    modalFilterBubble: {
        width: 24,
        height: 24,
        borderRadius: 100,
        backgroundColor: 'lightgrey',
        borderWidth: 2,
        borderColor: 'lightgrey'
    },
    modalFilterTitle: {
        fontSize: 18,
        marginLeft: 10
    },
    webFilters: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center'
    },
    webModalFilterContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 3,
        marginHorizontal: 5
    }
});

export default styles;
