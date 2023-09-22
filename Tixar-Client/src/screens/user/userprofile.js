import { React, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

const accessToken = "<Token>";

const headers = {
  Authorization: `Bearer ${accessToken}`,
  "Content-Type": "application/json", // You can include other headers as needed
  "Cache-Control": "no-cache",
};

export default UserProfile = ({ route, navigation }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    // Define the URL for your GET request
    const apiUrl = "http://rt.tixar.sg/api/user";

    // Make the GET request with headers
    axios
      .get(apiUrl, { headers })
      .then(function (response) {
        // Handle success
        console.log("Data:", response.data);
        const firstName = response.data.firstName;
        const lastName = response.data.lastName;
        const fullName = firstName + " " + lastName;
        const phoneNumber = response.data.phone;
        setFullName(fullName); // Update state with full name
        setPhone(phoneNumber); // Update state with phone number
      })
      .catch(function (error) {
        // Handle error
        console.error("Error:", error);
      });
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

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
        <Text style={styles.subtitle}>Profile</Text>
        <Image
          source={require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png")}
          style={styles.profileImage}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.header}>Name</Text>
          <Text style={styles.label}>{fullName}</Text>

          <Text style={styles.header}>Phone Number</Text>
          <Text style={styles.label}>{phone}</Text>

          <Text style={styles.header}>Email</Text>
          <Text style={styles.label}>charles@gmail.com</Text>
        </View>
        <LinearGradient
          colors={["#FF0080", "#7928CA"]}
          style={styles.buttonBackground}
          start={[0, 0]}
          end={[1, 0]}
        >
          <Pressable
            style={styles.editButton}
            onPress={() => navigation.navigate("Edit Profile")}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </Pressable>
        </LinearGradient>
      </View>
      <Text style={styles.footerText}>TIXAR</Text>
    </SafeAreaView>
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

  label: {
    fontSize: 17,
    fontFamily: "Lato-Regular",
    left: 0,
    top: "auto",
    zIndex: 999,
    lineHeight: 17,
    color: "#394051",
    marginBottom: "5%",
  },

  infoContainer: {
    width: "90%", // Adjust the width as needed
    alignItems: "flex-start", // Align text to the left
  },

  header: {
    fontSize: 20,
    fontFamily: "Lato-Bold",
    color: "#394051",
    marginTop: "3%",
    marginBottom: "5%",
  },

  title: {
    fontSize: 35,
    fontFamily: "Lato-Bold",
    color: "white",
    marginTop: 40,
    textAlign: "left",
    alignItems: "flex-start",
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
    flex: 0.9,
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

  editButton: {
    width: "86%",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonBackground: {
    marginTop: 55,
    marginBottom: 20,
    borderRadius: 8,
    width: "86%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 15,
    fontFamily: "Lato-Bold",
    color: "white",
  },
});
