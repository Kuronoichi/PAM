import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StartScreen from "../screens/StartScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const [isAppReady, setIsAppReady] = useState(false);
    const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);

    const checkOnboardingStatus = async () => {
        const value = await AsyncStorage.getItem('@onboarding_completed');
        setIsOnboardingCompleted(value === 'true');
        setIsAppReady(true);
    };

    useEffect(() => {
        checkOnboardingStatus();
    }, []);

    if (!isAppReady) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={isOnboardingCompleted ? "Login" : "Start"}
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Start" component={StartScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
