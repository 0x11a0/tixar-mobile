import { React, useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Text,
} from "react-native";
import FanclubCard from "../../components/new/fanclubCard";
import Button from "../../components/newApp/button";
import { ColorContext } from "../../../context";
import { AuthContext } from "../../../context";
import { useContext } from "react";

export default DashboardPage = ({ route, navigation }) => {
  const { colors } = useContext(ColorContext);
  const { token } = useContext(AuthContext);
  const [clubs, setClubs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [codes, setCodes] = useState([]);
  const getCodes = () => {
    fetch("http://vf.tixar.sg:3001/api/codes", {
      method: "GET",
      credentials: "include",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => setCodes(data))
      .catch((error) => console.error(error));
  };

  const getClubs = () => {
    fetch("http://vf.tixar.sg:3001/api/clubs", {
      method: "GET",
      credentials: "include",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setClubs(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCodes();
    getClubs();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Loading ...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={styles.container}>
        <ScrollView>
          {/* Your FanclubCards go here */}
          {clubs.length > 0 && clubs.map((club) => { // If there are clubs, map each club to a FanclubCard
            return (
              <FanclubCard
                key={club._id}
                onPressFunction={() => {
                  navigation.navigate("adminClubPage", {
                    clubId: club._id,
                    token: token,
                  });
                }}
                clubName={club.name}
                fanNumber={club.members.length}
                codesActive={
                  codes.filter((entry) => entry.club._id === club._id).length
                }
                imageUrl={club.imageUrl}
              />
            );
          })}
        </ScrollView>

        {/* Next Button */}
        <View style={styles.buttonContainer}>

          <Button
            buttonText={"Create New Fanclub"}
            onPressFunction={() =>
              navigation.navigate("createClubPage", { token: token })
            } 
            enableCondition={true}
          />

  
        </View>
      </View>
    </SafeAreaView>
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
