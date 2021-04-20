import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    largeContainer: {
        width: width * 0.5,
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

    smallContainer: {
        width: width * 0.9,
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
        bottom: 5,
        marginRight: 5
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 100,
        bottom: 5
    }

    // containerSmall: {
    //     width: width * 0.4,
    //     height: 150,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     margin: 5
    // },
    // containerLarge: {
    //     width: width * 0.8,
    //     height: 250,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     margin: 10
    // },
    // imageBackground: {
    //     resizeMode: 'cover',
    //     borderRadius: 10
    // },
    // header: {
    //     flexDirection: 'row'
    // },
    // bookmark: {
    //     bottom: 5
    // },
    // avatar: {
    //     width: 30,
    //     height: 30,
    //     borderRadius: 100,
    //     bottom: 5
    // },
    // titleContainer: {
    //     width: '100%',
    //     height: 30,
    //     justifyContent: 'center',
    //     backgroundColor: 'rgba(0, 0, 0, 0.4)',
    //     borderBottomRightRadius: 10,
    //     borderBottomLeftRadius: 10
    // },
    // title: {
    //     color: 'white',
    //     fontSize: 16,
    //     marginLeft: 5
    // }
});

export default styles;
