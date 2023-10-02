import { React, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import HeaderBlock from "../../components/login/headerBlock";
import PhoneInput from "react-native-phone-number-input";

export default LoginPage = ({ navigation }) => {
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
        console.log("Phone number valid and in system, Navigating to OTP page")
        navigation.navigate("otpPage", { phoneNumber: phoneNumber });
      })
      .catch((error) => {
        // upon unsuccessful verification of phone number, navigate to register page
        console.log("Phone number valid but not in system, Navigating to register page")
        navigation.navigate("registrationPage", { phoneNumber: phoneNumber })
        // insert navigation to register page here
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/loginbackground.png")}
        style={styles.imageBackground}
        // blurRadius={50}
      >
        {/* TIXAR header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>TIXAR</Text>
          <Text style={styles.subHeaderText}>Get verified. Get priority.</Text>
        </View>
        

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
        {/* <Text style={styles.footerText}>TIXAR</Text> */}
      </ImageBackground>
    </View>
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
  headerContainer: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    top: "20%",
    // backgroundColor: "green",
  },
  headerText: {
    fontFamily: "Lato-Bold",
    fontSize: 75,
    color: "#FFFFFF",
    // backgroundColor: "red",
  },
  subHeaderText: {
    fontFamily: "Lato-Regular",
    fontSize: 20,
    color: "#FFFFFF",
    lineHeight: 20,
    // backgroundColor: "blue",
  },

  //PHONE NUMBER INPUT
  textInputStyle: {
    fontSize: 15,
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Lato-Regular",
    color: "#252F40",
    height: 45, //this should be absolute value to prevent changing on different screen sizes
    // backgroundColor: "blue",
  },
  codeTextStyle: {
    fontSize: 15,
    textAlign: "center",
    // textAlignVertical: "center", //not sure this property does not change anything
    fontFamily: "Lato-Regular",
    color: "#252F40",
    // backgroundColor: "red",
    height: 20, //set this to absolute value to prevent changing on different screen sizes
  },
  containerStyle: {
    flex: 1, // fill up the container height
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    // backgroundColor: "blue", //big container for the whole line
  },
  textContainerStyle: {
    width: "75%",
    height: "100%", // fill up the container height, it is flex row so need 100% height
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "green", //small container for all the text
  },
  countryPickerButtonStyle: {
    borderRadius: 50,
    width: "25%",
    // backgroundColor: "yellow", //small container for the flag
  },

  // LOGIN PROMT TEXT LINE
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
    height: 50,
    flexDirection: "row",
    // backgroundColor: "purple",
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
