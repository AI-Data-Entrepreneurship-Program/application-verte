import React, { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMutation, useQuery } from 'react-query';
import * as Users from '../../api/users';
import BackgroundCurve from '../../components/BackgroundCurve';
import InputWithTitle from '../../components/InputWithTitle';
import LoginInputFooter from '../../components/LoginInputFooter';
import { colors } from '../../consts/styles';
import { UserContext } from '../../context/User';
import styles from '../Login/styles';

const RegisterScreen = ({ navigation }) => {
    const { setCurrentUserID } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const usersQuery = useQuery('users', Users.find);
    const userMutation = useMutation(props =>
        Users.create(...Object.values(props))
    );

    useEffect(() => {
        if (!userMutation.isSuccess || !usersQuery.isSuccess) return;

        const users = Object.values(usersQuery.data.data);
        const user = users.find(el => el.username === username);

        if (user) {
            setUsername('');
            setPassword('');
            setConfirmPassword('');

            setCurrentUserID(user.user_id);
            navigation.navigate('Form');
        }
    }, [userMutation.status, usersQuery.status]);

    const onButtonSubmit = () => {
        if (confirmPassword === password) {
            userMutation.mutate({ username, password, confirmPassword });
            usersQuery.refetch();
        }
    };

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
