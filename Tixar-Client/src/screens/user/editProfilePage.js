import { React, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
  FlatList,
  TouchableOpacity,
  Button,
  onPressLearnMore,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext } from "../../../context";

export default EditProfilePage = ({ route, navigation }) => {
  const [firstNameField, setFirstNameField] = useState("");
  const handleFirstName = (text) => {
    setFirstNameField(text);
  };

  const { token } = useContext(AuthContext);
  const [lastNameField, setLastNameField] = useState("");
  const handleLastName = (text) => {
    setLastNameField(text);
  };

  let { firstName, lastName, phoneNumber, email } = route.params;

  const [emailField, setEmailField] = useState("");
  const handleEmail = (text) => {
    setEmailField(text);
  };

  const handleUpdate = () => {
    fetch("http://rt.tixar.sg:3000/api/user", {
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
      if (response.ok) {
        console.log("Update successful");
      } else {
        console.log("Update unsuccessful");
      }
    });
  };

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
        <View style={styles.fieldBox}>
          <TextInput
            style={styles.fieldText}
            onChangeText={handleFirstName}
            value={firstNameField}
            placeholder="First name"
          />
        </View>
        <View style={styles.fieldBox}>
          <TextInput
            style={styles.fieldText}
            onChangeText={handleLastName}
            value={lastNameField}
            placeholder="Last name"
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
          isValid={
            firstNameField !== "" || lastNameField !== "" || emailField !== ""
          }
          onPressFunction={() => {
            handleUpdate();
            navigation.pop();
          }}
        />
      </View>
      <Text style={styles.footerText}>TIXAR</Text>
    </KeyboardAwareScrollView>
  );
};

const ResetButton = ({ isValid, onPressFunction }) => {
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
          onPressFunction();
        }}
      >
        <Text
          style={isValid ? styles.resetTextEnabled : styles.resetTextDisabled}
        >
          Update Profile
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
    marginTop: 10,
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
