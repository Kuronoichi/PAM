import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Colors } from '../shared/colors';
import { Input } from '../shared/Input/Input';
import { Button } from '../shared/Button/Button';
import { CustomSwitch } from '../shared/Switch/Switch';
import { useNavigation } from '@react-navigation/native';
import UserService from "../api/services/UserService";
import {useContext} from "react";
import {UserContext} from "../context/UserContext";
import { useNotification } from "../shared/Notification/Notification"

export default function LoginScreen() {

    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const showNotification = useNotification();
    const [,,fetchUser] = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);

    const [fontsLoaded] = useFonts({
        'Kodchasan-Regular': require('../assets/fonts/Kodchasan-Regular.ttf'),
        'Kodchasan-Bold': require('../assets/fonts/Kodchasan-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const handleLogin = async () => {
        if (!email || !password) {
            showNotification('Заполните все поля', 'error');
            return;
        }

        setIsLoading(true);
        try {
            await UserService.login(email, password);
            showNotification('Вход выполнен успешно!', 'success');
            await fetchUser();
            navigation.navigate('Profile');
        } catch (error) {
            showNotification( 'Ошибка входа!', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignup = () => {
        navigation.navigate('Signup');
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.content}>
                <Text style={styles.header}>Authorization</Text>

                <View style={styles.form}>
                    <Input
                        label="Email"
                        placeholder="Enter your Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <Input
                        label="Password"
                        placeholder="Enter your Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <View style={styles.buttonsContainer}>
                        <Button
                            text="Log in"
                            variant="primary"
                            onPress={handleLogin}
                            disabled={isLoading}
                        />
                        <Button
                            text="Sign up"
                            variant="secondary"
                            onPress={handleSignup}
                        />
                    </View>

                    <CustomSwitch
                        label="Remember User?"
                        value={isEnabled}
                        onValueChange={setIsEnabled}
                    />
                </View>

                <Text style={styles.link}>Lost Password?</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.back,
        padding: 20
    },
    content: {
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
        backgroundColor: Colors.white,
        padding: 24,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    header: {
        color: Colors.black,
        fontSize: 26,
        fontFamily: 'Kodchasan-Bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    form: {
        width: '100%',
        marginBottom: 16,
        gap: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 30,
    },
    link: {
        color: Colors.red,
        fontSize: 14,
        fontFamily: 'Kodchasan-Regular',
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginTop: 8,
    },
});
