import { React, useState, useRef } from "react";
import {
  TouchableOpacity,
  Button,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  navigation,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBlock from "../../components/login/headerBlock";
import PhoneInput from "react-native-phone-number-input";

export default NewUserLoginPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(false);
  const phoneInput = useRef(null);

  // function to handle phone number input as user types
  const handlePhoneInput = (number) => {
    const checkValid = phoneInput.current?.isValidNumber(number);
    setValid(checkValid);
    const cleanedNumber = number.replace(/\+/g, "");
    setPhoneNumber(cleanedNumber);
  };

    // function to handle phone number authentication request
  const handleLogin = () => {
    const endPoint = "http://rt.tixar.sg/api/otp/request";
    const payload = {
      phone: phoneNumber,
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
            console.log("Login request successful");
          return response.json();
        } else {
            console.log("Login request unsuccessful")
          throw new Error("Failed to login");
        }
      })
      .then((data) => {
        // upon successful verification of phone number, navigate to OTP page
        console.log("Phone number valid, Navigating to OTP page")
        navigation.navigate("UserLoginOTPPage", { phoneNumber: phoneNumber });
      })
      .catch((error) => {
        // upon unsuccessful verification of phone number, navigate to register page
        Alert.alert("Login failed", error.message);
        // insert navigation to register page here
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/loginbackground.png")}
        style={styles.imageBackground}
      >
        {/* TIXAR header */}
        <Text style={styles.headerText}>TIXAR</Text>
        <Text style={styles.subHeaderText}>Get verified. Get priority.</Text>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            {/* Login form */}
            <View style={styles.loginContainer}>
              <View style={{ height: 50 }}>
                <Text style={styles.loginHeader}>Log in to continue</Text>
              </View>
              <View style={{ height: 20 }} />

              <View style={styles.loginLine}>
                <PhoneInput
                  ref={(ref) => (phoneInput.current = ref)}
                  textInputProps={{
                    ref: (ref) => (phoneInput.current = ref),
                  }}
                  defaultCode="SG"
                  layout="first"
                  placeholder="XXXX-XXXX"
                  onChangeFormattedText={(text) => {
                    handlePhoneInput(text);
                  }}
                  textInputStyle={styles.textInputStyle}
                  codeTextStyle={styles.codeTextStyle}
                  containerStyle={styles.containerStyle}
                  textContainerStyle={styles.textContainerStyle}
                  countryPickerButtonStyle={styles.countryPickerButtonStyle}
                />
              </View>

              {/* Login button */}
              <LoginButton
                valid={valid}
                phoneNumber={phoneNumber}
                navigation={navigation}
                handleLogin={handleLogin}
              />
            </View>
            <View style={{ height: 50 }} />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>

        {/* TIXAR footer */}
        <Text style={styles.footerText}>TIXAR</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

const LoginButton = ({ valid, phoneNumber, navigation, handleLogin }) => {
  return (
    <LinearGradient
      colors={valid ? ["#FF0080", "#7928CA"] : ["#E8ECEF", "#E8ECEF"]}
      style={styles.loginBackgroundEnabled}
      start={[0, 0]}
      end={[1, 0]}
    >
      <Pressable
        style={styles.loginButton}
        onPress={() => {
          if (valid) {
            // Add login auth here
            console.log(
              "attempting to login with phone number: " + phoneNumber
            );
            handleLogin(phoneNumber);
          } else {
            console.log("button disabled");
          }
        }}
      >
        <Text
          style={valid ? styles.loginTextEnabled : styles.loginTextDisabled}
        >
          Continue
        </Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  // CONTAINERS
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  loginContainer: {
    top: "75%",
    height: "20%",
  },

  // TIXAR HEADER
  headerText: {
    fontFamily: "Lato-Bold",
    fontSize: 75,
    position: "absolute",
    alignSelf: "center",
    color: "#FFFFFF",
    top: "20%",
  },
  subHeaderText: {
    fontFamily: "Lato-Regular",
    fontSize: 18,
    position: "absolute",
    alignSelf: "center",
    color: "#FFFFFF",
    top: "30%",
    lineHeight: 20,
  },

  //PHONE NUMBER INPUT
  textInputStyle: {
    fontSize: 15,
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Lato-Regular",
    color: "#252F40",
    height: "300%",
  },
  codeTextStyle: {
    fontSize: 15,
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Lato-Regular",
    color: "#252F40",
    height: "160%",
  },
  containerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  textContainerStyle: {
    width: "75%",
    height: "100%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  countryPickerButtonStyle: {
    borderRadius: 50,
    width: "25%",
  },

  // LOGIN LINE
  loginHeader: {
    fontFamily: "Lato-Bold",
    fontSize: 24,
    position: "absolute",
    alignSelf: "center",
    color: "#FFFFFF",
    lineHeight: 25,
  },
  loginLine: {
    position: "absolute",
    alignSelf: "center",
    width: "75%",
    top: 40,
    height: 45,
    flexDirection: "row",
    borderRadius: 50,
  },

  // Login button stuff
  loginButton: {
    width: "75%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  loginBackgroundEnabled: {
    borderRadius: 50,
    width: "75%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: 30,
  },
  loginTextEnabled: {
    fontSize: 15,
    fontFamily: "Lato-Bold",
    color: "white",
    lineHeight: 20,
  },
  loginTextDisabled: {
    fontSize: 15,
    fontFamily: "Lato-Bold",
    color: "#252F40",
    lineHeight: 20,
  },

  // TIXAR FOOTER
  footerText: {
    fontFamily: "Lato-Regular",
    fontSize: 12,
    position: "absolute",
    alignSelf: "center",
    bottom: "1%",
    color: "#8F8F8F",
  },
});
