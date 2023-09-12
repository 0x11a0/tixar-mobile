import { useFonts } from 'expo-font';
import ForgetPasswordPage from './pages/login/forgetPassword';
import UserProfilePage from './pages/userprofile/userprofile'
import SetPasswordPage from './pages/login/setPassword';
import EditUserProfilePage from './pages/userprofile/editUserProfile'
import AddConcertPage from './pages/concert/addConcert'
import { React, useState, useEffect } from 'react';
import { Pressable, View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as SplashScreen from 'expo-splash-screen';

const Drawer = createDrawerNavigator();

function HomePage({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home page</Text>
        </View>
    );
}



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
        <NavContainer />
    );
}

function NavContainer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={HomePage} />
                <Drawer.Screen name='ForgetPassword' component={ForgetPasswordPage} />
                <Drawer.Screen name='UserProfile' component={UserProfilePage} />
                <Drawer.Screen name='EditUserProfile' component={EditUserProfilePage} />
                <Drawer.Screen name='AddConcert' component={AddConcertPage} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
