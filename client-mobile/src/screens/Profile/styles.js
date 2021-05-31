import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Platform.OS === 'web' ? '70%' : '100%',
        alignSelf: 'center',
        alignItems: 'center'
    },
    exitIcon: {
        margin: 35,
        position: 'absolute',
        bottom: 0
    }
});

export default styles;
