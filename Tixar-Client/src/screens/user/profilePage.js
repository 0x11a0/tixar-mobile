import { React, useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import HeaderBlock from "../../components/user/headerBlockUserProfile";
import Button from "../../components/newApp/button";
import { ColorContext } from "../../../context";
import { AuthContext } from "../../../context";

export default ProfilePage = ({ route, navigation }) => {
  const { colors } = useContext(ColorContext);
  const { token } = useContext(AuthContext);
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    navigation.addListener("focus", () => {
      console.log("reloaded");
      getUser();
    });
  }, [navigation]);

  const parsePhoneNumber = (phoneNum) => {
    // convert phone number to formatter phone number
  };

  const getUser = () => {
    fetch("http://rt.tixar.sg:3000/api/user", {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Cache-Control": "no-cache",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
        setPhoneNumber(data.phone);
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
        name={firstName + " " + lastName}
        walletOnPress={() => {
          navigation.navigate("manageEWalletPage", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
          });
        }}
        editOnPress={() => {
          navigation.navigate("editProfilePage");
        }}
        settingsOnPress={() => {
          navigation.navigate("accountSettingsPage");
        }}
      />

      <View style={styles.translucentBox}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>Email</Text>
        <Text style={[styles.subtitle, { color: colors.textPrimary }]}>
          {email}
        </Text>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          Phone Number
        </Text>
        <Text style={[styles.subtitle, { color: colors.textPrimary }]}>
          {phoneNumber}
        </Text>
        <View style={styles.buttonContainerStyle}>
          <Button
            buttonText={"View Tickets"}
            enableCondition={true}
            onPressFunction={() => {
              navigation.navigate("userTicketsPage");
            }}
          />
        </View>
      </View>

      <Text style={[styles.footerText, { color: colors.textPrimary }]}>
        TIXAR
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainerStyle: {
    flex: 1,
    width: "100%",
    marginTop: 100,
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
    marginTop: 50,
    backgroundColor: "#B731D9",
    borderWidth: 5,
    borderColor: "#fff",
  },
});
