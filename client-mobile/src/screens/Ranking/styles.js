import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    startBtn: {
        width: '60%',
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10
    },
    startBtnTitle: {
        fontSize: 18,
        marginHorizontal: 5
    },
    footer: {
        width: '100%',
        height: 100
    }
});

export default styles;
