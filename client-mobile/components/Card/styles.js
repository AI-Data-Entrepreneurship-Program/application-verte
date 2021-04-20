import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    containerSmall: {
        width: width * 0.4,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    containerLarge: {
        width: width * 0.8,
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    imageBackground: {
        resizeMode: 'cover',
        borderRadius: 10
    },
    header: {
        flexDirection: 'row'
    },
    bookmark: {
        bottom: 5
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 100,
        bottom: 5
    },
    titleContainer: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    title: {
        color: 'white',
        fontSize: 16,
        marginLeft: 5
    }
});

export default styles;
