import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    eventDescription: {
        width: '90%'
    },
    title: {
        fontSize: 38
    },
    subtitle: {
        fontSize: 22
    },
    about: {
        textAlign: 'justify'
    },
    bubble: {
        borderRadius: 40,
        backgroundColor: 'white',
        marginHorizontal: 3,
        alignSelf: 'center',
        paddingHorizontal: 5
    },
    eventInfoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    eventDate: {
        flexDirection: 'row'
    }
});

export default styles;
