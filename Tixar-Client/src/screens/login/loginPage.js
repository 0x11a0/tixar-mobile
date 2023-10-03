import { React, useState, useRef, useEffect, useContext } from "react";
import {
    View, Text, StyleSheet, Pressable, ImageBackground, TextInput,
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,
    Animated, Easing, Dimensions
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PhoneInput from "react-native-phone-number-input";
import AuthContext from "../../../AuthContext";

export default LoginPage = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [valid, setValid] = useState(false);
    const phoneInput = useRef(null);
    const [otp, setotp] = useState("");
    const { setToken } = useContext(AuthContext);
    const [isAnimating, setIsAnimating] = useState(true);
    const winHeight = Dimensions.get('window').height;
    const winWidth = Dimensions.get('window').width;
    const loginX = useRef(new Animated.Value(0)).current;
    const loginOpacity = useRef(new Animated.Value(1)).current;
    const otpX = useRef(new Animated.Value(0)).current;
    const otpOpacity = useRef(new Animated.Value(0)).current;
    const [success1, setSuccess1] = useState(false);

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
                // navigation.navigate("otpPage", { phoneNumber: phoneNumber });
                animate1();
            })
            .catch((error) => {
                // upon unsuccessful verification of phone number, navigate to register page
                console.log("Phone number valid but not in system, Navigating to register page")
                navigation.navigate("registrationPage", { phoneNumber: phoneNumber })
                // insert navigation to register page here
            });
    };


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
            })
        ]).start(() => {
            setSuccess1(true);
            animate2();
        });
    }

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
            })
        ]).start();
    }

    if (isAnimating) {
        return (<IntroPage setIsAnimating={setIsAnimating} />);
    } else {
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

                    {!success1 && <Animated.View style={[styles.container, {
                        transform: [{ translateX: loginX },],
                        opacity: loginOpacity
                    }]}>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
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
                    </Animated.View>}

                    {success1 && <Animated.View style={[styles.container, {
                        transform: [{ translateX: winWidth / 2 }, { translateX: otpX },],
                        opacity: otpOpacity,
                    }]}>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <KeyboardAvoidingView style={styles.otpContainer} behavior="padding">
                                {/* Login form */}
                                <View style={styles.otpLoginContainer}>
                                    <Text style={styles.otpLoginHeader}>
                                        Enter the OTP sent to +{phoneNumber}
                                    </Text>

                                    <View style={styles.otpLoginLine}>
                                        {/* code */}
                                        <TextInput
                                            style={styles.otpInput}
                                            placeholder="Enter OTP"
                                            placeholderTextColor="#252F40"
                                            keyboardType="numeric"
                                            maxLength={6}
                                            onChangeText={handleOTP}
                                        />
                                    </View>

                                    {/* Buttons */}
                                    <View style={styles.otpButtonRow}>
                                        <Pressable
                                            style={styles.otpButton}
                                            onPress={() => {
                                                navigation.goBack();
                                            }}
                                        >
                                            <Text style={styles.otpButtonText}>Back</Text>
                                        </Pressable>
                                        <Pressable
                                            style={styles.otpButton}
                                            onPress={() => {
                                                handleOTPLogin();
                                            }}
                                        >
                                            <Text style={styles.otpButtonText}>Continue</Text>
                                        </Pressable>
                                    </View>

                                    <View style={styles.otpResendButton}>
                                        <Pressable
                                            // style={{ flex: 1 }}
                                            onPress={() => {
                                                handleOTPResend();
                                            }}
                                        >
                                            <Text style={styles.otpResendText}>Resend OTP</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </KeyboardAvoidingView>
                        </TouchableWithoutFeedback>
                    </Animated.View>}

                    {/* TIXAR footer */}
                    {/* <Text style={styles.footerText}>TIXAR</Text> */}
                </ImageBackground>
            </View >
        );
    }
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
                <Text style={valid ? styles.loginTextEnabled : styles.loginTextDisabled}>
                    Continue
                </Text>
            </Pressable>
        </LinearGradient>
    );
};

