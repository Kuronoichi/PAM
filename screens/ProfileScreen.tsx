import {useFonts} from "expo-font";
import {View, StyleSheet, Text, Image} from "react-native";
import {StatusBar} from "expo-status-bar";
import {Colors} from "../shared/colors";
import {useNavigation} from "@react-navigation/native";

export default function ProfileScreen(){

    const navigation = useNavigation();

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
            <StatusBar style="light" />
            <View style={styles.content}>

                <View style={styles.userdata}>
                    <Text style={styles.userdata_text_1}> Username</Text>
                    <Text style={styles.userdata_text_2}> Username</Text>
                    <Text style={styles.userdata_text_1}> Email</Text>
                    <Text style={styles.userdata_text_2}> Username</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.back,
        padding: 15,
        justifyContent: 'flex-start'
    },
    content: {
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
        marginTop: 100,
        backgroundColor: Colors.white,
        padding: 24,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    userdata: {
        width: '100%',
        backgroundColor: Colors.black,
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,

    },
    userdata_text_1: {
        fontSize: 18,
        color: Colors.white,
        fontFamily: 'Kodchasan-Bold',
    },
    userdata_text_2: {
        fontSize: 14,
        color: Colors.black,
        fontFamily: 'Kodchasan-Bold',
        backgroundColor: Colors.white,
        width: '90%',
        padding: 5,
        borderRadius: 8,
        textAlign: 'center',
        margin: 8,

    }

})
