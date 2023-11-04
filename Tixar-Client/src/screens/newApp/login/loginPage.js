import { React, useState, useRef, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Button from "../../../components/newApp/button";

//import global color palatte
// import { colors } from '../../../colors';
import { ColorContext } from "../../../../context";
import TextInputField from "../../../components/newApp/textInputField";

export default LoginPage = ({ navigation }) => {
  const Colors = useContext(ColorContext);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(false);
  const phoneInput = useRef(null);

  const [value, setValue] = useState("");

  // function to handle phone number input as user types
  const handlePhoneInput = (number) => {
    const checkValid = phoneInput.current?.isValidNumber(number);
    setValid(checkValid);
    const cleanedNumber = number.replace(/\+/g, "");
    setPhoneNumber(cleanedNumber);
  };

  // function to handle phone number authentication request
  const handleLogin = () => {
    const endPoint = "http://rt.tixar.sg:3000/api/otp/request";
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
          console.log("NEW APP LOGIN");
          return response.json();
        } else {
          console.log("Login request unsuccessful");
          throw new Error("Failed to login");
        }
      })
      .then((data) => {
        // upon successful verification of phone number, navigate to OTP page
        console.log("Phone number valid and in system, Navigating to OTP page");
        navigation.navigate("otpPage", { phoneNumber: phoneNumber });
      })
      .catch((error) => {
        // upon unsuccessful verification of phone number, navigate to register page
        console.log(
          "Phone number valid but not in system, Navigating to register page"
        );
        navigation.navigate("registrationPage", { phoneNumber: phoneNumber });
        // insert navigation to register page here
      });
  };

  //rendered items
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/loginbackground.png")}
        style={styles.imageBackground}
        // blurRadius={50}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            {/* Login Form */}
            <View
              style={[
                styles.formContainer,
                { backgroundColor: Colors.primary },
              ]}
            >
              {/* TIXAR header */}
              <View style={styles.headerContainer}>
                <Text style={styles.headerText}>TIXAR</Text>
                <Text style={styles.subHeaderText}>
                  Get verified. Get priority.
                </Text>
              </View>

              {/* Prompt Text */}
              <View style={styles.promptTextContainer}>
                <Text style={styles.loginHeader}>Log in to continue</Text>
              </View>

              {/* Phone Number Input */}
              <View style={styles.numberInputContainer}>
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

              {/* Login Button */}
              <View style={styles.buttonContainer}>
                <Button
                  buttonText={"LOG IN"}
                  enableCondition={valid}
                  onPressFunction={() => {
                    handleLogin(phoneNumber);
                  }}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>

        {/* TIXAR footer */}
        {/* <Text style={styles.footerText}>TIXAR</Text> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  // MAIN CONTAINER
  container: {
    flex: 1,
    justifyContent: "center",
  },

  imageBackground: {
    flex: 1,
  },

  // FORM
  formContainer: {
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 20,
    margin: "5%",
    // backgroundColor: colors.primary,
  },

  // TIXAR HEADER
  headerContainer: {
    alignItems: "center",
    paddingBottom: 70,
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

  //PROMPT TEXT
  promptTextContainer: {
    // backgroundColor: "orange",
  },

  loginHeader: {
    fontFamily: "Lato-Bold",
    fontSize: 24,
    color: "#FFFFFF",
  },

  //PHONE NUMBER INPUT
  numberInputContainer: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    marginVertical: 30,
    // backgroundColor: "purple",
  },

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
    // backgroundColor: "blue",
  },
  textContainerStyle: {
    width: "75%",
    height: "100%", // fill up the container height, it is flex row so need 100% height
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "green",
  },
  countryPickerButtonStyle: {
    borderRadius: 50,
    width: "25%",
    // backgroundColor: "yellow",
  },

  // BUTTON
  buttonContainer: {
    alignItems: "center",
    // backgroundColor:'red',
  },
});
