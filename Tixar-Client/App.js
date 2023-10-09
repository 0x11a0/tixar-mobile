import { useFonts } from 'expo-font';
import { React, useState, useEffect } from 'react';
import { Pressable, View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

// Misc
import AuthContext from './AuthContext';

// Admin
import CreateConcertPage from './src/screens/admin/createConcertPage'
import CreateCategoryPage from './src/screens/admin/createCategoryPage';
import AdminDashboardPage from './src/screens/admin/dashboardPage';
import CreateClubPage from './src/screens/admin/createClubPage';
import ManageFanClubPage from './src/screens/admin/manageFanClubPage';
import ManageCodesPage from './src/screens/admin/manageCodesPage';
import ManageFansPage from './src/screens/admin/manageFansPage';

// Login
import RegistrationPage from './src/screens/login/registrationPage';
import LoginPage from './src/screens/login/loginPage';
import OTPPage from './src/screens/login/otpPage';

// VF
import VFDashboardPage from './src/screens/verifiedFans/fanDashboardPage';
import RedemptionPage from './src/screens/verifiedFans/redemptionPage';
import GenerateFanCodePage from './src/screens/admin/generateCodePage';
import ConfirmCodePage from './src/screens/admin/confirmCodePage';

// Ticketing
import ViewConcertPage from './src/screens/ticketing/viewConcertPage';
import BrowseConcertPage from './src/screens/ticketing/browseConcertPage';
import ConcertCategoryPage from './src/screens/ticketing/concertCategoryPage';
import GeneratedUserTicketPage from './src/screens/ticketing/generateTicketPage';

// User
import UserTicketsPage from './src/screens/user/ticketsPage';
import AccountSettingsPage from './src/screens/user/accountSettingsPage';
import UserProfilePage from './src/screens/user/profilePage'
import EditProfilePage from './src/screens/user/editProfilePage'
import ViewAllClubsPage from './src/screens/user/viewAllClubsPage';
import ViewClubPage from './src/screens/user/viewClubPage';

// eWallet
import ManageEWalletPage from './src/screens/eWallet/eWalletPage';
import EWalletWithdrawPage from './src/screens/eWallet/eWalletWithdrawPage';

export default function App() {
    const [fontsLoaded] = useFonts({
        'Lato-Bold': require('./src/assets/fonts/Lato/Lato-Bold.ttf'),
        'Lato-Regular': require('./src/assets/fonts/Lato/Lato-Regular.ttf'),
        'Lato-Light': require('./src/assets/fonts/Lato/Lato-Light.ttf'),
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);

    if (fontsLoaded) {
        console.log("fonts loaded");
        const hideSplash = async () => {
            await SplashScreen.hideAsync();
        };
        hideSplash();
    } else {
        console.log("font not loaded");
        return null;
    }

    const Stack = createNativeStackNavigator();

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            <SafeAreaProvider>
                <NavigationContainer>

                    <Stack.Navigator initialRouteName='loginPage'
                        screenOptions={({ navigation }) => ({
                            headerRight: () => (
                                <HeaderIcon navigation={navigation} token={token} />
                            )
                        })}>
                        <Stack.Screen name='drawer' component={DrawerNav}
                            options={{
                                headerShown: false,
                            }} />

                        <Stack.Group>
                            <Stack.Screen
                                name="viewConcertPage"
                                component={ViewConcertPage}
                                options={{
                                    headerTitle: "View Concert",
                                }}
                            />
                            <Stack.Screen
                                name="concertCategoryPage"
                                component={ConcertCategoryPage}
                                options={{
                                    headerTitle: "Concert Category",
                                }}
                            />
                        </Stack.Group>

                        <Stack.Screen
                            name="vfDashboardPage"
                            component={VFDashboardPage}
                            options={{
                                headerTitle: "My Fan Clubs",
                            }}
                        />

                        <Stack.Screen
                            name="viewAllClubsPage"
                            component={ViewAllClubsPage}
                            options={{
                                headerTitle: "Browse Fan Clubs",
                            }}
                        />

                        <Stack.Group screenOptions={{ headerShown: false }}>
                            <Stack.Screen
                                name="loginPage"
                                component={LoginPage}
                            />
                            <Stack.Screen
                                name="otpPage"
                                component={OTPPage}
                            />
                            <Stack.Screen
                                name="registrationPage"
                                component={RegistrationPage}
                            />
                        </Stack.Group>

                        <Stack.Group>
                            <Stack.Screen
                                name="redemptionPage"
                                component={RedemptionPage}
                                options={{
                                    headertitle: "Redemption Page",
                                }}
                            />
                        </Stack.Group>
                        <Stack.Group>
                            <Stack.Screen
                                name="viewClubPage"
                                component={ViewClubPage}
                                options={{
                                    headertitle: "View Fan Club",
                                }}
                            />
                        </Stack.Group>

                        <Stack.Group screenOptions={{
                            headerRight: null
                        }}>
                            <Stack.Screen
                                name="userProfilePage"
                                component={UserProfilePage}
                                options={{
                                    headerTitle: "User Profile",
                                }}
                            />
                            <Stack.Screen
                                name="editProfilePage"
                                component={EditProfilePage}
                                options={{
                                    headerTitle: "Edit User Profile",
                                }}
                            />
                            <Stack.Screen
                                name="accountSettingsPage"
                                component={AccountSettingsPage}
                                options={{
                                    headerTitle: "Settings",
                                }}
                            />
                            <Stack.Screen
                                name="notificationsPage"
                                component={NotificationsPage}
                                options={{
                                    headerTitle: "Notifications",
                                }}
                            />
                            <Stack.Screen
                                name="manageEWalletPage"
                                component={ManageEWalletPage}
                                options={{
                                    headerTitle: "Manage E-Wallet",
                                }}
                            />
                            <Stack.Screen
                                name="eWalletWithdrawPage"
                                component={EWalletWithdrawPage}
                                options={{
                                    headerTitle: "Transfer to Bank",
                                }}
                            />
                            <Stack.Screen
                                name="userTicketsPage"
                                component={UserTicketsPage}
                                options={{
                                    headerTitle: "My Tickets",
                                }}
                            />
                            <Stack.Screen
                                name="generatedUserTicketPage"
                                component={GeneratedUserTicketPage}
                            />
                        </Stack.Group>

                        <Stack.Group>
                            <Stack.Screen
                                name="adminDashboardPage"
                                component={AdminDashboardPage}
                                options={{
                                    headerTitle: "Admin Dashboard",
                                }}
                            />
                            <Stack.Screen
                                name="adminClubPage"
                                component={ManageFanClubPage}
                                options={{
                                    headerTitle: "Admin Club Page",
                                }}
                            />
                            <Stack.Screen
                                name="adminCodesPage"
                                component={ManageCodesPage}
                                options={{
                                    headerTitle: "Admin Codes Page",
                                }}
                            />
                            <Stack.Screen
                                name="adminFansPage"
                                component={ManageFansPage}
                                options={{
                                    headerTitle: "Admin Fans Page",
                                }}
                            />
                            <Stack.Screen
                                name="createClubPage"
                                component={CreateClubPage}
                                options={{
                                    headerTitle: "Admin Create Club Page",
                                }}
                            />
                            <Stack.Screen
                                name="createCategoryPage"
                                component={CreateCategoryPage}
                                options={{
                                    headerTitle: "Create Category",
                                }}
                            />
                            <Stack.Screen
                                name="createConcertPage"
                                component={CreateConcertPage}
                                options={{
                                    headerTitle: "Create Concert",
                                }}
                            />
                            <Stack.Screen
                                name="generateCodePage"
                                component={GenerateFanCodePage}
                                options={{
                                    headerTitle: "Generate Fan Code",
                                }}
                            />
                            <Stack.Screen
                                name="confirmCodePage"
                                component={ConfirmCodePage}
                                options={{
                                    headerTitle: "Confirm Fan Code",
                                }}
                            />

                        </Stack.Group>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </AuthContext.Provider >
    );
}

const DrawerNav = ({ route, navigation }) => {
    const Drawer = createDrawerNavigator();
    const token = "Bearer " + route.params.token;
    const [userType, setUserType] = useState("");
    // const token = useRef("Bearer " + route.params.token).current;
    console.log(userType);
    const getUser = () => {
        fetch("http://rt.tixar.sg/api/user", {
            method: "GET",
            credentials: "include",
            headers: { Authorization: token },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(token);
                console.log(data);
                setUserType(data.type);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <Drawer.Navigator
            initialRouteName="browseConcertPage"
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: "Lato-Regular",
                    fontSize: 20,
                },
                headerRight: () => (
                    <HeaderIcon navigation={navigation} token={token} />
                ),
            }}
            drawerContent={(props) => {
                return (
                    <DrawerContentScrollView {...props}>
                        <DrawerItemList {...props} />
                        <DrawerItem
                            label="All Clubs"
                            onPress={() => {
                                props.navigation.navigate("viewAllClubsPage", {
                                    token: token,
                                });
                            }}
                        />
                        <DrawerItem
                            label="My Clubs"
                            onPress={() => {
                                props.navigation.navigate("vfDashboardPage", { token: token });
                            }}
                        />

                        {userType === "admin" && (
                            <DrawerItem
                                label="ADMIN"
                                onPress={() => {
                                    props.navigation.navigate("adminDashboardPage", { token: token });
                                }}
                            />
                        )}
                    </DrawerContentScrollView>
                );
            }}
        >
            {/* Navigation sidebar TIXAR */}
            <Drawer.Screen
                name="browseConcertPage"
                component={BrowseConcertPage}
                options={{
                    headerTitle: "TIXAR",
                    drawerLabel: "Home",
                }}
            />

            {/* Navigation sidebar Verified Fans */}
            {/* Navigation sidebar Celebrity dashboard,
                can replace to admin only if needed */}
            {/* <Drawer.Screen name='celebrityDashboardPage' component={celebrityDashboard}
                options={{
                    headerTitle: 'Celebrity Dashboard'
                }} /> */}
        </Drawer.Navigator>
    );
};

const HeaderIcon = ({ navigation, token }) => {
    return (
        <Pressable
            style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: "7%",
            }}
            onPress={() => {
                navigation.navigate("userProfilePage", { token: token });
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
    );
}