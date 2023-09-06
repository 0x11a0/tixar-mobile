import { useFonts } from 'expo-font';
import ForgetPasswordPage from './src/screens/login/forgetPassword';
import SetPasswordPage from './src/screens/login/setPassword';
import { React, useState, useEffect } from 'react';
import { Pressable, View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';



export default function App() {
    const [fontsLoaded] = useFonts({
        'Lato-Bold': require('./src/assets/fonts/Lato/Lato-Bold.ttf'),
        'Lato-Regular': require('./src/assets/fonts/Lato/Lato-Regular.ttf'),
    });


    if (fontsLoaded) {
        console.log('fonts loaded');
        const hideSplash = async () => {
            await SplashScreen.hideAsync();
        };
        hideSplash();
    } else {
        console.log('font not loaded');
        return null;
    }


    return (
        <SafeAreaProvider>

            <ForgetPasswordPage />
            {/* <SetPasswordPage /> */}
        </SafeAreaProvider>
    );
}