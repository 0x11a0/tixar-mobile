import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ForgetPasswordPage from './pages/login/forgetPassword';
import SetPasswordPage from './pages/login/setPassword';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        'Lato-Bold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
        'Lato-Regular': require('./assets/fonts/Lato/Lato-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        console.log('font not loaded');
        return;
    }
    console.log('fonts loaded');
    return (
        <ForgetPasswordPage 
            onLayout={onLayoutRootView} />

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, text: {
        fontFamily: 'Lato-Bold',
    }
});
