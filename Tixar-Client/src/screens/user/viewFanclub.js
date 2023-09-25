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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StatisticBox from "../../components/verifiedFans/statisticBox";
import ConcertBox from "../../components/verifiedFans/concertBox";
import NextButton from "../../components/new/nextButton";

export default UserViewFanclub = ({ navigation }) => {
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
        <StatisticBox
          clubName={"Taylor"}
          artistIcon={require("../../assets/taylorswifticon.png")}
          artistDescription={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
          }
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
        />
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
});
