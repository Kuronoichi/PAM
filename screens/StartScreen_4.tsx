import { View, StyleSheet, Text, Image } from "react-native";
import { Button } from "../shared/Button/Button";
import { Colors } from "../shared/colors";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function StartScreen_4() {
    const [fontsLoaded] = useFonts({
        'Kodchasan-Regular': require('../assets/fonts/Kodchasan-Regular.ttf'),
        'Kodchasan-Bold': require('../assets/fonts/Kodchasan-Bold.ttf'),
    });

    const navigation = useNavigation();

    const handleButton = async () => {
        try {
            await AsyncStorage.setItem('@onboarding_completed', 'true');
            navigation.navigate('Login');
        } catch (error) {
            console.error('Ошибка при сохранении состояния onboarding:', error);
            navigation.navigate('Login');
        }
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image source={require('../assets/images/startimage_4.png')} style={styles.image} />
            </View>
            <Text style={styles.Header}>
                We Value Your Feedback
            </Text>
            <Text style={styles.Text}>
                Need help or have a question?{"\n"}
                Our club administrator is here for you! Use the app to send a message directly to the admin. Whether it’s about bookings, technical issues, or general inquiries, we’re ready to assist.
            </Text>
            <Button
                text="Start"
                onPress={handleButton}
                variant={"primary"}
            />
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.back,
        padding: 15,
        justifyContent: 'flex-start'
    },
    image: {
        width: 330,
        height: 200,
        resizeMode: 'stretch',
    },
    Header: {
        backgroundColor: Colors.black,
        color: Colors.white,
        padding: 10,
        borderRadius: 10,
        fontSize: 26,
        textAlign: 'center',
        fontFamily: 'Kodchasan-Bold',
        margin: 10
    },
    imageWrapper: {
        alignItems: 'center',
        marginTop: 80,
        padding: 8,
    },
    Text: {
        fontSize: 16,
        backgroundColor: Colors.black,
        color: Colors.white,
        padding: 10,
        textAlign: 'center',
        fontFamily: 'Kodchasan-Bold',
        margin: 10,
        borderRadius: 10,
    }
});
