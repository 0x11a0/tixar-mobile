import { React, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
  FlatList,
  TouchableOpacity,
  Button,
  onPressLearnMore,
  Alert,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBlock from "./headerBlockUserProfile";
import { useIsFocused, useNavigation } from "@react-navigation/native"; // Import useIsFocused
import nextButton from "../../components/viewConcert/nextButton";
// import { useNavigation } from "react-navigation-hooks";

const userEdit = ["Ewallet", "Edit", "Settings"];

export default UserProfile = ({ route, navigation }) => {
  console.log("user profile");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");

  // const isFocused = useIsFocused(); // Use useIsFocused to check if the screen is focused
  // console.log("HERE");
  // useEffect(() => {
  //   console.log("use effect");
  //   if (isFocused) {
  //     console.log("running get user");
  //     getUser(); // Fetch data when the screen is focused
  //   }
  // }, [isFocused]); // Use isFocused as a dependency in useEffect

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
    console.log("GET REQUEST");
    fetch("http://rt.tixar.sg/api/user", {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: route.params.token,
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
    <SafeAreaView style={styles.container}>
      <HeaderBlock
        name={firstName + " " + lastName}
        walletOnPress={() => {
          navigation.navigate("manageEWalletPage", {
            token: route.params.token,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
          });
        }}
        editOnPress={() => {
          navigation.navigate("editUserProfilePage", {
            token: route.params.token,
          });
        }}
        settingsOnPress={() => {
          navigation.navigate("settingsPage", { token: route.params.token });
        }}
      />

      <View style={styles.translucentBox}>
        <Text style={styles.email}>Email</Text>
        <Text style={styles.subtitle}>{email}</Text>
        <Text style={styles.text}>Phone Number</Text>
        <Text style={styles.subtitle}>{phoneNumber}</Text>
        <View style={styles.buttonContainerStyle}>
          <NextButton
            buttonText={"View Tickets"}
            onPressFunction={() => {
              navigation.navigate("userTicketsPage");
            }}
            buttonHeight={50}
          />
        </View>

        {/* <TouchableOpacity style={{ marginTop: 50 }}> */}
        {/* <View style={buttonContainerStyle}> */}

        {/* <Button
              title="View My Tickets"
              accessibilityLabel="View Tickets"
              color={Platform.OS === "ios" ? "white" : "#AB2FCD"}
              onPress={() => {
                // Alert.alert('Link to view tickets');
                navigation.navigate("userTicketsPage");
              }}
            /> */}
        {/* </View> */}
        {/* </TouchableOpacity> */}
      </View>

      <Text style={styles.footerText}>TIXAR</Text>
    </SafeAreaView>
  );
};
// const buttonContainerStyle =
//   Platform.OS === "ios"
//     ? { backgroundColor: "#AB2FCD" }
//     : { backgroundColor: "transparent" };

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
  email: {
    marginTop: 20,
    fontFamily: "Lato-Bold",
    fontSize: 20,
    marginBottom: 10,
    marginRight: "auto",
  },
  text: {
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
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "#f2f2f2",
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
