import { React, useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import HeaderBlock from "../../components/user/headerBlockUserProfile";
import { ColorContext } from "../../../context";
import { AuthContext } from "../../../context";

export default ProfilePage = ({ route, navigation }) => {
  const { colors } = useContext(ColorContext);
  const { token } = useContext(AuthContext);
  let [user, setUser] = useState({});

  useEffect(() => {
    navigation.addListener("focus", () => {
      console.log("reloaded");
      getUser();
    });
  }, [navigation]);

  const getUser = () => {
    console.log("getting user profile");
    fetch("http://rt.tixar.sg/api/user", {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Cache-Control": "no-cache",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderBlock
        name={user.firstName + " " + user.lastName}
        walletOnPress={() => {
          navigation.navigate("manageEWalletPage");
        }}
        editOnPress={() => {
          navigation.navigate("editProfilePage", {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
          });
        }}
        settingsOnPress={() => {
          navigation.navigate("accountSettingsPage");
        }}
      />

      <View style={styles.translucentBox}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>Email</Text>
        <Text style={[styles.subtitle, { color: colors.textPrimary }]}>
          {user.email}
        </Text>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          Phone Number
        </Text>
        <Text style={[styles.subtitle, { color: colors.textPrimary }]}>
          {user.phone}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainerStyle: {
    flex: 1,
    width: "100%",
    marginTop: 20,
  },
  translucentBox: {
    height: "50%",
    width: "85%",
    position: "absolute",
    top: 320,
    borderRadius: 15,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "center",
    // backgroundColor: 'white',
  },
  title: {
    marginTop: 20,
    fontFamily: "Lato-Bold",
    fontSize: 20,
    marginBottom: 10,
    marginRight: "auto",
  },
  subtitle: {
    fontFamily: "Lato-Regular",
    fontSize: 15,
    marginBottom: 10,
    marginRight: "auto",
  },

  container: {
    flex: 1,
    // backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "flex-start",
    // borderColor: "#f2f2f2",
  },
  footerText: {
    bottom: 15,
    fontFamily: "Lato-Regular",
    fontSize: 12,
    position: "absolute",
  },
  viewTicketsButton: {
    backgroundColor: "#B731D9",
    borderWidth: 5,
    borderColor: "#fff",
  },
});
