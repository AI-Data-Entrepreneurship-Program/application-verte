import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from 'react-query';
import * as Users from '../../api/users';
import BackgroundCurve from '../../components/BackgroundCurve';
import InputWithTitle from '../../components/InputWithTitle';
import LoginInputFooter from '../../components/LoginInputFooter';
import { colors } from '../../consts/styles';
import { UserContext } from '../../context/UserContextProvider';
import styles from './styles';

const LoginScreen = ({ navigation }) => {
    const { setCurrentUserID } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usersQuery = useQuery('users', Users.find);

    const onButtonSubmit = () => {
        if (!usersQuery.isSuccess) return;

        const users = Object.values(usersQuery.data.data);
        const user = users.find(el => el.username === username);

        if (user?.password === password) {
            setUsername('');
            setPassword('');

            setCurrentUserID(user.user_id);
            navigation.navigate('Home');
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
                </View>

                <LoginInputFooter
                    leftTitle={"S'enregister"}
                    onLeftTitlePress={() => navigation.navigate('Register')}
                    buttonTitle='Se connecter'
                    onButtonPress={onButtonSubmit}
                />
            </SafeAreaView>

            <BackgroundCurve
                firstColor={colors.lightPink}
                secondColor={colors.lightGreen}
                type={2}
            />
        </>
    );
};

export default LoginScreen;
