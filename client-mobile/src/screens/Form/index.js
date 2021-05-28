import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RadioButtonContainer from '../../components/RadioButton/RadioButtonContainer';
import * as loginQuestions from '../../consts/loginQuestions';
import { colors } from '../../consts/styles';
import styles from './styles';

const FormScreen = ({ navigation }) => {
    const [pickedAnswers, setPickedAnswers] = useState({});

    const submitHandler = () => navigation.navigate('Home');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContent}
            >
                <Text style={styles.appTitle}>Gethr</Text>
                <Text style={styles.title}>Bienvenue</Text>

                <View style={styles.separation} />

                <Text style={styles.title}>Repondez à ce questionnaire:</Text>

                <Text style={styles.title}>{loginQuestions.firstQuestion}</Text>
                <View style={styles.answersContainer}>
                    <RadioButtonContainer
                        values={loginQuestions.firstAnswers}
                        onPress={idx =>
                            setPickedAnswers(current => ({
                                ...current,
                                regime_alimentaire:
                                    loginQuestions.firstAnswers[idx]
                            }))
                        }
                    />
                </View>

                <Text style={styles.title}>
                    {loginQuestions.secondQuestion}
                </Text>
                <View style={styles.answersContainer}>
                    <RadioButtonContainer
                        values={loginQuestions.secondAnswers}
                        onPress={idx =>
                            setPickedAnswers(current => ({
                                ...current,
                                jardin: loginQuestions.secondAnswers[idx]
                            }))
                        }
                    />
                </View>

                <Text style={styles.title}>{loginQuestions.thirdQuestion}</Text>
                <View style={styles.answersContainer}>
                    <RadioButtonContainer
                        values={loginQuestions.thirdAnswers}
                        onPress={idx =>
                            setPickedAnswers(current => ({
                                ...current,
                                transport: loginQuestions.thirdAnswers[idx]
                            }))
                        }
                    />
                </View>

                <Text style={styles.title}>
                    {loginQuestions.fourthQuestion}
                </Text>
                <View style={styles.answersContainer}>
                    <RadioButtonContainer
                        values={loginQuestions.fourthAnswers}
                        onPress={idx =>
                            setPickedAnswers(current => ({
                                ...current,
                                notation: loginQuestions.fourthAnswers[idx]
                            }))
                        }
                    />
                </View>

                <TouchableOpacity
                    style={styles.submitBtn}
                    activeOpacity={0.8}
                    onPress={submitHandler}
                    disabled={Object.keys(pickedAnswers).length !== 4}
                >
                    <Text style={[styles.title, { color: colors.lightPurple }]}>
                        Continuer !
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default FormScreen;
