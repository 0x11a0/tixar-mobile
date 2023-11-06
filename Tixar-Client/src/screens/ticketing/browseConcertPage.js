import { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { ColorContext } from "../../../context";
import { StatusBar } from "expo-status-bar";

import SearchField from "../../components/browseConcert/searchField";
import ConcertBlock from "../../components/viewConcert/concertBlock";
import { AuthContext } from "../../../context";

export default BrowseConcertPage = ({ route, navigation }) => {
  const { colors } = useContext(ColorContext);
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

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View
        style={{
          backgroundColor: colors.background,
          paddingBottom: 13,
        }}
      >
        <SearchField searchText={searchText} setSearchText={setSearchText} />
      </View>

      <View style={[styles.contentContainer, {backgroundColor: colors.background}]}>
        <ScrollView style={{backgroundColor: colors.background}}>
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

            return (
              <ConcertBlock
                key={concert._id}
                concertName={concert.name}
                venueName={venueName}
                startDate={formattedStartDate}
                endDate={formattedEndDate}
                artistName={concert.artistName}
                artistDescription={"Lorem ipsum dolor sit amet consectetur"}
                artistImage={concert.artistImage}
                imageBackground={concert.concertImage}
                onPressFunction={() => {
                  if (concert._id) {
                    console.log("Switching to concert page, \n" + concert._id);
                    navigation.navigate("viewConcertPage", {
                      concert: concert,
                    });
                  } else {
                    console.log("concert._id is undefined");
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
    flex: 1,
    width: "100%",
  },
  rowBox: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },
});
