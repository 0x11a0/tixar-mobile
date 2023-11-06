import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  SafeAreaViewBase,
  SafeAreaView,
} from "react-native";

import CardWallet from "../../components/eWallet/cardWallet";
import Card from "../../components/accountSettings/card";
import { AuthContext, ColorContext } from "../../../context";
import { useContext, useState, useEffect } from "react";

export default EWalletPage = ({ route, navigation }) => {
  const { token } = useContext(AuthContext);
  const { colors } = useContext(ColorContext);
  let [user, setUser] = useState({});

  useEffect(() => {
    navigation.addListener("focus", () => {
      console.log("reloaded");
      getUser();
    });
  }, [navigation]);

  const getUser = () => {
    console.log("getting user profile");
    fetch("http://rt.tixar.sg:3000/api/user", {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Cache-Control": "no-cache",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Define an array of transaction items, change as needed for integration team!!
  const transactionHistory = [
    { title: "Taylor Swift Tickets", amount: "-$368" },
    { title: "Dean Lewis Tickets", amount: "-$128" },
    // Add more transactions as needed
  ];

  const styles = StyleSheet.create({
    eCardContainer: {
      marginTop: 15,
      flex: 1.5,
      // backgroundColor: "yellow",
    },
    transactionContainer: {
      flex: 1,
      // backgroundColor:'purple',
    },
    container: {
      flex: 3,
      // backgroundColor:'orange',
    },
    cardRow: {
      flexDirection: "row",
      alignItems: "center",
      margin: 10,
      justifyContent: "space-between",
    },
    cardRightIcon: {
      width: 10,
      height: 17.22,
      resizeMode: "contain",
      tintColor: colors.textPrimary,
    },
    cardText: {
      color: colors.textPrimary,
    },
    cardTitle: {
      fontSize: 18,
      fontFamily: "Lato-Bold",
      color: colors.textPrimary,
      padding: 10,
    },
    scrollView: {
      height: 200,
    },
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        flexDirection: "column",
      }}
    >
      <View style={styles.eCardContainer}>
        <CardWallet
          firstName={user.firstName}
          lastName={user.lastName}
          balance={user.eWalletBalance}
        />
      </View>
      <View
        style={{
          flex: 3,
          flexDirection: "column",
        }}
      >
        <View style={styles.transactionContainer}>
          <Card>
            {/* Top Up link */}
            <View style={styles.cardRow}>
              <Text style={styles.cardText}>Top Up</Text>
              <Pressable
                style={{
                  width: 20,
                  alignItems: "flex-end",
                }}
                onPress={() => {
                  navigation.navigate("eWalletTopupPage", { card: user.card, eWalletBalance: user.eWalletBalance });
                  console.log("Top Up");
                }}
              >
                <Image
                  source={require("../../assets/soft-ui-pro-react-native-v1.1.1/arrow3x.png")}
                  style={styles.cardRightIcon}
                />
              </Pressable>
            </View>

            {/* Transfer to bank link */}
            <View style={styles.cardRow}>
              <Text style={styles.cardText}>Transfer to Bank</Text>
              <Pressable
                style={{
                  width: 20,
                  alignItems: "flex-end",
                }}
                onPress={() => {
                  // Navigate to the relevant screen when the right arrow is pressed
                  console.log("Transfer to Bank");
                  navigation.navigate("eWalletWithdrawPage", { card: user.card, eWalletBalance: user.eWalletBalance });
                }}
              >
                <Image
                  source={require("../../assets/soft-ui-pro-react-native-v1.1.1/arrow3x.png")}
                  style={styles.cardRightIcon}
                />
              </Pressable>
            </View>
          </Card>
        </View>

        <View style={styles.transactionContainer}>
          <Card>
            {/* Top Up link */}
            <View style={styles.cardRow}>
              <Text style={styles.cardText}>Add/Update Credit Card</Text>
              <Pressable
                style={{
                  width: 20,
                  alignItems: "flex-end",
                }}
                onPress={() => {
                  navigation.navigate("creditCardPage", { card: user.card });
                  console.log("Top Up");
                }}
              >
                <Image
                  source={require("../../assets/soft-ui-pro-react-native-v1.1.1/arrow3x.png")}
                  style={styles.cardRightIcon}
                />
              </Pressable>
            </View>
          </Card>
        </View>


        <View style={styles.container}>
          <Card>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.cardTitle}>History</Text>
            </View>
            {/* Scrollable transaction history */}
            <ScrollView style={styles.scrollView}>
              {transactionHistory.map((transaction, index) => (
                <View style={styles.cardRow} key={index}>
                  <Text style={styles.cardText}>{transaction.title}</Text>
                  <Text style={styles.cardText}>{transaction.amount}</Text>
                </View>
              ))}
            </ScrollView>
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
};
