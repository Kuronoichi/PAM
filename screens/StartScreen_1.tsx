import {View, StyleSheet, Text, Image} from "react-native";
import {Colors} from "../shared/colors";
import {useFonts} from "expo-font";

export default function StartScreen_1()
{
    const [fontsLoaded] = useFonts({
        'Kodchasan-Regular': require('../assets/fonts/Kodchasan-Regular.ttf'),
        'Kodchasan-Bold': require('../assets/fonts/Kodchasan-Bold.ttf'),
    });

    if(!fontsLoaded)
    {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image source={require('../assets/images/startimage_1.png')} style={styles.image} />
            </View>
                <Text style={styles.Header}>
                    Hello!
                </Text>
                <Text style={styles.Text}>
                    Welcome to PLA App. {"\n"}
                    Reserve your spot, stay updated on events, order food, and top up your balance—all in one app. Enjoy seamless gaming and services. Let the games begin!
                </Text>
        </View>
    )
}

const styles = StyleSheet.create( {
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
})
