import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        margin: '10%',
        height: '8%',
        width: '90%',
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15, //pour android normalement
        backgroundColor: '#f5f3f1'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Title: {
        fontSize: 16,
        lineHeight: 12,
        color: 'gray',
        marginTop: 10,
        marginLeft: 10
    },
    BadgesListContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    image: {
        height: 25,
        width: 25,
        margin: 5,
        borderRadius: 10
    }
});

export default styles;

// Ombre de la section info
// shadowOffset: {
//     width: 5,
//     height: 5
//   },
//   shadowOpacity: 0.10,
//   shadowRadius: 5
