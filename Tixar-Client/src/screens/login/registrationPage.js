import { React, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ImageBackground,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  Image,
} from "react-native";
import ConditionalButton from "../../components/new/conditionalButton";

export default RegistrationPage = ({ route, navigation }) => {
  const { phoneNumber } = route.params;
  //states for text input fields
  const [firstNameField, setFirstName] = useState("");
  const [lastNameField, setlastName] = useState("");
  const [emailField, setEmail] = useState("");

  //use to check if all fields are filled
  const [credentialCheck, setCredentialCheck] = useState(false);

  // for each text input field, check if all fields are filled if yes, set credentialCheck to true
  const handleEmail = (text) => {
    setEmail(text);
    setCredentialCheck(
      text !== "" && firstNameField !== "" && lastNameField !== ""
    );
  };
  const handleFirstName = (text) => {
    setFirstName(text);
    setCredentialCheck(
      text !== "" && emailField !== "" && lastNameField !== ""
    );
  };
  const handleLastName = (text) => {
    setlastName(text);
    setCredentialCheck(
      text !== "" && emailField !== "" && firstNameField !== ""
    );
  };

  // function to handle new user registration
  const handleRegister = () => {
    const endPoint = "http://rt.tixar.sg/api/register";
    const payload = {
      phone: phoneNumber,
      firstName: firstNameField,
      lastName: lastNameField,
      email: emailField,
    };

    fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Registration request successful");
          return response.json();
        } else {
          console.log("Registration request unsuccessful");
          throw new Error("Failed to register");
        }
      })
      .then((data) => {
        // upon successful verification of phone number, navigate to login
        Alert.alert(
          "Registration successful",
          "Please login with your details"
        );
        console.log("Registration successful, Navigating back to login page");
        navigation.goBack();
      })
      .catch((error) => {
        console.log("Registration failed, try again");
        Alert.alert("Registration failed", error.message);
        // insert navigation to register page here
      });
  };

  //rendered items
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../../assets/purpleConcertBackground.png")}
        style={styles.backgroundImage}
        blurRadius={5} // Adjust the blur radius as needed
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.container}>
            {/* Translucent card */}
            <View style={styles.translucentCard}>
              {/* Back button*/}
              <Pressable
                //on press function
                onPress={() => {
                  console.log("returning to login page");
                  navigation.goBack();
                }}
              >
                <Image
                  style={styles.backButtonContainer}
                  source={require("../../assets/backArrowBlack.png")}
                />
              </Pressable>

              <KeyboardAvoidingView
                style={{ width: "100%", height: "100%", alignItems: "center" }}
                behavior="padding"
              >
                {/* TIXAR header */}
                <Text style={styles.cardTextHeader}>TIXAR</Text>
                <Text style={styles.cardText}>Create Your Profile.</Text>

                <View style={{ height: "10%" }}></View>
                <Text style={styles.cardTextSubtle}>
                  Creating an account for +{phoneNumber}
                </Text>
                {/* Email field */}
                <View style={styles.fieldBox}>
                  <TextInput
                    style={styles.fieldText}
                    onChangeText={handleEmail}
                    value={emailField}
                    placeholder="Email"
                    autoCapitalize="none"
                  />
                </View>

                {/* First Name Input Field */}
                <View style={styles.fieldBox}>
                  <TextInput
                    style={styles.fieldText}
                    onChangeText={handleFirstName}
                    value={firstNameField}
                    placeholder="First Name"
                  />
                </View>

                {/* Last Name Input Field */}
                <View style={styles.fieldBox}>
                  <TextInput
                    style={styles.fieldText}
                    onChangeText={handleLastName}
                    value={lastNameField}
                    placeholder="Last Name"
                  />
                </View>

                {/* Continue Button HEEEEEREEEE THANKS HEHE */}
                <View style={styles.conditionalButtonContainer}>
                  <ConditionalButton
                    credentialCheck={credentialCheck}
                    onPressFunction={handleRegister}
                    navigation={navigation}
                    borderRadius={50}
                  />
                </View>
              </KeyboardAvoidingView>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  //translucent card for background
  translucentCard: {
    height: "90%",
    width: "85%",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },

  //back button
  backButtonContainer: {
    position: "relative",
    left: "-40%",
    width: 30,
    height: 30,
    resizeMode: "contain",
    tintColor: "white",
    // backgroundColor: "red",
  },

  //header
  cardTextHeader: {
    fontSize: 64,
    fontFamily: "Lato-Bold",
    color: "white",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Lato-Bold",
    color: "white",
  },
  cardTextSubtle: {
    fontSize: 16,
    fontFamily: "Lato-Regular",
    color: "white",
  },

  //text input field styles
  fieldBox: {
    flexDirection: "row",
    height: 56,
    width: "80%",
    borderRadius: 50,
    // borderColor: "#1A1A1A",
    backgroundColor: "white",
    // borderWidth: 1,
    marginTop: 25,
  },
  fieldText: {
    flex: 1,
    left: "25%",
    fontSize: 18,
    fontFamily: "Lato-Regular",
    color: "#8F8F8F",
    paddingLeft: 15,
    // backgroundColor: "red",
  },

  //conditional button
  conditionalButtonContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    // backgroundColor: "red",
  },
});
