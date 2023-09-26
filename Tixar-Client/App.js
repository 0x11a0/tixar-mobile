import { useFonts } from 'expo-font';
import { React, useState, useEffect } from 'react';
import { Pressable, View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import ViewConcertPage from './src/screens/viewConcert/viewConcertPage';
import BrowseConcertPage from './src/screens/browseConcertPage';
import ConcertCategoryPage from './src/screens/concertCategoryPage';
import LoginPage from './src/screens/login/loginPage';
import ForgetPasswordPage from './src/screens/login/forgetPassword';
import SetPasswordPage from './src/screens/login/setPassword';
import RegisterPage from './src/screens/login/registerPage';
import { Directions } from 'react-native-gesture-handler';
import UserLoginPage from './src/screens/login/userLogin';
import UserRegistrationPage from './src/screens/login/userRegister';
import NewUserRegistrationPage from './src/screens/new/newUserRegister'
import AccountSettingsPage from './src/screens/accountSettingsPage';
import GenerateFanCodePage from './src/screens/vf/generateFanCodePage2';
import AnimationPage from './src/screens/animationPage';
import userTicketsPage from './src/screens/userTicketsPage';
import fanDashboard from './src/screens/user/fanDashboard';
import celebrityDashboard from './src/screens/verifiedFan/celebrityDashboard';
import UserProfilePage from './src/screens/user/userprofile'
import EditUserProfilePage from './src/screens/user/editUserProfile'
import GeneratedUserTicketPage from './src/screens/generatedUserTicket';
import ManageEWalletPage from './src/screens/eWallet/eWalletPage';
import EWalletWithdrawPage from './src/screens/eWallet/eWalletWithdrawPage';
import CreateConcertPage from './src/screens/admin/createConcert'
import CreateCategoryPage from './src/screens/admin/createCategories';
import NewUserLoginPage from './src/screens/login/userLoginNew';
import UserLoginOTPPage from './src/screens/login/userLoginOTP';
import AdminDashboard from './src/screens/new/adminDashboard';
import CreateClub from './src/screens/new/adminCreateClub';
import ManageFanclub from './src/screens/new/adminManageFanclub';
import adminManageFans from './src/screens/new/adminManageFans';
import ManageActiveCodes from './src/screens/new/manageActiveCodes';
import allClubsDashboard from './src/screens/user/viewAllFanClubs';
import redemptionPage from './src/screens/verifiedFan/redemptionPage';
import ViewFanclub from './src/screens/user/viewFanclub';
import AuthContext from './AuthContext';
import ConfirmFanCodePage from './src/screens/vf/generateFanCodePage1';

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

                <Stack.Navigator initialRouteName='newUserLoginPage'>
                    <Stack.Screen name='drawer' component={DrawerNav}
                        options={{
                            headerShown: false,
                        }} />

                    {/* <Stack.Group>
                        <Stack.Screen name='viewConcertPage' component={ViewConcertPage}
                            options={{
                                headerTitle: 'View Concert'
                            }} />
                        <Stack.Screen name='concertCategoryPage' component={ConcertCategoryPage}
                            options={{
                                headerTitle: 'Concert Category'
                            }} /> */}

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
            name="fanDashboardPage"
            component={fanDashboard}
            options={{
              headerTitle: "Fan Dashboard",
            }}
          />

          <Stack.Screen
            name="viewAllClubs"
            component={allClubsDashboard}
            options={{
              headerTitle: "Fan Dashboard",
            }}
          />

          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="newUserLoginPage"
              component={NewUserLoginPage}
            />
            <Stack.Screen
              name="userLoginOTPPage"
              component={UserLoginOTPPage}
            />
            <Stack.Screen
              name="userRegistrationPage"
              component={NewUserRegistrationPage}
            />
          </Stack.Group>

          <Stack.Group>
            <Stack.Screen
              name="redemptionPage"
              component={redemptionPage}
              options={{
                headertitle: "redemptionPage",
              }}
            />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen
              name="viewFanclubPage"
              component={ViewFanclub}
              options={{
                headertitle: "View Fanclub",
              }}
            />
          </Stack.Group>

          <Stack.Group>
            <Stack.Screen
              name="userProfilePage"
              component={UserProfilePage}
              options={{
                headerTitle: "User Profile",
              }}
            />
            <Stack.Screen
              name="editUserProfilePage"
              component={EditUserProfilePage}
              options={{
                headerTitle: "Edit User Profile",
              }}
            />
            <Stack.Screen
              name="settingsPage"
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
              component={userTicketsPage}
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
              name="adminDashboard"
              component={AdminDashboard}
              options={{
                headerTitle: "Admin Dashboard",
              }}
            />
            <Stack.Screen
              name="adminClubPage"
              component={ManageFanclub}
              options={{
                headerTitle: "Admin Club Page",
              }}
            />
            <Stack.Screen
              name="adminCodesPage"
              component={ManageActiveCodes}
              options={{
                headerTitle: "Admin Codes Page",
              }}
            />
            <Stack.Screen
              name="adminFansPage"
              component={ManageFans}
              options={{
                headerTitle: "Admin Fans Page",
              }}
            />
            <Stack.Screen
              name="createClubPage"
              component={CreateClub}
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
              component={ConfirmFanCodePage}
              options={{
                headerTitle: "Confirm Fan Code",
              }}
            />

          </Stack.Group>
        </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
        </AuthContext.Provider>
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

        headerRight: (props) => (
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
        ),
      }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="All Clubs"
              onPress={() => {
                props.navigation.navigate("viewAllClubs", {
                  token: token,
                });
              }}
            />
            <DrawerItem
              label="My Clubs"
              onPress={() => {
                props.navigation.navigate("fanDashboardPage", { token: token });
              }}
            />

            {userType === "admin" && (
              <DrawerItem
                label="ADMIN"
                onPress={() => {
                  props.navigation.navigate("adminDashboard", { token: token });
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
