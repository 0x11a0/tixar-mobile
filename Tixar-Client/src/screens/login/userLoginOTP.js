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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBlock from "../../components/login/headerBlock";
import PhoneInput from "react-native-phone-number-input";

export default UserLoginOTPPage = ({ route, navigation }) => {
  const {phoneNumber} = route.params;
    const [otp, setotp] = useState("");

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
        console.log("attempting to authenticate OTP")
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to login");
        }
      })
      .then((data) => {
        console.log("OTP valid, login successful")
        // Alert.alert("Login successful", "Welcome");
        navigation.navigate('drawer', {token: data.token});
      })
      .catch((error) => {
        console.log("OTP invalid, login unsuccessful")
        Alert.alert("Login failed", error.message);
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
                console.log("OTP resend unsuccessful")
              throw new Error("Failed to login");
            }
          })
          .then((data) => {
            console.log("OTP resent Successfully")
            Alert.alert("OTP resent", "Please check your phone for the OTP")
          })
          .catch((error) => {
            console.log("OTP resend unsuccessful")
            Alert.alert("Login failed", error.message);
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
                        <Text style={styles.loginHeader}>Enter the OTP sent to +{phoneNumber}</Text>
                    </View>
                    <View style={{ height: 20 }} />

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
                            style = {styles.backButton}
                            onPress={() => {
                                navigation.goBack()
                            }}>
                            <Text style = {styles.buttonText}>Back</Text>
                        </Pressable>
                        <Pressable
                            style = {styles.continueButton}
                            onPress={() => {
                                handleOTPLogin();
                            }}>
                            <Text style = {styles.buttonText}>Continue</Text>
                        </Pressable>

                    </View>

                    <View style={styles.resendButton}>
                    <Pressable
                        style = {{flex: 1}}
                        onPress={() => {
                            handleOTPResend()
                        }}>
                        <Text style={styles.resendText}>Resend OTP</Text>
                    </Pressable>
                    </View>

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

  //BUTTONS
  buttonRow: {
    width: '75%', 
    height: 45, 
    flexDirection: "row", 
    top: 30,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    width: '47%',
  },
  continueButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    width: '47%'
  },
    buttonText: {
    fontSize: 15,
    fontFamily: "Lato-Bold",
    color: "#252F40",
    lineHeight: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
    },

    // OTP RESEND
    OTPResend: {
        flex: 1
    },
    resendButton: {
        width: '20%', 
        height: 25, 
        flexDirection: "row", 
        top: 40,
        alignSelf: 'center',
        alignItems: 'center',
    },
    resendText: {
        fontFamily: "Lato-Regular",
        fontSize: 12,
        color: "#FFFFFF",
        lineHeight: 20,
        textAlign: 'center',
        textDecorationLine: 'underline',
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
    fontFamily: "Lato-Bold",
    fontSize: 18,
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
