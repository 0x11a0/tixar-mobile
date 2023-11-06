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
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [valid, setValid] = useState(false);

    const card = route.params.card;

    const handleCardNumber = (text) => {
        setCardNumber(text);
        setValid(text.length === 16 && expiryDate.length === 5 && cvv.length === 3);
    };

    const handleExpiryDate = (text) => {
        setExpiryDate(text);
        setValid(cardNumber.length === 16 && text.length === 5 && cvv.length === 3);    
    };

    const handleCvv = (text) => {
        setCvv(text);
        setValid(cardNumber.length === 16 && expiryDate.length === 5 && text.length === 3);
    };

    const addCreditCard = () => {
        console.log("attempting to add card")
        const endPoint = "http://rt.tixar.sg:3000/api/user/card";
        const payload = {
            "customer": {
                "cardNumber": cardNumber,
                "expiryMonth": expiryDate.substring(0,2),
                "expiryYear": expiryDate.substring(3,5),
                "cvv": cvv
            }
        };
        const method = Object.keys(card).length === 0 ? "POST" : "PUT";

        fetch(endPoint, {
          method: method,
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Cache-Control": "no-cache",
          },
          body: JSON.stringify(payload),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.message === "Credit card updated successfully!" && method === "POST") {
              console.log("card added successfully");
              Alert.alert("Card added successfully");
              navigation.pop();
            } else if (data.message === "Credit card updated successfully!" && method === "PUT"){
              console.log("card changed successfully");
              Alert.alert("Card changed successfully");
              navigation.pop();
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };


  const styles = StyleSheet.create({
    eCardContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      marginHorizontal: 20,
    },
    transactionContainer: {
      flex: 0.8,
    },
    container: {
      flex: 3,
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
    },});

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        flexDirection: "column",
      }}
    >
        {Object.keys(card).length === 0 ? (
            <Text style = {{color: colors.textPrimary}}>You have no card you broke ass go add it below</Text>
        ) : (
            <View>
                {/* Display card details */}
                <Text style = {{color: colors.textPrimary}}>Card Number: {card.cardNumber}</Text>
                <Text style = {{color: colors.textPrimary}}>Expiry Date: {card.cardExpiryMonth}/{card.cardExpiryYear}</Text>
                {/* Add more details as needed */}
            </View>
        )}

        <View style = {{height: 40}}/>

        <Text style = {{color: colors.textPrimary}}> 
            Update card details </Text>

            <View style={{backgroundColor: "white"}}>
                  <TextInput
                    onChangeText={handleCardNumber}
                    value={cardNumber}
                    placeholder="Card Number XXXX XXXX XXXX XXXX"
                    autoCapitalize="none"
                    maxLength={16}
                  />
            </View>

            <View style={{backgroundColor: "white"}}>
                  <TextInput
                    onChangeText={handleExpiryDate}
                    value={expiryDate}
                    placeholder="Expiry Date MM/YY"
                    autoCapitalize="none"
                    maxLength={5}
                  />
            </View>

            <View style={{backgroundColor: "white"}}>
                  <TextInput
                    onChangeText={handleCvv}
                    value={cvv}
                    placeholder="CVV XXX"
                    autoCapitalize="none"
                    maxLength={3}
                  />
            </View>

            <View style = {{height: 40}}/>

            <Button
                  buttonText={"UPDATE CARD"}
                  enableCondition={valid}
                  onPressFunction={() => {
                    addCreditCard();
                  }}
            />


    </SafeAreaView>
  );
};