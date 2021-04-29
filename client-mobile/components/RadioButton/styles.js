import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
      height: 50,
      justifyContent: "center",
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection: "row",
      alignItems: "center",
    },
    radioButtonIcon: {
      backgroundColor: "white",
      borderWidth: 3,
      borderColor: "grey",
      height: 30,
      width: 30,
      borderRadius: 30 / 2,
      marginRight: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    radioButtonIconInnerIcon: {
      height: 25,
      width: 25,
      backgroundColor: "grey",
      borderRadius: 25 / 2,
      borderWidth: 3,
      borderColor: "white",
    },
    radioButtonTextContainer: {
      flex: 5,
      height: 50,
      justifyContent: "center",
      paddingLeft: 10,
    },
    radioButtonText: {
      fontSize: 18,
    },
  });

  export default styles;