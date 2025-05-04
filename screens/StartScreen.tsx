import React from 'react-native';
import Swiper from 'react-native-swiper';
import StartScreen_1 from "./StartScreen_1";
import StartScreen_2 from "./StartScreen_2";
import StartScreen_3 from "./StartScreen_3";
import StartScreen_4 from "./StartScreen_4";
import {View, StyleSheet} from "react-native";
import {Colors} from "../shared/colors";

export default function StartScreen() {
    return (
        <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dotColor={Colors.white}
        activeDotColor={Colors.red}
        showsPagination={true}
        loop={false}>
            <View style={styles.slide}>
                <StartScreen_1 />
            </View>
            <View style={styles.slide}>
                <StartScreen_2 />
            </View>
            <View style={styles.slide}>
                <StartScreen_3 />
            </View>
            <View style={styles.slide}>
                <StartScreen_4 />
            </View>
        </Swiper>
    )
}

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
    },
});
