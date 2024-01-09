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

export default CreditCardPage = ({ route, navigation }) => {
  const { token } = useContext(AuthContext);
  const { colors } = useContext(ColorContext);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
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

  const handleCardName = (text) => {
    setCardName(text);
    setValid(
      text.length > 0 &&
        cardNumber.length === 16 &&
        expiryDate.length === 7 &&
        cvv.length === 3
    );
  };

  const handleCardNumber = (text) => {
    setCardNumber(text);
    setValid(
      cardName.length > 0 &&
        text.length === 16 &&
        expiryDate.length === 7 &&
        cvv.length === 3
    );
  };

  const handleExpiryDate = (text) => {
    setExpiryDate(text);
    setValid(
      cardName.length > 0 &&
        cardNumber.length === 16 &&
        text.length === 7 &&
        cvv.length === 3
    );
  };

  const handleCvv = (text) => {
    setCvv(text);
    setValid(
      cardName.length > 0 &&
        cardNumber.length === 16 &&
        expiryDate.length === 7 &&
        text.length === 3
    );
  };

  const addCreditCard = () => {
    console.log("attempting to add/update card");
    const endPoint = "http://rt.tixar.sg/api/user/card";
    const payload = {
      card: {
        cardName: cardName,
        cardNumber: cardNumber,
        cardExpiryMonth: expiryDate.substring(0, 2),
        cardExpiryYear: expiryDate.substring(3, 7),
        cvv: cvv,
      },
    };
    console.log(JSON.stringify(payload));
    const method = Object.keys(card).length === 0 ? "POST" : "PUT";
    console.log(method);

    fetch(endPoint, {
      method: method,
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (
          data.message === "Credit card added successfully!" &&
          method === "POST"
        ) {
          console.log("card added successfully");
          Alert.alert("Card added successfully");
          navigation.pop();
        } else if (
          data.message === "Credit card updated successfully!" &&
          method === "PUT"
        ) {
          console.log("card changed successfully");
          Alert.alert("Card changed successfully");
          navigation.pop();
        } else {
          console.log("invalid card details");
          Alert.alert("Invalid card details");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
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
        <Text style={styles.title}>Enter Card Details </Text>

        <View style={styles.textBox}>
          <TextInput
            onChangeText={handleCardName}
            value={cardName}
            placeholder="Card Name"
            placeholderTextColor={colors.textDisabled}
            autoCapitalize="none"
            styles={styles.text}
            color={colors.textPrimary}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.textBox}>
          <TextInput
            onChangeText={handleCardNumber}
            value={cardNumber}
            placeholder="Card Number XXXX XXXX XXXX XXXX"
            placeholderTextColor={colors.textDisabled}
            autoCapitalize="none"
            maxLength={16}
            styles={styles.text}
            color={colors.textPrimary}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.textBox}>
          <TextInput
            onChangeText={handleExpiryDate}
            value={expiryDate}
            placeholder="Expiry Date MM/YYYY"
            placeholderTextColor={colors.textDisabled}
            autoCapitalize="none"
            maxLength={7}
            styles={styles.text}
            color={colors.textPrimary}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.textBox}>
          <TextInput
            onChangeText={handleCvv}
            value={cvv}
            placeholder="CVV XXX"
            placeholderTextColor={colors.textDisabled}
            autoCapitalize="none"
            maxLength={3}
            styles={styles.text}
            color={colors.textPrimary}
            keyboardType="numeric"
          />
        </View>

        <View style={{ height: 40 }} />

        <Button
          buttonText={"ADD CARD"}
          enableCondition={valid}
          onPressFunction={() => {
            addCreditCard();
          }}
        />
      </View>
    </SafeAreaView>
  );
};
