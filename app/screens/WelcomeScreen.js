import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}>
            <View>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <Text>Sell what you dont need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.RegisterButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65",
    },
    RegisterButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 80,
    }
})

export default WelcomeScreen;