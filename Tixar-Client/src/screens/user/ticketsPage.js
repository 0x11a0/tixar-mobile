import { View, StyleSheet } from "react-native";

import SearchField from "../../components/browseConcert/searchField";
import TicketCard from "../../components/userTickets/ticketCard";

import { ColorContext } from "../../../context";
import { useContext, useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { AuthContext } from "../../../context";

export default TicketsPage = ({ navigation }) => {
  const { colors } = useContext(ColorContext);
  const { token } = useContext(AuthContext);
  const [tickets, setTickets] = useState([]);

  const getAllTickets = () => {
    fetch("http://rt.tixar.sg:3000/api/ticket", {
      method: "GET",
      credentials: "include",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTickets(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    navigation.addListener("focus", () => {
      console.log("reloaded");
      getAllTickets();
    });
  }, [navigation]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      backgroundColor: colors.background,
    },

    searchContainer: {
      backgroundColor: colors.background,
      marginVertical: 20,
    },
    ticketContainer: {
      flex: 1, //grow and take up the space of the parent container
      justifyContent: "flex-start",
      flexDirection: "column",
      backgroundColor: colors.background,
    },
  });

  return (
    <View style={styles.container}>
      {/* container for search bar and filter button */}
      <View style={styles.searchContainer}>
        {/* search field imported from browseConcert components */}
        <SearchField />
      </View>

      <ScrollView>
        {/* container for the ticket cards */}
        <View style={styles.ticketContainer}>
          {tickets.map((ticket) => {
            console.log(ticket);
            console.log(ticket.type);
            console.log(ticket._id);
            const category = ticket.type;
            const id = ticket._id;

            return (
              <TicketCard
                key={id}
                concertName={"Coldplay Concert"}
                concertCategory={category}
                concertReference={`Reference No. ${id}`}
                onPress={() => {
                  navigation.navigate("generatedUserTicketPage", {
                    ticket: ticket,
                  });
                }}
              />
            );
          })}
          {/* first concert ticket*/}
          {/* <TicketCard
            concertName={"Coldplay Concert"}
            concertCategory={"Category: 1"}
            concertReference={"Reference No. 123456789"}
            onPress={() => {
              navigation.navigate("generatedUserTicketPage");
            }}
          /> */}

          {/* second concert ticket*/}
          {/* <TicketCard
            concertName={"Coldplay Concert"}
            concertCategory={"Category: 1"}
            concertReference={"Reference No. 123456789"}
            onPress={() => {
              navigation.navigate("generatedUserTicketPage");
            }}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
};
