import { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { ColorContext } from "../../../context";
import { StatusBar } from "expo-status-bar";

import SearchField from "../../components/browseConcert/searchField";
import FilterButton from "../../components/browseConcert/filterButton";
import ConcertBlock from "../../components/viewConcert/concertBlock";
import { AuthContext } from "../../../context";

export default BrowseConcertPage = ({ route, navigation }) => {
  const { colors } = useContext(ColorContext);
  const [isNearbyFocused, setIsNearbyFocused] = useState(true);
  const [isTrendingFocused, setIsTrendingFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const artistIcon = require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png");
  const imageBackground = require("../../assets/soft-ui-pro-react-native-v1.1.1/background3x.png");
  const [concerts, setConcerts] = useState([]);
  const { token } = useContext(AuthContext);

  const getAllConcerts = () => {
    fetch("http://rt.tixar.sg:3000/api/event", {
      method: "GET",
      credentials: "include",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setConcerts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    navigation.addListener("focus", () => {
      console.log("reloaded");
      getAllConcerts();
    });
  }, [navigation]);

  const handleNearbyPress = () => {
    setIsNearbyFocused(true);
    setIsTrendingFocused(false);
    console.log("display nearby");
  };

  const handleTrendingPress = () => {
    setIsNearbyFocused(false);
    setIsTrendingFocused(true);
    console.log("display trending");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: colors.background,
          paddingBottom: 13,
        }}
      >
        <SearchField searchText={searchText} setSearchText={setSearchText} />

        <View style={{ height: 16 }} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 5,
            borderTopWidth: 0.5,
            borderColor: colors.textPrimary,
            paddingTop: 10,
          }}
        >

          {/* Nearby button */}
          <View style={styles.rowBox}>
            <FilterButton
              buttonText={"Nearby"}
              iconName="enviromento"
              isFocused={isNearbyFocused}
              onPressFunction={handleNearbyPress}
              isLeft={true}
            />
          </View>

          {/* Trending button */}
          <View style={styles.rowBox}>
            <FilterButton
              buttonText={"Trending"}
              iconName="linechart"
              isFocused={isTrendingFocused}
              onPressFunction={handleTrendingPress}
              isLeft={false}
            />
          </View>
        </View>
      </View>
      {/* <ScrollView
        style={[styles.scrollView, { backgroundColor: colors.background }]}
      > */}

      <View style={styles.contentContainer}>
        <ScrollView>
          {/* Your FanclubCards go here */}
          {concerts.map((concert) => {
            //retrieve session information from each concert
            const session = concert.sessions[0];
            const venueName = session.venue;
            const startDate = session.start;
            const endDate = session.end;

            //function to format dates
            function formatDate(dateString) {
              const dateObject = new Date(dateString);
              const day = dateObject.getUTCDate();
              const month = dateObject.toLocaleString("default", {
                month: "long",
              });
              const year = dateObject.getUTCFullYear();
              return `${day} ${month} ${year}`;
            }

            const formattedStartDate = formatDate(startDate);
            const formattedEndDate = formatDate(endDate);

            console.log("Start Date: " + formattedStartDate);
            console.log("End Date: " + formattedEndDate);

            return (
              <ConcertBlock
                key={concert._id}
                concertName={concert.name}
                venueName={venueName}
                startDate={formattedStartDate}
                endDate={endDate}
                artistName={concert.artistName}
                artistDescription={"Lorem ipsum dolor sit amet consectetur"}
                artistIcon={artistIcon}
                imageBackground={imageBackground}
                onPressFunction={() => {
                  if (concert._id) {
                    console.log("Switching to concert page, \n" + concert._id);
                    navigation.navigate("viewConcertPage", {
                      concert: concert,
                    });
                  } else {
                    console.log('concert._id is undefined');
                  }
                }}
              />
            );
          })}
        </ScrollView>
      </View>

      {/*      
      </ScrollView> */}
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  contentContainer: {
    flex: 0.97,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#F8F9FA",
  },
  scrollView: {
    paddingHorizontal: 15,
  },
  rowBox: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },
});
