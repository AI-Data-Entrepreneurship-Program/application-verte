import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    yoursContainer: {
        width: '100%'
    },
    exploreContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginTop: 5
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        marginLeft: 20
    },
    button: {
        backgroundColor: 'rgba(95, 95, 95, 0.1)',
        marginHorizontal: 10
    }
});

export default styles;
