import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.three
    },
    header: {
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: colors.one,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    appName: {
        fontSize: 32,
        color: colors.three,
        marginLeft: 20
    },
    userPicturePlaceholder: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: colors.five,
        marginRight: 20,
        top: 20
    },
    yoursSection: {
        flex: 1,
        width: '100%',
        marginVertical: 20
    },
    sectionHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sectionTitle: {
        fontSize: 24,
        color: '#222222',
        marginLeft: 15
    },
    sectionHeaderBtn: {
        alignSelf: 'center',
        paddingHorizontal: 12,
        paddingVertical: 5,
        backgroundColor: colors.one,
        borderRadius: 50,
        marginRight: 15
    },
    sectionHeaderBtnTitle: {
        fontSize: 12,
        color: colors.three
    },
    exploreSection: {
        flex: 2,
        width: '100%',
        marginTop: 10
    },
    flatlistContent: {
        width: 250,
        height: 150,
        borderRadius: 20,
        margin: 5,
        alignItems: 'center'
    },
    listContainer: {
        flexGrow: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchbar: {
        backgroundColor: `${colors.one}50`,
        borderRadius: 50,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignSelf: 'center',
        paddingHorizontal: 12
    },
    backgroundIcon: {
        position: 'absolute',
        bottom: -150,
        zIndex: -1
    },
    loadingText: {
        fontSize: 24,
        color: '#222222'
    }
});

export default styles;
