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
import ArtistBlock from "../../components/verifiedFans/artistBlock";
import NextButton from "../../components/new/nextButton";

const Artists = [
  /* pass in 1. Artist Name
                2. Artist Description
                3. Artist Icon
                4. Points
                5. On press go to which page */
  {
    id: "1",
    clubName: "The Weeknd",
    points: 100,
    artistDescription:
      "Abel Makkonen Tesfaye (Amharic: አበል መኮነን ተስፋዬ; born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer.[2][3] He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.[4][5] His accolades include 4 Grammy Awards, 20 Billboard Music Awards, 22 Juno Awards, 6 American Music Awards, 2 MTV Video Music Awards, a Latin Grammy Award, and nominations for an Academy Award and a Primetime Emmy Award.",
    artistIcon: require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png"),
  },
  {
    id: "2",
    clubName: "2",
    points: 100,
    artistDescription:
      "Abel Makkonen Tesfaye (Amharic: አበል መኮነን ተስፋዬ; born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer.[2][3] He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.[4][5] His accolades include 4 Grammy Awards, 20 Billboard Music Awards, 22 Juno Awards, 6 American Music Awards, 2 MTV Video Music Awards, a Latin Grammy Award, and nominations for an Academy Award and a Primetime Emmy Award.",
    artistIcon: require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png"),
  },
  {
    id: "3",
    clubName: "Guy with very long name",
    points: 100,
    artistDescription:
      "Abel Makkonen Tesfaye (Amharic: አበል መኮነን ተስፋዬ; born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer.[2][3] He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.[4][5] His accolades include 4 Grammy Awards, 20 Billboard Music Awards, 22 Juno Awards, 6 American Music Awards, 2 MTV Video Music Awards, a Latin Grammy Award, and nominations for an Academy Award and a Primetime Emmy Award.",
    artistIcon: require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png"),
  },
  {
    id: "4",
    clubName: "The 4",
    points: 100,
    artistDescription:
      "Abel Makkonen Tesfaye (Amharic: አበል መኮነን ተስፋዬ; born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer.[2][3] He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.[4][5] His accolades include 4 Grammy Awards, 20 Billboard Music Awards, 22 Juno Awards, 6 American Music Awards, 2 MTV Video Music Awards, a Latin Grammy Award, and nominations for an Academy Award and a Primetime Emmy Award.",
    artistIcon: require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png"),
  },
  {
    id: "5",
    clubName: "The 5",
    points: 100,
    artistDescription:
      "Abel Makkonen Tesfaye (Amharic: አበል መኮነን ተስፋዬ; born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer.[2][3] He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.[4][5] His accolades include 4 Grammy Awards, 20 Billboard Music Awards, 22 Juno Awards, 6 American Music Awards, 2 MTV Video Music Awards, a Latin Grammy Award, and nominations for an Academy Award and a Primetime Emmy Award.",
    artistIcon: require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png"),
  },
  {
    id: "6",
    clubName: "The 6",
    points: 100,
    artistDescription:
      "Abel Makkonen Tesfaye (Amharic: አበል መኮነን ተስፋዬ; born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer.[2][3] He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.[4][5] His accolades include 4 Grammy Awards, 20 Billboard Music Awards, 22 Juno Awards, 6 American Music Awards, 2 MTV Video Music Awards, a Latin Grammy Award, and nominations for an Academy Award and a Primetime Emmy Award.",
    artistIcon: require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png"),
  },
  {
    id: "7",
    clubName: "The 7",
    points: 100,
    artistDescription:
      "Abel Makkonen Tesfaye (Amharic: አበል መኮነን ተስፋዬ; born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer.[2][3] He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.[4][5] His accolades include 4 Grammy Awards, 20 Billboard Music Awards, 22 Juno Awards, 6 American Music Awards, 2 MTV Video Music Awards, a Latin Grammy Award, and nominations for an Academy Award and a Primetime Emmy Award.",
    artistIcon: require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png"),
  },
  {
    id: "8",
    clubName: "The 8",
    points: 100,
    artistDescription:
      "Abel Makkonen Tesfaye (Amharic: አበል መኮነን ተስፋዬ; born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer.[2][3] He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.[4][5] His accolades include 4 Grammy Awards, 20 Billboard Music Awards, 22 Juno Awards, 6 American Music Awards, 2 MTV Video Music Awards, a Latin Grammy Award, and nominations for an Academy Award and a Primetime Emmy Award.",
    artistIcon: require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png"),
  },
];

//   Flatlist stuff
const Item = ({ clubName, points, artistDescription, artistIcon }) => (
  <ArtistBlock
    clubName={clubName} // Use clubName, not clubname
    points={points}
    artistDescription={artistDescription}
    artistIcon={artistIcon}
    onPressFunction={() => {
      console.log(clubName + " pressed");
      // navigation.navigate('ArtistPage', {clubName: 'The Weeknd'});  use this to add navigationability
    }}
  />
);

const renderItem = ({ item }) => (
  <Item
    clubName={item.clubName}
    points={item.points}
    artistDescription={item.artistDescription}
    artistIcon={item.artistIcon}
  />
);

export default FanDashboard = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F8F9FA",
      }}
    >
      <View style={styles.contentContainer}>
        <View style={styles.flatListContainer}>
          <FlatList
            style={styles.list}
            data={Artists}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>

        <NextButton
          buttonText={"Redeem Fan Code Here!"}
          onPressFunction={() => {
            navigation.navigate("VIEW FANCLUBS");
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
    flex: 1,
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
