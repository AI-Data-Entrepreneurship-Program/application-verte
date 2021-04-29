import React, { useEffect, useState } from 'react';
import {
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import uuid from 'react-native-uuid';
import Icon from 'react-native-vector-icons/AntDesign';
import { useMutation } from 'react-query';
import * as users from '../../api/users';
import RadioButtonContainer from '../../components/RadioButton/RadioButtonContainer';
import * as loginQuestions from '../../consts/loginQuestions';
import { colors } from '../../consts/styles';
import styles from './styles';

const createUser = ({ first, second, third, fourth }) => {
    return users.create(uuid.v4(), first, second, third, fourth);
};

const LoginScreen = ({ navigation }) => {
    const mutation = useMutation(createUser);

    const [toggleForm, setToggleForm] = useState(false);
    const [pickedAnswers, setPickedAnswers] = useState({});

    useEffect(() => {
        if (mutation.isSuccess) navigation.navigate('HomeStack');
    }, [mutation]);

    const submitBtnPressHandler = async () => mutation.mutate(pickedAnswers);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={
                    Platform.OS === 'web' || !toggleForm
                        ? styles.scollView
                        : { marginVertical: 10 }
                }
            >
                <View style={styles.header}>
                    <Text style={styles.appName}>Gethr</Text>
                    {!toggleForm && (
                        <TouchableOpacity
                            style={styles.arrowIcon}
                            activeOpacity={0.8}
                            onPress={() => setToggleForm(!toggleForm)}
                        >
                            <Icon
                                name='arrowright'
                                size={28}
                                color={colors.one}
                            />
                        </TouchableOpacity>
                    )}
                </View>

                {toggleForm && (
                    <View>
                        <View style={styles.questionHeader}>
                            <Text style={styles.text}>
                                {loginQuestions.firstQuestion}
                            </Text>
                        </View>
                        <View style={styles.answersContainer}>
                            <RadioButtonContainer
                                values={loginQuestions.firstAnswers}
                                onPress={idx =>
                                    setPickedAnswers({
                                        ...pickedAnswers,
                                        first: loginQuestions.firstAnswers[idx]
                                    })
                                }
                            />
                        </View>

                        <View style={styles.questionHeader}>
                            <Text style={styles.text}>
                                {loginQuestions.secondQuestion}
                            </Text>
                        </View>
                        <View style={styles.answersContainer}>
                            <RadioButtonContainer
                                values={loginQuestions.secondAnswers}
                                onPress={idx =>
                                    setPickedAnswers({
                                        ...pickedAnswers,
                                        second:
                                            loginQuestions.secondAnswers[idx]
                                    })
                                }
                            />
                        </View>

                        <View style={styles.questionHeader}>
                            <Text style={styles.text}>
                                {loginQuestions.thirdQuestion}
                            </Text>
                        </View>
                        <View style={styles.answersContainer}>
                            <RadioButtonContainer
                                values={loginQuestions.thirdAnswers}
                                onPress={idx =>
                                    setPickedAnswers({
                                        ...pickedAnswers,
                                        third: loginQuestions.thirdAnswers[idx]
                                    })
                                }
                            />
                        </View>

                        <View style={styles.questionHeader}>
                            <Text style={styles.text}>
                                {loginQuestions.fourthQuestion}
                            </Text>
                        </View>
                        <View style={styles.answersContainer}>
                            <RadioButtonContainer
                                values={loginQuestions.fourthAnswers}
                                onPress={idx =>
                                    setPickedAnswers({
                                        ...pickedAnswers,
                                        fourth:
                                            loginQuestions.fourthAnswers[idx]
                                    })
                                }
                            />
                        </View>

                        <View style={styles.footer}>
                            {mutation.isLoading && (
                                <Text style={styles.footerText}>
                                    Loading...
                                </Text>
                            )}
                            <TouchableOpacity
                                style={styles.submitBtn}
                                activeOpacity={0.8}
                                onPress={submitBtnPressHandler}
                                disabled={
                                    !pickedAnswers.first ||
                                    !pickedAnswers.second ||
                                    !pickedAnswers.third ||
                                    !pickedAnswers.fourth
                                }
                            >
                                <Text style={styles.text}>Commencer !</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;
