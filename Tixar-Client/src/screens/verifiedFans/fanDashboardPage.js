import { React, useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import ArtistBlock from "../../components/verifiedFans/artistBlock";
import NextButton from "../../components/new/nextButton";
import { AuthContext } from "../../../context";

export default FanDashboardPage = ({ route, navigation }) => {
  const [profiles, setProfiles] = useState([]);
  const { token } = useContext(AuthContext);
  const getProfiles = () => {
    fetch("http://vf.tixar.sg:3001/api/profiles", {
      method: "GET",
      credentials: "include",
      headers: { Authorization: `Bearer ${token}` },
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

  // useEffect(() => {
  //   // console.log("here is " + route.params.token);
  //   getProfiles();
  //   // console.log(profiles);
  // }, []);

  useEffect(() => {
    navigation.addListener("focus", () => {
      console.log("reloaded");
      getProfiles();
    });
  }, [navigation]);

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
            // console.log(profile);
            // console.log(profile.points);
            // console.log(profile.club.imageUrl);
            return (
              <ArtistBlock
                key={profile._id} // Add a unique key prop
                points={profile.points}
                clubName={profile.club.name} // Use clubName, not clubname
                artistDescription={profile.club.description}
                artistIcon={profile.club.imageUrl}
                onPressFunction={() => {
                  navigation.navigate("viewClubPage", {
                    clubName: profile.club.name,
                    artistDescription: profile.club.description,
                    key: profile._id,
                    imageUrl: profile.club.imageUrl,
                    points: profile.points,
                  });
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // list
  flatListContainer: {
    // backgroundColor: "red",
    height: "85%",
  },

  contentContainer: {
    flex: 0.97,
    backgroundColor: "#F8F9FA",
  },
});
