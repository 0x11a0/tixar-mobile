import React, { useState, useContext } from "react";
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
import Button from "../../components/newApp/button";
import { AuthContext, ColorContext } from "../../../context";

export default ViewClubPage = ({ route, navigation }) => {
    const { clubName, artistDescription, clubId, profileId, imageUrl, points } = route.params;
    const { token } = useContext(AuthContext);
    const { colors } = useContext(ColorContext);
    
    const handleDeletePress = () => {
        fetch(`http://vf.tixar.sg:3001/api/profile/${profileId}`, {
            method: "DELETE",
            credentials: "include",
            headers: { Authorization: `Bearer ${token}` },
        }).then(response => {
            console.log(response.json());
            console.log("deletes here");
            navigation.pop();
            })
            .catch((error) => {
                console.error(error);
            });
    };


    const handleAddPress = () => {
        const requestBody = {
            // Add your data here
            mode: "raw",
            raw: "",
        };
        fetch(`http://vf.tixar.sg:3001/api/club/${clubId}/join`, {
            method: "POST",
            credentials: "include",
            headers: { Authorization: `Bearer ${token}` },
            body: JSON.stringify(requestBody),
        })
            .then(() => {
                navigation.pop();
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
    <ScrollView style={{backgroundColor: colors.background}}
      contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ backgroundColor: colors.background }}>
        <View
        style={{ flex: 1,
                 width: "90%",
                 alignItems: "center",
                 alignSelf: "center",
        }} >

        <StatisticBox
        clubName={clubName}
        artistIcon={image}
        artistDescription={artistDescription}
        points={points}
        />

        <ConcertBox
        clubName={"Taylor"}
        monthlyInteractions={40123}
        newFans={16452}
        totalFans={131239543}
        artistIcon={require("../../assets/nationalstadiumicon.png")}
        />


      {profileId === null && 
          <View style={{width: '50%', overflow: 'hidden', borderRadius: 15}}>
          <Button
          enableCondition={true}
          buttonText={"Join club!"}
          onPressFunction={() => {
              handleAddPress();
          }} />
          </View>
      }

      {profileId !== null && <NextButton
          buttonText={"Redeem Fan Code Here!"}
          onPressFunction={() => {
              navigation.navigate("redemptionPage");
          }} /> }

      {profileId !== null && <View style={{height: 15}}/> }


      {profileId !== null &&  
              <View style={{width: '50%', overflow: 'hidden', borderRadius: 15}}>
              <Button
          enableCondition={true}
          buttonText={"Quit club"}
          onPressFunction={() => {
              handleDeletePress();
          }} />
              </View>
      }

      </View>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
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

  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  deleteButton: {
    borderRadius: 5,
    marginVertical: 20,
    // backgroundColor: "red",
  },
  deleteButtonText: {
    color: "lightblue",
    fontSize: 14,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  footerText: {
    fontFamily: "Lato-Regular",
    fontSize: 12,
    marginBottom: 20,
  },
});
