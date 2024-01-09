import { React, useState, useRef, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Dimensions,
  Easing,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Button from "../../../components/newApp/button";
import SmallButton from "../../../components/newApp/smallButton";

//import global color palatte
// import { colors } from '../../../colors';
import { AuthContext, ColorContext } from "../../../../context";
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
  const [otp, setotp] = useState("");
  const { setToken } = useContext(AuthContext);
  const [isAnimating, setIsAnimating] = useState(true);
  const winHeight = Dimensions.get("window").height;
  const winWidth = Dimensions.get("window").width;
  const loginX = useRef(new Animated.Value(0)).current;
  const loginOpacity = useRef(new Animated.Value(1)).current;
  const otpX = useRef(new Animated.Value(0)).current;
  const otpOpacity = useRef(new Animated.Value(0)).current;
  const regX = useRef(new Animated.Value(0)).current;
  const regOpacity = useRef(new Animated.Value(0)).current;
  const [success1, setSuccess1] = useState(false);
  const [success2, setSuccess2] = useState(false);

  // function to handle phone number authentication request
  const handleLogin = () => {
    Keyboard.dismiss();
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
          animate1();
        } else {
          animate3();
        }
      })
      .catch((error) => {
        // upon unsuccessful verification of phone number, navigate to register page
        console.error(error);
        console.log("Login unsuccessful");
      });
  };

  const handleOTP = (number) => {
    setotp(number);
    setValid(number.length === 6);
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
        setSuccess1(false);
        setValid(false);
        loginX.setValue(0);
        loginOpacity.setValue(1);
        otpX.setValue(0);
        otpOpacity.setValue(0);
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
          Alert.alert("OTP resent", "Please check your phone for the OTP");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
          invAnimate4();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const animate1 = () => {
    Animated.parallel([
      Animated.timing(loginX, {
        easing: Easing.linear,
        toValue: -winWidth / 2,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(loginOpacity, {
        easing: Easing.linear,
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setSuccess1(true);
      animate2();
    });
  };

  const invAnimate1 = () => {
    Animated.parallel([
      Animated.timing(loginX, {
        easing: Easing.linear,
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(loginOpacity, {
        easing: Easing.linear,
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {});
  };

  const animate2 = () => {
    Animated.parallel([
      Animated.timing(otpX, {
        easing: Easing.linear,
        toValue: -winWidth / 2,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(otpOpacity, {
        easing: Easing.linear,
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const invAnimate2 = () => {
    Animated.parallel([
      Animated.timing(otpX, {
        easing: Easing.linear,
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(otpOpacity, {
        easing: Easing.linear,
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setSuccess1(false);
      invAnimate1();
    });
  };

  const animate3 = () => {
    Animated.parallel([
      Animated.timing(loginX, {
        easing: Easing.linear,
        toValue: winWidth / 2,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(loginOpacity, {
        easing: Easing.linear,
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setSuccess2(true);
      animate4();
    });
  };

  const invAnimate3 = () => {
    Animated.parallel([
      Animated.timing(loginX, {
        easing: Easing.linear,
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(loginOpacity, {
        easing: Easing.linear,
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {});
  };

  const animate4 = () => {
    Animated.parallel([
      Animated.timing(regX, {
        easing: Easing.linear,
        toValue: winWidth / 2,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(regOpacity, {
        easing: Easing.linear,
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const invAnimate4 = () => {
    Animated.parallel([
      Animated.timing(regX, {
        easing: Easing.linear,
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(regOpacity, {
        easing: Easing.linear,
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setSuccess2(false);
      invAnimate3();
    });
  };

  //rendered items
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/loginbackground.png")}
        style={styles.imageBackground}
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
              <View style={styles.headerCont9787771697877716ainer}>
                <Text style={styles.headerText}>TIXAR</Text>
                <Text style={styles.subHeaderText}>
                  Get verified. Get priority.
                </Text>
              </View>

              {success2 && (
                <Animated.View
                  style={{
                    transform: [
                      { translateX: -winWidth / 2 },
                      { translateX: regX },
                    ],
                    opacity: regOpacity,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  {/* Translucent card */}
                  <View style={[styles.translucentCard, { height: "80%" }]}>
                    <KeyboardAvoidingView
                      style={{
                        width: "100%",
                        height: "100%",
                        alignItems: "center",
                      }}
                      behavior="padding"
                    >
                      <Text style={[styles.cardTextSubtle, { lineHeight: 20 }]}>
                        Creating an account for
                      </Text>
                      <Text style={[styles.cardTextSubtle, { lineHeight: 20 }]}>
                        +{phoneNumber}
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

                      <View style={{ height: 20 }} />

                      <View
                        style={[styles.buttonRow, { flex: 1, width: "95%" }]}
                      >
                        <SmallButton
                          buttonText={"Back"}
                          enableCondition={true}
                          onPressFunction={() => {
                            setValid(false);
                            invAnimate4();
                          }}
                        />
                        <SmallButton
                          buttonText={"Continue"}
                          enableCondition={credentialCheck}
                          onPressFunction={() => {
                            handleRegister();
                          }}
                        />
                      </View>
                    </KeyboardAvoidingView>
                  </View>
                </Animated.View>
              )}

              {!success1 && !success2 && (
                <Animated.View
                  style={{
                    transform: [{ translateX: loginX }],
                    opacity: loginOpacity,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* Prompt Text */}
                  <View style={styles.promptTextContainer}>
                    <View style={{ height: 30 }} />
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
                </Animated.View>
              )}

              {success1 && (
                <Animated.View
                  style={{
                    transform: [
                      { translateX: winWidth / 2 },
                      { translateX: otpX },
                    ],
                    opacity: otpOpacity,
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "yellow",
                  }}
                >
                  {/* Login form */}
                  {/* <View style={styles.loginContainer}> */}
                  <View style={{ height: 30 }} />
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
                    <SmallButton
                      buttonText={"Back"}
                      enableCondition={true}
                      onPressFunction={() => {
                        setValid(false);
                        invAnimate2();
                      }}
                    />
                    <SmallButton
                      buttonText={"Continue"}
                      enableCondition={valid}
                      onPressFunction={() => {
                        handleOTPLogin(otp);
                      }}
                    />
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
                  {/* </View> */}
                </Animated.View>
              )}
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
    width: "100%",
  },

  // TIXAR HEADER
  headerContainer: {
    alignItems: "center",
    //paddingBottom: 70,
  },
  // blurRadius={50}

  headerText: {
    fontFamily: "Lato-Bold",
    fontSize: 75,
    color: "#FFFFFF",
  },

  subHeaderText: {
    fontFamily: "Lato-Regular",
    fontSize: 20,
    color: "#FFFFFF",
    lineHeight: 20,
  },

  loginHeader: {
    fontFamily: "Lato-Bold",
    fontSize: 24,
    color: "#FFFFFF",
  },

  //PHONE NUMBER INPUT
  numberInputContainer: {
    width: "87%",
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
  buttonRow: {
    width: "75%",
    height: 45,
    flexDirection: "row",
    justifyContent: "space-evenly",
    // backgroundColor: "green",
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
    height: 40,
    flexDirection: "row",
    // backgroundColor: "purple",
    marginVertical: 20,
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

  translucentCard: {
    height: "90%",
    width: "85%",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingHorizontal: 20,
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
    width: "95%",
    borderRadius: 50,
    // borderColor: "#1A1A1A",
    backgroundColor: "white",
    // borderWidth: 1,
    marginVertical: 12,
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