const IntroPage = ({ setIsAnimating }) => {
    const dotAnimX = useRef(new Animated.Value(0)).current;
    const dotAnimY = useRef(new Animated.Value(0)).current;
    const dotScale = useRef(new Animated.Value(1)).current;
    const [opacity, setOpacity] = useState(new Animated.Value(0));
    const [backOpacity, setBackOpacity] = useState(1);
    const quartDuration = 700;
    const startDuration = 475;

    const animate0 = () => {
        Animated.sequence([
            Animated.timing(opacity, {
                duration: quartDuration,
                toValue: 1,
                useNativeDriver: true,
            }),
            Animated.parallel([
                Animated.timing(dotAnimX, {
                    easing: Easing.quad,
                    duration: startDuration,
                    toValue: 124,
                    useNativeDriver: true,
                }),
                Animated.timing(dotAnimY, {
                    easing: Easing.out(Easing.quad),
                    duration: startDuration,
                    toValue: -40,
                    useNativeDriver: true,
                })
            ]),
            Animated.parallel([
                Animated.timing(dotAnimX, {
                    easing: Easing.out(Easing.quad),
                    duration: startDuration,
                    toValue: 183,
                    useNativeDriver: true,
                }),
                Animated.timing(dotAnimY, {
                    easing: Easing.quad,
                    duration: startDuration,
                    toValue: 13,
                    useNativeDriver: true,
                })
            ])

        ]).start(() => {
            animate1();
        })
    }

    const animate1 = () => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(dotAnimX, {
                    easing: Easing.quad,
                    duration: quartDuration,
                    toValue: 33,
                    useNativeDriver: true,
                }),
                Animated.timing(dotAnimY, {
                    easing: Easing.out(Easing.quad),
                    duration: quartDuration,
                    toValue: 83,
                    useNativeDriver: true,
                }),
            ]),
            Animated.parallel([
                Animated.timing(dotAnimX, {
                    easing: Easing.out(Easing.quad),
                    duration: quartDuration,
                    toValue: -117,
                    useNativeDriver: true,
                }),
                Animated.timing(dotAnimY, {
                    easing: Easing.quad,
                    duration: quartDuration,
                    toValue: 13,
                    useNativeDriver: true,
                }),
            ]),

        ]).start(() => {
            animate3();
        });
    }

    // Proceed to original position if done
    const animate3 = () => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(dotAnimX, {
                    easing: Easing.quad,
                    duration: startDuration,
                    toValue: -58,
                    useNativeDriver: true,
                }),
                Animated.timing(dotAnimY, {
                    easing: Easing.out(Easing.quad),
                    duration: startDuration,
                    toValue: -40,
                    useNativeDriver: true,
                })
            ]),
            Animated.parallel([
                Animated.timing(dotAnimX, {
                    easing: Easing.out(Easing.quad),
                    duration: startDuration,
                    toValue: 0,
                    useNativeDriver: true,
                }),
                Animated.timing(dotAnimY, {
                    easing: Easing.quad,
                    duration: startDuration,
                    toValue: 0,
                    useNativeDriver: true,
                })
            ])]).start(() => {
                bounce();
            });
    }

    const bounce = () => {
        Animated.sequence([
            Animated.timing(dotAnimY, {
                easing: Easing.cubic,
                useNativeDriver: true,
                duration: 150,
                toValue: 5,
            }),
            Animated.timing(dotAnimY, {
                easing: Easing.out(Easing.cubic),
                useNativeDriver: true,
                duration: 150,
                toValue: -5,
            }),
            Animated.timing(dotAnimY, {
                easing: Easing.cubic,
                useNativeDriver: true,
                duration: 150,
                toValue: 5,
            }),
            Animated.timing(dotAnimY, {
                easing: Easing.out(Easing.cubic),
                useNativeDriver: true,
                duration: 150,
                toValue: -5,
            }),

            Animated.timing(dotScale, {
                easing: Easing.quad,
                useNativeDriver: true,
                duration: 400,
                toValue: 300,
            }),
        ]).start(() => {
            setOpacity(new Animated.Value(0));
            setBackOpacity(0);
            setIsAnimating(false);
        });
    };

    useEffect(() => {
        sleep(500).then(() => animate0());
    }, []);

    return (
        <ImageBackground source={require('../../assets/images/blue.png')} style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: backOpacity,
        }}>
            <Animated.View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                opacity: opacity
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',

                }}>
                    <Text style={styles.text}>t</Text>
                    <Text style={[styles.text, {
                        transform: [
                            { translateY: 23 },
                            { scaleY: 0.6 },
                            { translateY: -23 },
                        ]
                    }]}>i</Text>
                    <Text style={styles.text}>xar</Text>
                </View>

                <Animated.View style={{
                    height: 8,
                    width: 8,
                    borderRadius: 4,
                    backgroundColor: 'white',
                    position: 'absolute',
                    zIndex: 1,
                    // opacity: opacity,
                    transform: [
                        { translateX: -38.5 },
                        { translateY: -13 },
                        { translateX: dotAnimX },
                        { translateY: dotAnimY },
                        { scaleX: dotScale },
                        { scaleY: dotScale }
                    ]
                }} />

                <Animated.View style={{
                    height: 140,
                    width: 300,
                    borderRadius: 150,
                    position: 'absolute',

                    zIndex: 2,
                }} />
            </Animated.View>

        </ImageBackground >
    );

}

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

    text: {
        textTransform: 'uppercase',
        fontSize: 54,
        color: 'white',
    },

    // CONTAINERS
    otpContainer: {
        flex: 1,
        justifyContent: "flex-end",
        // backgroundColor: "red",
    },
    otpImageBackground: {
        flex: 1,

    },
    otpLoginContainer: {
        flexDirection: "column",
        justifyContent: "flex-end",
        marginBottom: "5%",
        // backgroundColor: "blue",
    },

    // TIXAR HEADER
    otpHeaderContainer: {
        position: "absolute",
        alignSelf: "center",
        alignItems: "center",
        top: "20%",
        // backgroundColor: "green",
    },
    otpHeaderText: {
        fontFamily: "Lato-Bold",
        fontSize: 75,
        color: "#FFFFFF",
        // backgroundColor: "red",
    },
    otpSubHeaderText: {
        fontFamily: "Lato-Regular",
        fontSize: 20,
        color: "#FFFFFF",
        lineHeight: 20,
        // backgroundColor: "blue",
    },

    //BUTTONS
    otpButtonRow: {
        width: "75%",
        height: 45,
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-between",
        // backgroundColor: "green",
    },
    otpButton: {
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        width: "47%",
        justifyContent: "center",
    },
    otpButtonText: {
        fontSize: 15,
        fontFamily: "Lato-Bold",
        color: "#252F40",
        lineHeight: 20,
        textAlign: "center",
        // backgroundColor: "orange",
    },

    // OTP RESEND
    otpResend: {
        flex: 1,
    },
    otpResendButton: {
        marginTop: 20,
        // backgroundColor: "purple",
    },
    otpResendText: {
        fontFamily: "Lato-Regular",
        fontSize: 12,
        color: "#FFFFFF",
        lineHeight: 20,
        textAlign: "center",
        textDecorationLine: "underline",
    },

    //PHONE NUMBER INPUT
    otpInput: {
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
    otpLoginHeader: {
        //the prompt text
        fontFamily: "Lato-Bold",
        fontSize: 18,
        alignSelf: "center",
        color: "#FFFFFF",
        lineHeight: 25,
    },
    otpLoginLine: {
        // container holding the otp input
        alignSelf: "center",
        width: "75%",
        height: 45,
        flexDirection: "row",
        // backgroundColor: "purple",
        marginVertical: 20,
    },
});

async function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}