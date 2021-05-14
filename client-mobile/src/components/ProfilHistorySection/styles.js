import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        height: '40%',
        width: '90%',
        shadowColor: 'gray',
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15, //pour android normalement
        backgroundColor: '#f5f3f1',
        padding: 5
    },
    Title: {
        fontSize: 16,
        lineHeight: 12,
        color: 'gray',
        margin: 10
    },
    ActionsListContainer: {
        //flexDirection: 'row',
    },
    contain: {
        //marginEnd: 15,
        borderRadius: 15,
        height: '100%',
        width: '100%',
        paddingTop: 10,
        shadowColor: 'gray',
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15, //pour android normalement
        backgroundColor: '#F0DDD1'
        //justifyContent: 'center'
    },
    image: {
        height: '50%',
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 10
    },
    text: {
        fontSize: 10,
        lineHeight: 12,
        color: 'gray',
        textAlign: 'center',
        marginTop: 3
    }
    // action: {
    //     borderRadius: 10,
    //     margin: 5,
    //     alignItems: 'center',
    // },
});

export default styles;
