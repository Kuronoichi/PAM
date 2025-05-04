import {View, StyleSheet, Text, Image} from "react-native";
import {Colors} from "../shared/colors";
import {StatusBar} from "expo-status-bar";
import {useFonts} from "expo-font";

export default function StartScreen_2()
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
                <Image source={require('../assets/images/startimage_2.png')} style={styles.image} />
            </View>
            <Text style={styles.Header}>
                Online Booking
            </Text>
            <Text style={styles.Text}>
                Pick a spot on the map – Choose your preferred location. {"\n"}
                Select your PC configuration – Choose from available setups. {"\n"}
                Choose your seat – Pick your exact seat in the hall.
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
