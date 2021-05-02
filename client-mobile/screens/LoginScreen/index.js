import React, { useContext, useEffect, useState } from 'react';
import {
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import uuid from 'react-native-uuid';
import { useMutation } from 'react-query';
import * as users from '../../api/users';
import RadioButtonContainer from '../../components/RadioButton/RadioButtonContainer';
import * as loginQuestions from '../../consts/loginQuestions';
import { UserContext } from '../../context/UserContext';
import styles from './styles';

const createUser = ({ pickedAnswers, username, setCurrent }) => {
    const user_id = uuid.v4();

    setCurrent({ user_id, username });
    return users.create(
        user_id,
        pickedAnswers.regime_alimentaire,
        pickedAnswers.jardin,
        pickedAnswers.transport,
        pickedAnswers.notation
    );
};

const LoginScreen = ({ navigation }) => {
    const mutation = useMutation(createUser);
    const { isLoggedIn, setCurrent } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [pickedAnswers, setPickedAnswers] = useState({});

    useEffect(() => {
        if (mutation.isSuccess) navigation.navigate('HomeStack');
    }, [mutation]);

    const submitBtnPressHandler = async () =>
        mutation.mutate({ pickedAnswers, username, setCurrent });

    return (
        <SafeAreaView style={styles.container}>
            {!isLoggedIn() && (
                <View style={styles.loginContainer}>
                    <Text style={styles.appName}>Gethr</Text>
                    <Text style={styles.loginTitle}>
                        Entrez votre nom d'utilisateur:
                    </Text>
                    <TextInput
                        style={styles.loginInput}
                        onChangeText={setUsername}
                        value={username}
                    />
                    <TouchableOpacity
                        style={styles.loginBtn}
                        activeOpacity={0.8}
                        onPress={() => setCurrent({ username })}
                    >
                        <Text style={styles.loginBtnTitle}>Continuer</Text>
                    </TouchableOpacity>
                </View>
            )}

            {isLoggedIn() && (
                <ScrollView
                    contentContainerStyle={
                        Platform.OS === 'web'
                            ? styles.scollView
                            : { marginVertical: 10 }
                    }
                >
                    <View style={styles.header}>
                        <Text style={styles.appName}>Gethr</Text>
                    </View>

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
                                        regime_alimentaire:
                                            loginQuestions.firstAnswers[idx]
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
                                        jardin:
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
                                        transport:
                                            loginQuestions.thirdAnswers[idx]
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
                                        notation:
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
                                    Object.keys(pickedAnswers).length !== 4
                                }
                            >
                                <Text style={styles.text}>Commencer !</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    );
};

export default LoginScreen;
