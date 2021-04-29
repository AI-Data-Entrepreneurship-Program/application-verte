import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import RadioButtonContainer from "../../components/RadioButton/RadioButtonContainer";
import Button from '../../components/Button';
import uuid from 'react-native-uuid';
import styles from './styles';


export default function App() {
  const answer0 = [
    {
      text: "Végétarien",
    },
    {
      text: "Végétalien",
    },
    {
      text: "Omnivore",
    },
    {
      text: "Locavore",
    },
  ];

  const answer1 = [
    {
      text: "Non",
    },
    {
      text: "Balcon/Terrasse",
    },
    {
      text: "Jardin",
    },
  ];

  const answer2 = [
    {
      text: "Voiture",
    },
    {
      text: "Transport en commun",
    },
    {
      text: "Vélo",
    },
    {
      text: "A pied",
    },
  ];

  const answer3 = [
    {
      text: "Insignifiant",
    },
    {
      text: "Léger",
    },
    {
      text: "Moyen",
    },
    {
      text: "Important",
    },
    {
      text: "Très important",
    },
  ];

  var answerArray = [0, 0, 0, 0];


  const onRadioButtonPress0 = (itemIdx) => {
    answerArray[0] = itemIdx;
  };
  const onRadioButtonPress1 = (itemIdx) => {
    answerArray[1] = itemIdx;
  };
  const onRadioButtonPress2 = (itemIdx) => {
    answerArray[2] = itemIdx;
  };
  const onRadioButtonPress3 = (itemIdx) => {
    answerArray[3] = itemIdx;
  };

  const onSubmitBtn = () => {
    const userId = uuid.v4();
    const toSend = "user_id="+userId+"&regime_alimentaire="+answer0[answerArray[0]].text+"&jardin="+answer1[answerArray[1]].text+"&transport="+answer2[answerArray[2]].text+"&notation="+answer3[answerArray[3]].text;
  };


  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.textContainer}>
            <Text style={styles.text}>Quel est votre régime alimentaire ?</Text>
            </View>
            <RadioButtonContainer values={answer0} onPress={onRadioButtonPress0} />
            <View style={styles.textContainer}>
            <Text style={styles.text}>Avez-vous un espace extérieur dans votre logement ?</Text>
            </View>
            <RadioButtonContainer values={answer1} onPress={onRadioButtonPress1} />
            <View style={styles.textContainer}>
            <Text style={styles.text}>Pour exercer une activité (travail, course, sport …) hors de votre domicile vous favoriser quel moyen de transport ?</Text>
            </View>
            <RadioButtonContainer values={answer2} onPress={onRadioButtonPress2} />
            <View style={styles.textContainer}>
            <Text style={styles.text}>Comment évaluez-vous l'impact de vos actions quotidiennes sur votre empreinte écologique ?</Text>
            </View>
            <RadioButtonContainer values={answer3} onPress={onRadioButtonPress3} />
            <Button
                title='Commencer !'
                onPress={() => {
                  onSubmitBtn();
                }}
            />
        </ScrollView>
    </SafeAreaView>
  );
}