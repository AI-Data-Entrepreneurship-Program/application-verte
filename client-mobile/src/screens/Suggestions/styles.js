import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
    },
    buttonContainer: {
        marginBottom:10
    },
    listContainer:{
        alignItems: 'center',
    },
    modalView: {
        width: 350,
        height:350,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      input: {
          margin:10,
      },
      inputContainer:{
          height: 200,
          width: '100%',
          borderRadius:1,
          borderWidth:1,
          justifyContent: 'center',
          margin: 20
      }
});

export default styles;