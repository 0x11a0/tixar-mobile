import { React, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default EditUserProfile = () => {
  const [firstNameField, setfirstNameField] = useState("");
  const handleFirstName = (text) => {
    setfirstNameField(text);
  };

  const [lastNameField, setlastNameField] = useState("");
  const handleLastName = (text) => {
    setlastNameField(text);
  };

  const [emailField, setemailField] = useState("");
  const handleEmail = (text) => {
    setemailField(text);
  };
  return (
    <SafeAreaView style={styles.container}>
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
          source={require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png")}
          style={styles.profileImage}
        />
        <View style={styles.fieldBox}>
          <TextInput
            style={styles.fieldText}
            onChangeText={handleFirstName}
            value={firstNameField}
            placeholder="First Name"
          />
        </View>
        <View style={styles.fieldBox}>
          <TextInput
            style={styles.fieldText}
            onChangeText={handleLastName}
            value={lastNameField}
            placeholder="Last Name"
          />
        </View>
        <View style={styles.fieldBox}>
          <TextInput
            style={styles.fieldText}
            onChangeText={handleEmail}
            value={emailField}
            placeholder="Email"
          />
        </View>
        <ResetButton
          firstNameField={firstNameField}
          lastNameField={lastNameField}
          emailField={emailField}
        />
      </View>
      <Text style={styles.footerText}>TIXAR</Text>
    </SafeAreaView>
  );
};

const ResetButton = ({ firstNameField, lastNameField, emailField }) => {
  let isValid =
    firstNameField !== "" && lastNameField !== "" && emailField !== "";
  return (
    <LinearGradient
      colors={isValid ? ["#FF0080", "#7928CA"] : ["#E8ECEF", "#E8ECEF"]}
      style={styles.resetBackgroundEnabled}
      start={[0, 0]}
      end={[1, 0]}
    >
      <Pressable
        style={styles.resetButton}
        onPress={() => {
          console.log({ firstNameField, lastNameField, emailField });
          if (
            firstNameField === "" ||
            lastNameField === "" ||
            emailField === ""
          ) {
            console.log("Not all fields entered");
          }
        }}
      >
        <Text
          style={isValid ? styles.resetTextEnabled : styles.resetTextDisabled}
        >
          Confirm Details
        </Text>
      </Pressable>
    </LinearGradient>
  );
};
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
    height: 240,
    borderRadius: 22,
    resizeMode: "cover",
    position: "absolute",
  },

  profileImage: {
    flex: 0.8,
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginTop: 8,
    marginBottom: 20,
  },

  translucentBox: {
    height: "75%",
    width: "85%",
    position: "absolute",
    top: 130,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 15,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "center",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Lato-Bold",
    color: "#394051",
    marginTop: 24,
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

  fieldBox: {
    height: 56,
    width: "86%",
    borderRadius: 10,
    borderColor: "#D2D6DA",
    borderWidth: 1,
    justifyContent: "center",
    marginTop: 26,
  },
  fieldText: {
    left: "5%",
    fontSize: 18,
    fontFamily: "Lato-Regular",
    color: "#8F8F8F",
  },

  resetButton: {
    width: "86%",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },

  resetBackgroundEnabled: {
    marginTop: 55,
    borderRadius: 8,
    width: "86%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  resetBackgroundDisabled: {
    marginTop: 55,
    borderRadius: 8,
    width: "86%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8ECEF",
  },
  resetTextEnabled: {
    fontSize: 15,
    fontFamily: "Lato-Bold",
    color: "white",
  },
  resetTextDisabled: {
    fontSize: 15,
    fontFamily: "Lato-Bold",
    color: "#252F40",
  },
});
