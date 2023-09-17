import { useFonts } from 'expo-font';
import { React, useState, useEffect } from 'react';
import { Pressable, View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ViewConcertPage from './src/screens/viewConcert/viewConcertPage';
import BrowseConcertPage from './src/screens/browseConcertPage';
import ConcertCategoryPage from './src/screens/viewConcert/concertCategoryPage';
import LoginPage from './src/screens/login/loginPage';
import ForgetPasswordPage from './src/screens/login/forgetPassword';
import SetPasswordPage from './src/screens/login/setPassword';
import RegisterPage from './src/screens/login/registerPage';
import { Directions } from 'react-native-gesture-handler';
import UserLoginPage from './src/screens/login/userLogin';
import UserRegistrationPage from './src/screens/login/userRegister';
import AccountSettingsPage from './src/screens/accountSettingsPage';
import UserProfilePage from './src/screens/user/userprofile'
import EditUserProfilePage from './src/screens/user/editUserProfile'
import generatedUserTicket from './src/screens/generatedUserTicket';
import eWallet from './src/screens/eWallet/eWalletPage';
import eWalletWithdrawPage from './src/screens/eWallet/eWalletWithdrawPage';

export default function App() {
    const [fontsLoaded] = useFonts({
        'Lato-Bold': require('./src/assets/fonts/Lato/Lato-Bold.ttf'),
        'Lato-Regular': require('./src/assets/fonts/Lato/Lato-Regular.ttf'),
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    const Stack = createNativeStackNavigator();

    return (
        // <SafeAreaProvider>
        //     <RegisterPage />
        //     {/* <LoginPage /> */}
        //     {/* <ForgetPasswordPage /> */}
        //     {/* <SetPasswordPage /> */}
        // </SafeAreaProvider>
        <SafeAreaProvider>
            <NavigationContainer>

                <Stack.Navigator>
                    <Stack.Screen name='Drawer'
                        component={MyDrawer}
                        options={{
                            headerShown: false,

                        }} />
                    <Stack.Screen name='viewConcertPage'
                        component={ViewConcertPage}
                        options={{
                            headerTitle: 'HOME'
                        }}
                    />
                    <Stack.Screen name='concertCategoryPage'
                        component={ConcertCategoryPage}
                        options={{
                            headerTitle: 'RETURN'
                        }}
                    />
                    <Stack.Screen name='UserLoginPage'
                        component={UserLoginPage}
                        options={{
                            headerShown: false
                        }} />
                    <Stack.Screen name='UserRegistrationPage'
                        component={UserRegistrationPage}
                        options={{
                            headerShown: false
                        }} />

                    <Stack.Screen
                        name="accountSettingsPage"
                        component={AccountSettingsPage}
                        options={{
                        title: "Settings",
                        headerTitleAlign: 'left',
                        headerShown: true,
                        }}
                    />
                    <Stack.Screen
                        name="NotificationsPage"
                        component={NotificationsPage}
                        options={{
                        title: "Notifications",
                        headerTitleAlign: 'left',
                        headerShown: true,
                        }}
                    />
                    <Stack.Screen
                        name="GeneratedUserTicketPage"
                        component={generatedUserTicket}
                    />
                    <Stack.Screen
                        name="eWallet"
                        component={eWallet}
                    />
                    <Stack.Screen
                        name="eWalletWithdraw"
                        component={eWalletWithdrawPage}
                    />
                </Stack.Navigator>

            </NavigationContainer>
        </SafeAreaProvider >
    );
}

const MyDrawer = ({ route, navigation }) => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            initialRouteName='TIXAR'
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'Lato-Regular',
                    fontSize: 20,
                }
            }}
        >
            <Drawer.Screen name={'TIXAR'}
                component={BrowseConcertPage}
                options={{
                    headerRight: (props) =>
                        <Pressable style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: '7%',
                        }}
                            onPress={() => {

                                navigation.navigate('UserLoginPage');
                                console.log(route.name);
                            }}>
                            <Image source={require('./src/assets/soft-ui-pro-react-native-v1.1.1/users3x.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    resizeMode: 'contain',
                                }} />
                        </Pressable>
                }}
            />
            <Drawer.Screen name={'User Profile'}
                component={UserProfilePage}
                options={{
                    headerRight: (props) =>
                        <Pressable style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: '7%',
                        }}
                            onPress={() => {

                                navigation.navigate('UserLoginPage');
                                console.log(route.name);
                            }}>
                            <Image source={require('./src/assets/soft-ui-pro-react-native-v1.1.1/users3x.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    resizeMode: 'contain',
                                }} />
                        </Pressable>
                }}
            />

            <Drawer.Screen name={'Edit User Profile'}
                component={EditUserProfilePage}
                options={{
                    headerRight: (props) =>
                        <Pressable style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: '7%',
                        }}
                            onPress={() => {

                                navigation.navigate('UserLoginPage');
                                console.log(route.name);
                            }}>
                            <Image source={require('./src/assets/soft-ui-pro-react-native-v1.1.1/users3x.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    resizeMode: 'contain',
                                }} />
                        </Pressable>
                }}
            />
            <Drawer.Screen
                name={"Settings"}
                component={AccountSettingsPage}
                options={{
                    headerRight: (props) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
                            <Pressable
                                style={{
                                    justifyContent:"center",
                                    alignItems: "center",
                                    marginRight: "7%"
                                }}
                                onPress={() => {
                                    navigation.navigate("loginPage");
                                    console.log(route.name);
                                }}
                            >
                                <Image
                                source={require("./src/assets/soft-ui-pro-react-native-v1.1.1/users3x.png")}
                                style={{
                                    height: 25,
                                    width: 25,
                                    resizeMode: "contain",
                                }}
                                />

                            </Pressable>
                            <Pressable
                                style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginRight: "7%",
                                }}
                                onPress={() => {
                                navigation.navigate("loginPage");
                                console.log(route.name);
                                }}
                            >
                                <Image
                                source={require("./src/assets/soft-ui-pro-react-native-v1.1.1/users3x.png")}
                                style={{
                                    height: 25,
                                    width: 25,
                                    resizeMode: "contain",
                                }}
                                />
                            </Pressable>
                        </View>
                    ),
                    }}
                />
            <Drawer.Screen
                name="GeneratedUserTicketPage"
                component={generatedUserTicket}
            />
            <Drawer.Screen
                name="Manage E-Wallet"
                component={eWallet}
            />
            <Drawer.Screen
                name="Transfer to Bank"
                component={eWalletWithdrawPage}
            />
        </Drawer.Navigator>
    );
}
