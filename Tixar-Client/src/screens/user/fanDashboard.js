import { React, useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
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
        // console.log(data);
        setProfiles(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // console.log("here is " + route.params.token);
    getProfiles();
    // console.log(profiles);
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
                  navigation.navigate("viewFanclubPage", {
                    clubName: profile.club.name,
                    artistDescription: profile.club.description,
                    key: profile._id,
                    token: route.params.token,
                    imageUrl: profile.club.imageUrl,
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
