import { useFonts } from "expo-font";
import { React, useState, useEffect, useContext } from "react";
import { Pressable, Image, useColorScheme } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";

// Misc
import { AuthContext, ColorContext } from "./context";

// Admin
import CreateConcertPage from "./src/screens/admin/createConcertPage";
import CreateCategoryPage from "./src/screens/admin/createCategoryPage";
import AdminDashboardPage from "./src/screens/admin/dashboardPage";
import CreateClubPage from "./src/screens/admin/createClubPage";
import ManageFanClubPage from "./src/screens/admin/manageFanClubPage";
import ManageCodesPage from "./src/screens/admin/manageCodesPage";
import ManageFansPage from "./src/screens/admin/manageFansPage";

// Login
import RegistrationPage from "./src/screens/login/registrationPage";
// import LoginPage from './src/screens/login/loginPage';
import LoginPage from "./src/screens/newApp/login/loginPage";
import OTPPage from "./src/screens/login/otpPage";

// VF
import VFDashboardPage from "./src/screens/verifiedFans/fanDashboardPage";
import RedemptionPage from "./src/screens/verifiedFans/redemptionPage";
import GenerateFanCodePage from "./src/screens/admin/generateCodePage";
import ConfirmCodePage from "./src/screens/admin/confirmCodePage";

// Ticketing
import ViewConcertPage from "./src/screens/ticketing/viewConcertPage";
import BrowseConcertPage from "./src/screens/ticketing/browseConcertPage";
import ConcertCategoryPage from "./src/screens/ticketing/concertCategoryPage";
import GeneratedUserTicketPage from "./src/screens/ticketing/generateTicketPage";
import CheckoutPage from "./src/screens/ticketing/checkoutPage";

// User
import UserTicketsPage from "./src/screens/user/ticketsPage";
import AccountSettingsPage from "./src/screens/user/accountSettingsPage";
import UserProfilePage from "./src/screens/user/profilePage";
import EditProfilePage from "./src/screens/user/editProfilePage";
import ViewAllClubsPage from "./src/screens/user/viewAllClubsPage";
import ViewClubPage from "./src/screens/user/viewClubPage";

// eWallet
import ManageEWalletPage from "./src/screens/eWallet/eWalletPage";
import EWalletWithdrawPage from "./src/screens/eWallet/eWalletWithdrawPage";
import ColorTheme from "./src/colorScheme";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Lato-Bold": require("./src/assets/fonts/Lato/Lato-Bold.ttf"),
    "Lato-Regular": require("./src/assets/fonts/Lato/Lato-Regular.ttf"),
    "Lato-Light": require("./src/assets/fonts/Lato/Lato-Light.ttf"),
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGZlYjU2ZmYwYmE1NjMxYzY1NTQ1MCIsInR5cGUiOiJhZG1pbiIsInBob25lIjoiNjU5NzMxMTUzMCIsIm5hbWUiOiJTVyBPcCIsImlhdCI6MTY5NzU5NDE1MywiZXhwIjoxNjk4MTk4OTUzfQ.ndn_VnqOOhhDduFITVts4vqBqCrfAdTefVaIdliXbG8"
  );
  const [colors, setColors] = useState(ColorTheme.dark);
  const [theme, setTheme] = useState(useColorScheme());

  useEffect(() => {
    if (theme === "light") {
      setColors(ColorTheme.dark);
    } else {
      setColors(ColorTheme.dark);
    }
  }, [theme]);

  console.log(theme);
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

  const backIcon = () => {
    return <AntDesign name="arrowLeft" size={20} color={colors.textPrimary} />;
  };

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <ColorContext.Provider value={{ colors, setColors }}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="loginPage" //brings you to login page first, if need to test other pages, change this (BYPASS)
              screenOptions={{
                headerStyle: {
                  backgroundColor: colors.background,
                },
                headerTitle: "TIXAR",
                headerTitleAlign: "center",
                headerTintColor: colors.textPrimary,
              }}
            >
              <Stack.Screen
                name="drawer"
                component={DrawerNav}
                options={{
                  headerShown: false,
                }}
              />

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
                <Stack.Screen
                  name="checkoutPage"
                  component={CheckoutPage}
                  options={{
                    drawerLabel: "Checkout Page",
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

              <Stack.Group screenOptions={{ headerShown: false }}>
                <Stack.Screen name="loginPage" component={LoginPage} />
                <Stack.Screen name="otpPage" component={OTPPage} />
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

              <Stack.Group>
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
          <StatusBar style="light" />
        </SafeAreaProvider>
      </ColorContext.Provider>
    </AuthContext.Provider>
  );
}

const DrawerNav = ({ route, navigation }) => {
  const { colors } = useContext(ColorContext);
  const Drawer = createDrawerNavigator();
  const token = useContext(AuthContext).token;
  const [userType, setUserType] = useState("");
  const getUser = () => {
    fetch("http://rt.tixar.sg:3000/api/user", {
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
      initialRouteName="browseConcertPage" //first page loaded in drawer navigator
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
              navigation.navigate("userProfilePage");
            }}
          >
            <AntDesign name="team" size={25} color={colors.textPrimary} />
          </Pressable>
        ),
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleAlign: "center",
        headerTintColor: colors.textPrimary,
        headerShadowVisible: false,
        drawerStyle: {
          backgroundColor: colors.background,
        },
        drawerActiveTintColor: colors.textPrimary,
        drawerInactiveTintColor: colors.textPrimary,
      }}
    >
      {/* Navigation sidebar TIXAR */}
      <Drawer.Group screenOptions={{ headerTitle: "TIXAR" }}>
        <Drawer.Screen
          name="browseConcertPage"
          component={BrowseConcertPage}
          options={{
            drawerLabel: "Home",
          }}
        />

        <Drawer.Screen
          name="viewAllClubsPage"
          component={ViewAllClubsPage}
          options={{
            drawerLabel: "Browse Fan Clubs",
          }}
        />

        <Drawer.Screen
          name="vfDashboardPage"
          component={VFDashboardPage}
          options={{
            drawerLabel: "My Clubs",
          }}
        />

        {/* temp */}
        <Drawer.Screen
          name="userTicketsPage"
          component={UserTicketsPage}
          options={{
            drawerLabel: "My Tickets",
          }}
        />

        {userType === "admin" && (
          <Drawer.Screen
            name="adminDashboardPage"
            component={AdminDashboardPage}
            options={{
              drawerLabel: "ADMIN",
            }}
          />
        )}
      </Drawer.Group>
    </Drawer.Navigator>
  );
};
