import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    headerTitle: {
        fontSize: 21,
        color: 'black',
        fontFamily: 'Poppins-title'
    },
    headerBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    headerBtnTitle: {
        fontSize: 14,
        color: colors.lightPurple,
        fontFamily: 'Poppins-text'
    },
    commentContainer: {
        width: '90%',
        marginVertical: 10,
        alignSelf: 'center'
    },
    commentHeader: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginBottom: 10
    },
    commentAvatar: {
        width: 30,
        height: 30,
        borderRadius: 100,
        marginRight: 10
    },
    commentUsername: {
        fontSize: 18,
        fontFamily: 'Poppins-text'
    },
    commentContent: {
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Poppins-text'
    },
    commentFooter: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 5
    },
    commentAnswers: {
        width: '90%',
        borderLeftWidth: 1,
        borderLeftColor: colors.lightPurple,
        paddingLeft: 10,
        alignSelf: 'flex-end'
    },
    commentBtn: {
        borderRadius: 10,
        marginRight: 30
    },
    commentBtnTitle: {
        fontSize: 14,
        color: colors.lightPurple,
        fontFamily: 'Poppins-text'
    },
    ratingBtnContainer: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ratingText: {
        fontFamily: 'Poppins-text'
    }
});

export default styles;
