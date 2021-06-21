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
        textAlign: 'center',
        fontFamily: 'Poppins-title'
    },
    description: {
        fontSize: 18,
        textAlign: 'justify',
        fontFamily: 'Poppins-text'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.lightPurple,
        flexDirection: 'row',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 10
    },
    buttonTitle: {
        fontSize: 24,
        color: 'white',
        marginLeft: 10,
        fontFamily: 'Poppins-text'
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    ratingIcon: {
        marginLeft: 5
    },
    ratingText: {
        fontFamily: 'Poppins-text'
    }
});

export default styles;
