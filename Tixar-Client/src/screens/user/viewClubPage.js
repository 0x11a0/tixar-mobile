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
<<<<<<< HEAD
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
=======
>>>>>>> c44471809e8f23803d48a7a823da9984706e5551

  const { clubName, artistDescription, key, imageUrl, points } = route.params;
  const { token } = useContext(AuthContext);
  const { colors } = useContext(ColorContext);

  const handleDeletePress = () => {
    fetch(`http://vf.tixar.sg:3001/api/profile/${key}`, {
      method: "DELETE",
      credentials: "include",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => navigation.pop())
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(clubName);
  console.log(artistDescription);
  console.log(imageUrl);

  let image = require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png");
  if (imageUrl) {
    image = { uri: imageUrl };
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ backgroundColor: colors.background }}>
        <View
<<<<<<< HEAD
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

        <NextButton
        buttonText={"Redeem Fan Code Here!"}
        onPressFunction={() => {
            navigation.navigate("redemptionPage");
        }}
        style={(marginTop = 50)}
        />
        {profileId === null && <Pressable
        style={styles.deleteButton}
        onPress={handleAddPress}
        >
        <Text style={styles.deleteButtonText}>Join</Text>
        </Pressable> }
        
        {profileId !== null &&  <Pressable
        style={styles.deleteButton}
        onPress={handleDeletePress}
        >
        <Text style={styles.deleteButtonText}>Delete</Text>
        </Pressable> }
        </View>
=======
          style={{
            flex: 1,
            width: "90%",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <StatisticBox
            clubName={clubName}
            artistIcon={image}
            artistDescription={artistDescription}
            points={points}
          />
>>>>>>> c44471809e8f23803d48a7a823da9984706e5551

          <ConcertBox
            clubName={"Taylor"}
            monthlyInteractions={40123}
            newFans={16452}
            totalFans={131239543}
            artistIcon={require("../../assets/nationalstadiumicon.png")}
          />

          <View style={styles.buttonContainer}>
            <Button
              buttonText={"Reedem Fan Code Here!"}
              onPressFunction={() => {
                navigation.navigate("redemptionPage");
              }}
              enableCondition={true}
            />
          </View>

          {points !== null && (
            <Pressable style={styles.deleteButton} onPress={handleDeletePress}>
              <Text style={styles.deleteButtonText}>Delete From My Clubs</Text>
            </Pressable>
          )}

          <View>
            <Text style={[styles.footerText, { color: colors.textSecondary }]}>
              TIXAR
            </Text>
          </View>
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
