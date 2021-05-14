import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        margin: '10%',
        height: '18%',
        width: '38%',
        backgroundColor: '#f5f3f1',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.1,
        shadowRadius: 5
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    User: {
        fontSize: 20,
        // fontWeight: 500,
        letterSpacing: 0.5,
        lineHeight: 12,
        color: 'gray',
        margin: 10
    },
    City: {
        fontSize: 11,
        lineHeight: 10,
        color: 'gray'
        //textTransform: 'uppercase'
    },
    header: {
        flex: 1,
        alignItems: 'center'
    }
});

export default styles;
