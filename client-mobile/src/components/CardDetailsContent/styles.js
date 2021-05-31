import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    image: {
        width: '100%',
        height: 300,
        maxWidth: 400,
        maxHeight: 600,
        resizeMode: 'cover',
        borderRadius: 20,
        marginBottom: 10,
        backgroundColor: colors.lightPurple,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 28,
        color: colors.lightPurple,
        textAlign: 'center'
    },
    description: {
        fontSize: 18,
        textAlign: 'justify'
    },
    button: {
        width: '80%',
        maxWidth: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.lightPurple,
        flexDirection: 'row',
        borderRadius: 20,
        paddingVertical: 5,
        marginVertical: 10
    },
    buttonTitle: {
        fontSize: 24,
        color: 'white',
        marginLeft: 10
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    ratingIcon: {
        marginLeft: 5
    }
});

export default styles;
