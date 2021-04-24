import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    normalContainer: {
        height: 200,
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 5
    },
    imageBackgroundContainer: {
        width: '100%',
        height: '100%'
    },
    imageBackground: {
        borderRadius: 10
    },
    footer: {
        width: '100%',
        height: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center'
    },
    detailedContainer: {
        height: 100,
        alignContent: 'center',
        backgroundColor: 'rgba(95, 95, 95, 0.1)',
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: 'row'
    },
    image: {
        width: '35%',
        height: '100%',
        borderRadius: 10
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 5
    },
    title: {
        fontSize: 16
    },
    header: {
        flexDirection: 'row'
    },
    bookmark: {
        bottom: 8
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 100,
        bottom: 8
    }
});

export default styles;
