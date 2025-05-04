import {View, StyleSheet, Text, Image} from "react-native";
import {Colors} from "../shared/colors";
import {StatusBar} from "expo-status-bar";
import {useFonts} from "expo-font";

export default function StartScreen_3()
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
                <Image source={require('../assets/images/startimage_3.png')} style={styles.image} />
            </View>
            <Text style={styles.Header}>
                Order Food Online
            </Text>
            <Text style={styles.Text}>
                Don’t let hunger interrupt your game!{"\n"}
                Use app to order snacks, meals, and drinks straight to your seat.{"\n"}
                Browse the menu, customize your order, and pay securely—your food will be delivered right to you.
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
