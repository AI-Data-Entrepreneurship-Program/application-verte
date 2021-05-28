import React, { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMutation } from 'react-query';
import * as Users from '../../api/users';
import BackgroundCurve from '../../components/BackgroundCurve';
import InputWithTitle from '../../components/InputWithTitle';
import LoginInputFooter from '../../components/LoginInputFooter';
import { colors } from '../../consts/styles';
import { UserContext } from '../../context/UserContextProvider';
import styles from '../Login/styles';

const RegisterScreen = ({ navigation }) => {
    const { setCurrentUserID } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userMutation = useMutation(props =>
        Users.create(...Object.values(props))
    );

    const onButtonSubmit = () => {
        if (confirmPassword === password)
            userMutation.mutate({ username, password, confirmPassword });
    };

    useEffect(() => {
        if (!userMutation.isSuccess) return;

        const userID = userMutation.data.data.split(' ')[1];

        Users.get(userID).then(data => {
            setUsername('');
            setPassword('');
            setConfirmPassword('');

            setCurrentUserID(data.user_id);
            navigation.navigate('Form');
        });
    }, [userMutation.status]);

    return (
        <>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Gethr</Text>

                <View style={styles.inputContainer}>
                    <InputWithTitle
                        title='Nom utilisateur'
                        content={username}
                        onChangeContent={setUsername}
                    />
                    <InputWithTitle
                        title='Mot de passe'
                        content={password}
                        onChangeContent={setPassword}
                        isPassword={true}
                    />
                    <InputWithTitle
                        title='Confirmer mot de passe'
                        content={confirmPassword}
                        onChangeContent={setConfirmPassword}
                        isPassword={true}
                    />
                </View>

                <LoginInputFooter
                    leftTitle='Se connecter'
                    onLeftTitlePress={() => navigation.navigate('Login')}
                    buttonTitle={"S'enregister"}
                    onButtonPress={onButtonSubmit}
                />
            </SafeAreaView>

            <BackgroundCurve
                firstColor={colors.lightPink}
                secondColor={colors.lightGreen}
            />
        </>
    );
};

export default RegisterScreen;
