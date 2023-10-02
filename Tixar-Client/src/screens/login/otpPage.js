import { React, useState, useRef, useContext } from "react";
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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBlock from "../../components/login/headerBlock";
import PhoneInput from "react-native-phone-number-input";
import AuthContext from "../../../AuthContext";

export default OTPPage = ({ route, navigation }) => {
  const { phoneNumber } = route.params;
  const [otp, setotp] = useState("");
  const { setToken } = useContext(AuthContext);

  // function to handle OTP input as user types
  const handleOTP = (number) => {
    setotp(number);
  };

  // function to handle otp and login request
  const handleOTPLogin = () => {
    const endPoint = "http://rt.tixar.sg/api/login";
    const payload = {
      phone: phoneNumber,
      otp: otp,
    };

    fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        console.log("attempting to authenticate OTP");
        if (response.ok) {
          return response.json();
        } else {
          console.log("Error code: " + response.status);
          throw new Error(response.status);
        }
      })
      .then((data) => {
        console.log("OTP valid, login successful");
        console.log("Token: " + data.token);
        setToken(data.token);

        // Alert.alert("Login successful", "Welcome");
        navigation.navigate("drawer", { token: data.token });
      })
      .catch((error) => {
        console.log("OTP verification unsuccessful");
        if (error.message === "400") {
          console.log("OTP Expired");
          Alert.alert("OTP Expired", "Please request for a new OTP");
        } else if (error.message === "401") {
          console.log("Invalid OTP");
          Alert.alert("Invalid OTP", "Please enter a valid OTP");
        } else {
          console.log("Login failed, please try again");
          Alert.alert("Login failed", "please try again");
        }
      });
  };

  // function to handle phone number authentication request
  const handleOTPResend = () => {
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
          console.log("OTP resend request successful");
          return response.json();
        } else {
          console.log("OTP resend unsuccessful");
          throw new Error("Failed to login");
        }
      })
      .then((data) => {
        console.log("OTP resent Successfully");
        Alert.alert("OTP resent", "Please check your phone for the OTP");
      })
      .catch((error) => {
        console.log("OTP resend unsuccessful");
        Alert.alert("Login failed", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/loginbackground.png")}
        style={styles.imageBackground}
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
              <Text style={styles.loginHeader}>
                Enter the OTP sent to +{phoneNumber}
              </Text>

              <View style={styles.loginLine}>
                {/* code */}
                <TextInput
                  style={styles.OTPInput}
                  placeholder="Enter OTP"
                  placeholderTextColor="#252F40"
                  keyboardType="numeric"
                  maxLength={6}
                  onChangeText={handleOTP}
                />
              </View>

              {/* Buttons */}
              <View style={styles.buttonRow}>
                <Pressable
                  style={styles.button}
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Text style={styles.buttonText}>Back</Text>
                </Pressable>
                <Pressable
                  style={styles.button}
                  onPress={() => {
                    handleOTPLogin();
                  }}
                >
                  <Text style={styles.buttonText}>Continue</Text>
                </Pressable>
              </View>

              <View style={styles.resendButton}>
                <Pressable
                  // style={{ flex: 1 }}
                  onPress={() => {
                    handleOTPResend();
                  }}
                >
                  <Text style={styles.resendText}>Resend OTP</Text>
                </Pressable>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  // CONTAINERS
  container: {
    flex: 1,
    justifyContent: "flex-end",
    // backgroundColor: "red",
  },
  imageBackground: {
    flex: 1,
    
  },
  loginContainer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: "5%",
    // backgroundColor: "blue",
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

  //BUTTONS
  buttonRow: {
    width: "75%",
    height: 45,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    // backgroundColor: "green",
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    width: "47%",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 15,
    fontFamily: "Lato-Bold",
    color: "#252F40",
    lineHeight: 20,
    textAlign: "center",
    // backgroundColor: "orange",
  },

  // OTP RESEND
  OTPResend: {
    flex: 1,
  },
  resendButton: {
    marginTop: 20,
    // backgroundColor: "purple",
  },
  resendText: {
    fontFamily: "Lato-Regular",
    fontSize: 12,
    color: "#FFFFFF",
    lineHeight: 20,
    textAlign: "center",
    textDecorationLine: "underline",
  },

  //PHONE NUMBER INPUT
  OTPInput: {
    fontSize: 15,
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Lato-Regular",
    color: "#252F40",
    backgroundColor: "#FFFFFF",
    flex: 1,
    borderRadius: 50,
  },

  // LOGIN LINE
  loginHeader: {
    //the prompt text
    fontFamily: "Lato-Bold",
    fontSize: 18,
    alignSelf: "center",
    color: "#FFFFFF",
    lineHeight: 25,
  },
  loginLine: {
    // container holding the otp input
    alignSelf: "center",
    width: "75%",
    height: 45,
    flexDirection: "row",
    // backgroundColor: "purple",
    marginVertical: 20,
  },
});
