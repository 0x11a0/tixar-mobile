import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StatisticBox from "../../components/verifiedFans/statisticBox";
import ConcertBox from "../../components/verifiedFans/concertBox";
import NextButton from "../../components/new/nextButton";

export default ViewClubPage = ({ route, navigation }) => {
  const { clubName, artistDescription, key, token, imageUrl } = route.params;

  const handleDeletePress = () => {
    fetch(`http://vf.tixar.sg/api/profile/${key}`, {
      method: "DELETE",
      credentials: "include",
      headers: { Authorization: token },
    })
      .then((response) => response.json())
      .then((data) => {
        navigation.navigate("vfDashboardPage", { token: token });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  let image = require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png");
  if (imageUrl) {
    image = { uri: imageUrl };
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            width: "90%",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <StatisticBox
            clubName={clubName}
            artistIcon={image}
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
          
          {/* buffer */}
          <View style={{marginTop: 5}}/>

          <NextButton
            buttonText={"Redeem Fan Code Here!"}
            onPressFunction={() => {
              navigation.navigate("redemptionPage");
            }}
          />
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={handleDeletePress}
          >
            <Text style={styles.deleteButtonText}>Remove Fanclub From My List</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginVertical: 30,
  },
  deleteButtonText: {
    color: "blue",
    fontSize: 14,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
