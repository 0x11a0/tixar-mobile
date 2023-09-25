import { React, useState, useEffect } from "react";
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
import ArtistBlock from "../../components/verifiedFans/artistBlock";
import NextButton from "../../components/new/nextButton";

export default FanDashboard = ({ route, navigation }) => {
  const [profiles, setProfiles] = useState([]);

  const getProfiles = () => {
    fetch("http://vf.tixar.sg/api/profiles", {
      method: "GET",
      credentials: "include",
      headers: { Authorization: route.params.token },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProfiles(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    console.log("here is " + route.params.token);
    getProfiles();
    console.log(profiles);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F8F9FA",
      }}
    >
      <View style={styles.contentContainer}>
        <ScrollView>
          {/* Your FanclubCards go here */}
          {profiles.map((profile) => {
            console.log(profile);
            console.log(profile.points);
            return (
              <ArtistBlock
                key={profile._id} // Add a unique key prop
                points={profile.points}
                clubName={profile.club.name} // Use clubName, not clubname
                artistDescription={profile.club.description}
                artistIcon={profile.imageUrl}
                onPressFunction={() => {
                  navigation.navigate("viewFanclubPage", {
                    clubName: profile.club.name,
                    artistDescription: profile.club.description,
                    key: profile._id,
                    token: route.params.token,
                  });
                  // navigation.navigate('ArtistPage', {clubName: 'The Weeknd'});  use this to add navigationability
                }}
                // artistIcon: require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png"),
              />
            );
          })}
        </ScrollView>

        <NextButton
          buttonText={"Redeem Fan Code Here!"}
          onPressFunction={() => {
            navigation.navigate("redemptionPage");
          }}
          style={{ marginTop: -20 }} // Adjust the marginTop value as needed
        />
      </View>

      <View></View>
      <Text style={styles.footerText}>TIXAR</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // redeem button
  redeemBackground: {
    width: "86%",
    height: 50,
    borderRadius: 8,
    marginTop: 15,
    alignSelf: "center",
  },
  redeemButton: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  redeemText: {
    fontSize: 15,
    fontFamily: "Lato-Bold",
    color: "#3A416F",
  },
  // list
  list: {
    width: "90%",
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 15,
  },

  flatListContainer: {
    // backgroundColor: "red",
    height: "89%",
  },

  contentContainer: {
    flex: 0.97,
    backgroundColor: "#F8F9FA",
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
