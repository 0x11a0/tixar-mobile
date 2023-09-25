import { React, useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  SafeAreaViewBase,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StatisticBox from "../../components/verifiedFans/statisticBox";
import ConcertBox from "../../components/verifiedFans/concertBox";
import NextButton from "../../components/new/nextButton";

export default UserViewFanclub = ({ route, navigation }) => {
  const { clubName, artistDescription, key, token } = route.params;

  const handleDeletePress = () => {
    console.log(key);
    fetch(`http://vf.tixar.sg/api/club/${key}`, {
      method: "DELETE",
      credentials: "include",
      headers: { Authorization: token },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("SUCCESSFUL");
        console.log(data);
        navigation.navigate("fanDashboardPage", { token: token });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(clubName);
  console.log(artistDescription);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F2F2F2",
      }}
    >
      <View
        style={{
          flex: 1,
          width: "90%",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        {/* <TouchableOpacity
          style={styles.deleteButton}
          onPress={console.log("pressed")}
        >
          <Image
            source={require("../../assets/soft-ui-pro-react-native-v1.1.1/apple3x.png")} // Replace with your trash image
            style={styles.trashIcon}
          />
        </TouchableOpacity> */}

        <StatisticBox
          clubName={clubName}
          artistIcon={require("../../assets/taylorswifticon.png")}
          artistDescription={artistDescription}
          points={"1002"}
        />

        <ConcertBox
          clubName={"Taylor"}
          monthlyInteractions={40123}
          newFans={16452}
          totalFans={131239543}
          artistIcon={require("../../assets/nationalstadiumicon.png")}
        />

        <NextButton
          buttonText={"Redeem Fan Code Here!"}
          onPressFunction={() => {
            navigation.navigate("redemptionPage");
          }}
          style={(marginTop = 50)}
        />
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeletePress}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.footerText}>TIXAR</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // generate button
  generateBackground: {
    width: "86%",
    height: 50,
    borderRadius: 8,
    marginTop: 15,
    alignSelf: "center",
  },
  generateButton: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  generateText: {
    fontSize: 15,
    fontFamily: "Lato-Bold",
    color: "#3A416F",
  },

  // footer
  footerText: {
    bottom: 15,
    fontFamily: "Lato-Regular",
    fontSize: 12,
    position: "absolute",
    alignSelf: "center",
  },
  deleteButton: {
    paddingVertical: 2,
    borderRadius: 5,
    marginTop: 20,
  },
  deleteButtonText: {
    color: "blue",
    fontSize: 14,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
