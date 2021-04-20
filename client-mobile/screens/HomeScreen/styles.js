import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        marginLeft: 20
    },
    button: {
        borderRadius: 50,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        marginHorizontal: 10
    }
});

export default styles;
