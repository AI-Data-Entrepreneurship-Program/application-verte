import { StyleSheet } from 'react-native';
import { colors } from '../../consts/styles';

const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
        borderColor: 'black',
        backgroundColor: colors.lightPurple,
        borderRadius: 10,
        margin: 5,
        height: 150,
        width: 350,
        padding: 10,
        elevation: 10
    },
    content: {
        marginTop: 40,
        marginLeft: 20
    }
});

export default styles;
