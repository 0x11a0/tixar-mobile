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
        console.log("attempting to top up ewallet")
        const endPoint = "http://rt.tixar.sg:3000/api/transaction/topUpEWallet";
        const payload = {
            "type": "eWalletTopUp",
            "card": card,
            "value": value
        };

        fetch(endPoint, {
          method: "POST",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
          .then((response) => response.json())
          .then((data) => {
            Alert.alert("Top up successful", "$" + value + " has been added to your eWallet balance");
            navigation.pop();
          })
          .catch((error) => {
            console.error(error);
            Alert.alert("Top up failed", "Please try again");
          });
      };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        flexDirection: "column",
      }}
    >
        <Text style = {{color: colors.textPrimary}}>E Wallet Balance: ${eWalletBalance}</Text>

        {Object.keys(card).length === 0 ? (
            <Text style = {{color: colors.textPrimary}}>You have no card you broke ass go add it below</Text>
        ) : (
            <View>
                {/* Display card details */}
                <Text style = {{color: colors.textPrimary}}>Card Name: {card.cardName}</Text>
                <Text style = {{color: colors.textPrimary}}>Card Number: {"**** ".repeat(3) + card.cardNumber.slice(-4)}</Text>
                <Text style = {{color: colors.textPrimary}}>Expiry Date: {card.cardExpiryMonth}/{card.cardExpiryYear}</Text>
                {/* Add more details as needed */}
            </View>
        )}

        <View style = {{height: 40}}/>

        <Text style = {{color: colors.textPrimary}}> 
            Update card details </Text>

            <View style={{backgroundColor: "white"}}>
                  <TextInput
                    onChangeText={handleValue}
                    value={value}
                    placeholder="Top Up Amount"
                    autoCapitalize="none"
                  />
            </View>

            <View style={{backgroundColor: "white"}}>
                  <TextInput
                    onChangeText={handleCvv}
                    value={cvv}
                    placeholder="CVV"
                    autoCapitalize="none"
                    maxLength = {3}
                  />
            </View>

            <Button
                  buttonText={"TOP UP"}
                  enableCondition={valid}
                  onPressFunction={() => {
                    topUp();
                  }}
            />


    </SafeAreaView>
  );
};