import { React, useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import ClubsCard from "../../components/new/userFanclub";
import { AuthContext, ColorContext } from "../../../context";

export default ViewAllClubsPage = ({ route, navigation }) => {
  const { token } = useContext(AuthContext);
  const { colors } = useContext(ColorContext);
    const [clubs, setClubs] = useState([]);

  const getClubs = () => {
    fetch("http://vf.tixar.sg:3001/api/clubs", {
      method: "GET",
      credentials: "include",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setClubs(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getClubs();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={styles.container}>
        <ScrollView>
          {/* Your FanclubCards go here */}
          {clubs.map((club) => {
            return (
              <ClubsCard
                key={club._id}
                clubId={club._id}
                onPressFunction={() => {
                  console.log("pressed");
                  //   navigation.navigate("adminClubPage", {
                  //     club: club,
                  //   });
                }}
                clubName={club.name}
                fanNumber={club.members.length}
                codesActive={club.codes.length}
                imageUrl={club.imageUrl}
              />
            );
          })}
        </ScrollView>

        {/* Next Button */}
        {/* <View style={styles.buttonContainer}>
          <NextButton
            buttonText={"Create New Fanclub"}
            onPressFunction={() => navigation.navigate("createClubPage")} //place holder destination, change to create new fanclub page
            buttonHeight={50}
          />
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 16,
  },
});
