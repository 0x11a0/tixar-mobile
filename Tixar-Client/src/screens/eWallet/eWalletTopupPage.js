import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  SafeAreaViewBase,
  SafeAreaView,
  Alert,
} from "react-native";

import { AuthContext, ColorContext } from "../../../context";
import { useContext, useState, useEffect } from "react";
import Button from "../../components/newApp/button";

export default EWalletTopupPage = ({ route, navigation }) => {
  const { token } = useContext(AuthContext);
  const { colors } = useContext(ColorContext);
  const [cvv, setCvv] = useState("");
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      flexDirection: "column",
      alignItems: "center",
    },

    textContainer: {
      backgroundColor: colors.primary,
      padding: 15,
      borderRadius: 10,
      marginTop: 10,
      width: "90%",
    },

    inputContainer: {
      backgroundColor: colors.primary,
      padding: 20,
      borderRadius: 10,
      marginVertical: 10,
      width: "90%",
    },
    text: {
      color: colors.textPrimary,
      fontFamily: "Lato-Regular",
      fontSize: 16,
    },
    textBox: {
      backgroundColor: colors.secondary,
      borderRadius: 10,
      padding: 10,
      marginVertical: 10,
    },
    title: {
      color: colors.textPrimary,
      fontFamily: "Lato-Bold",
      fontSize: 20,
      marginBottom: 20,
    },
  });

  const card = route.params.card;
  const eWalletBalance = route.params.eWalletBalance;

  const handleValue = (text) => {
    setValue(text);
    setValid(text.length > 0 && cvv.length === 3);
  };

  const handleCvv = (text) => {
    setCvv(text);
    setValid(value.length > 0 && text.length === 3);
  };

  const topUp = () => {
    console.log("attempting to top up ewallet");
    const endPoint = "http://rt.tixar.sg/api/transaction/topUpEWallet";
    const payload = {
      type: "eWalletTopUp",
      card: card,
      value: value,
    };

    fetch(endPoint, {
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        Alert.alert(
          "Top up successful",
          "$" + value + " has been added to your eWallet balance"
        );
        navigation.pop();
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Top up failed", "Please try again");
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>E Wallet Balance: ${eWalletBalance}</Text>

        <View style={{ height: 20 }}></View>

        {Object.keys(card).length === 0 ? (
          <Text style={styles.text}>
            You do not have a card linked to your account, please add a card to
            top up your eWallet !
          </Text>
        ) : (
          <View>
            {/* Display card details */}
            <Text style={styles.text}>Card Name: {card.cardName}</Text>
            <Text style={styles.text}>
              Card Number: {"**** ".repeat(3) + card.cardNumber.slice(-4)}
            </Text>
            <Text style={styles.text}>
              Expiry Date: {card.cardExpiryMonth}/{card.cardExpiryYear}
            </Text>
            {/* Add more details as needed */}
          </View>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.title}>Add Funds</Text>

        <View style={styles.textBox}>
          <TextInput
            onChangeText={handleValue}
            value={value}
            placeholder="Top Up Amount ($)"
            placeholderTextColor={colors.textDisabled}
            autoCapitalize="none"
            styles={styles.text}
            color={colors.textPrimary}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.textBox}>
          <TextInput
            onChangeText={handleCvv}
            value={cvv}
            placeholder="CVV"
            placeholderTextColor={colors.textDisabled}
            autoCapitalize="none"
            maxLength={3}
            color={colors.textPrimary}
            keyboardType="numeric"
          />
        </View>

        <View style={{ height: 20 }}></View>

        <Button
          buttonText={"CONFIRM"}
          enableCondition={valid}
          onPressFunction={() => {
            topUp();
          }}
        />
      </View>
    </SafeAreaView>
  );
};
