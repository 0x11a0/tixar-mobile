import { React, useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Text,
  View,
  Animated,
} from "react-native";
import FanCard from "../../components/new/manageFansCard";
import ConfirmAlert from "../../components/verifiedFans/confirmAlert";
import { AuthContext } from "../../../context";
import { useContext } from "react";

export default ManageFansPage = ({ route, navigation }) => {
  const { token } = useContext(AuthContext);

  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMembers = () => {
    fetch("http://vf.tixar.sg/api/club/" + route.params.clubId, {
      method: "GET",
      credentials: "include",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // console.log(data.members);
        setMembers(data.members);
      })
      .catch((error) => {
        console.error(error);
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getMembers();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#F2F2F2",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Loading ...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Your FanCards go here */}
      <ScrollView style={{ paddingTop: 5 }}>
        {members.map((member, index) => {
          return (
            <View key={member._id}>
              <FanCard
                fanName={member.fanId.name}
                fanPoints={member.points}
                onPressFunction={() => {
                  ConfirmAlert({
                    title: "Delete profile",
                    message: "Action cannot be undone",
                    positiveFunction: () => {
                      fetch("http://vf.tixar.sg/api/profile/" + member._id, {
                        method: "DELETE",
                        credentials: "include",
                        headers: { Authorization: route.params.token },
                      })
                        .then(() => {
                          members.splice(index, 1);
                          console.log("here >" + members);
                        })
                        .catch((error) => {
                          console.error(error);
                        });
                    },
                  });
                  //console.log('button pressed');
                }}
              />
              <View style={{ height: 10 }} />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
});
