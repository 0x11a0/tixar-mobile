import { React, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext, ColorContext } from "../../../context";
import Button from "../../components/newApp/button";

export default EditProfilePage = ({ route, navigation }) => {
  const { colors } = useContext(ColorContext);

  const styles = StyleSheet.create({
    headerBox: {
      position: "relative",
      flex: 0.5,
      alignItems: "center",
      justifyContent: "flex-start",
      zIndex: 1,
    },
    title: {
      fontSize: 35,
      fontFamily: "Lato-Bold",
      color: "white",
      marginTop: 40,
    },
    headerImage: {
      marginTop: 30,
      width: "95%",
      height: 280,
      borderRadius: 22,
      resizeMode: "cover",
      position: "absolute",
    },

    profileImage: {
      flex: 0.5,
      width: 100,
      height: 100,
      resizeMode: "cover",
      marginTop: 8,
    },

    translucentBox: {
      height: "75%",
      width: "85%",
      position: "absolute",
      top: 130,
      backgroundColor: colors.primary,
      borderRadius: 15,
      zIndex: 2,
      alignItems: "center",
      justifyContent: "flex-start",
      alignSelf: "center",
    },
    subtitle: {
      fontSize: 20,
      fontFamily: "Lato-Bold",
      color: colors.textPrimary,
      marginTop: 24,
    },

    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    footerText: {
      bottom: 15,
      fontFamily: "Lato-Regular",
      fontSize: 12,
      position: "absolute",
      color: colors.textDisabled,
    },

    fieldText: {
      left: "5%",
      fontSize: 18,
      fontFamily: "Lato-Regular",
      color: "#8F8F8F",
    },

    textBox: {
      backgroundColor: colors.secondary,
      borderRadius: 10,
      padding: 10,
      marginVertical: 10,
      width: "86%",
    },
    buttonContainer: {
      marginTop: 20,
      alignItems: "center",
      justifyContent: "center",
      // backgroundColor: colors.accent,
    },
  });

  const [firstNameField, setFirstNameField] = useState("");
  const handleFirstName = (text) => {
    setFirstNameField(text);
  };

  const { token } = useContext(AuthContext);
  const [lastNameField, setLastNameField] = useState("");
  const handleLastName = (text) => {
    setLastNameField(text);
  };

  const validateEmail = (email) => {
    // Regular expression pattern to validate email
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [emailField, setEmail] = useState("");
  const handleEmail = (text) => {
    setEmail(text);
    setIsValidEmail(validateEmail(text));
  };

  let { firstName, lastName, phoneNumber, email } = route.params;

  const handleUpdate = () => {
    if (!validateEmail(emailField)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    // Show a loading indicator
    setIsUpdating(true);

    fetch("http://rt.tixar.sg/api/user", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstName: firstNameField === "" ? firstName : firstNameField,
        lastName: lastNameField === "" ? lastName : lastNameField,
        email: emailField === "" ? email : emailField,
      }),
    }).then((response) => {
      setIsUpdating(false);
      if (response.ok) {
        console.log("Update successful");
        navigation.navigate("userProfilePage");
      } else {
        console.log("Update unsuccessful");
      }
    });
  };

  const [isUpdating, setIsUpdating] = useState(false); // Add a state variable to track the update process

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      extraScrollHeight={100}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.headerBox}>
        <Image
          source={require("../../assets/soft-ui-pro-react-native-v1.1.1/background3x.png")}
          style={styles.headerImage}
        />
        <Text style={styles.title}>TIXAR</Text>
      </View>

      <View style={styles.translucentBox}>
        <Text style={styles.subtitle}>Edit Profile</Text>
        <Image
          source={require("../../assets/profilepicture.png")}
          style={styles.profileImage}
        />
        <View style={styles.textBox}>
          <TextInput
            style={styles.fieldText}
            onChangeText={handleFirstName}
            value={firstNameField}
            placeholder="First name"
            placeholderTextColor={colors.textDisabled}
            color={colors.textPrimary}
          />
        </View>
        <View style={styles.textBox}>
          <TextInput
            style={styles.fieldText}
            onChangeText={handleLastName}
            value={lastNameField}
            placeholder="Last name"
            placeholderTextColor={colors.textDisabled}
            color={colors.textPrimary}
          />
        </View>
        <View style={styles.textBox}>
          <TextInput
            style={styles.fieldText}
            onChangeText={handleEmail}
            value={emailField}
            placeholder="Email"
            placeholderTextColor={colors.textDisabled}
            color={colors.textPrimary}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            buttonText={isUpdating ? "UPDATING..." : "UPDATE"}
            enableCondition={
              firstNameField !== "" || lastNameField !== "" || emailField !== ""
            }
            onPressFunction={() => {
              handleUpdate();
            }}
          />
        </View>
        <Text style={styles.footerText}>TIXAR</Text>
      </View>
    </KeyboardAwareScrollView>
  );
};
