import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FooterBlock from "../../components/viewConcert/footerBlock";
import { ColorContext } from "../../../context";
import { useContext, useState, useEffect } from "react";
import Button from "../../components/newApp/button";
import { AuthContext } from "../../../context";

export default ViewConcertPage = ({ route, navigation }) => {
  const { colors } = useContext(ColorContext);
  const insets = useSafeAreaInsets();
  const { token } = useContext(AuthContext);
  //   const concert = route.params.concert;
  //   console.log(concert);
  const {
    date,
    quantity,
    category,
    concertName,
    artist,
    eventID,
    salesRoundID,
    priceID,
  } = route.params;
  const categoryValue = category.split("-")[0].trim();
  const price = category.split("-")[1].trim();
  const numericPrice = Number(price.slice(1));
  const totalPrice = numericPrice * quantity;

  const requestBody = {
    type: "ewallet",
    eventID: eventID,
    salesRoundID: salesRoundID,
    items: [
      {
        priceID: priceID,
        qty: quantity,
      },
    ],
  };

  const purchaseTicket = () => {
    fetch("http://rt.tixar.sg:3000/api/transaction/purchaseTicket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    }).then((response) => {
      console.log("this is the request Body" + JSON.stringify(requestBody));

      console.log(response);
      if (response.ok) {
        console.log("Update successful");
      } else {
        console.log("Update unsuccessful");
      }
    });
  };

  const styles = StyleSheet.create({
    // main container
    container: {
      alignItems: "center",
      backgroundColor: colors.background,
      paddingHorizontal: 20,
    },
    contentContainer: {
      width: "100%",
      borderRadius: 10,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      backgroundColor: colors.primary,
      padding: 20,
      margin: 20,
      // backgroundColor: 'red',
    },

    // images
    topImage: {
      height: 257,
      width: "100%",
      borderRadius: 15,
      marginVertical: 20,
    },

    layoutImage: {
      width: "100%",
      borderRadius: 15,
      resizeMode: "contain",
      alignSelf: "center",
      marginVertical: 20,
      backgroundColor: colors.primary,
    },

    // text
    cardTitle: {
      fontSize: 20,
      color: colors.textPrimary,
      fontFamily: "Lato-Bold",
      marginBottom: 30,
      alignSelf: "center",
    },
    bodyText: {
      fontSize: 17,
      color: colors.textPrimary,
      fontFamily: "Lato-Regular",
      lineHeight: 20,
      marginBottom: 15,
    },
    concertTitle: {
      fontSize: 26,
      color: colors.textPrimary,
      fontFamily: "Lato-Bold",
      lineHeight: 27,
      marginBottom: 15,
    },
    ticketCategoryTitle: {
      fontSize: 26,
      color: colors.textPrimary,
      fontFamily: "Lato-Bold",
      lineHeight: 27,
      marginBottom: 15,
      // backgroundColor: 'orange'
    },
    ticketCategoryDescription: {
      fontSize: 15,
      color: colors.textPrimary,
      fontFamily: "Lato-Regular",
      lineHeight: 27,
      marginBottom: 15,
    },

    //button container
    buttonContainer: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 20,
      // backgroundColor: 'red',
    },
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        alignItems: "center",
        justifyContent: "flex-start",
        // paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={styles.container}
      >
        {/* content container */}
        <View style={styles.contentContainer}>
          <Text style={styles.cardTitle}>Confirm Purchase</Text>

          <Text style={styles.concertTitle}>{concertName}</Text>

          <Text style={styles.bodyText}>Reference Number: 3E12F89C68</Text>

          <Text
            style={{
              color: colors.textPrimary,
              fontFamily: "Lato-Regular",
              marginBottom: 15,
            }}
          >
            {date}
          </Text>

          <Text
            style={{
              color: colors.textPrimary,
              fontFamily: "Lato-Regular",
              marginBottom: 15,
            }}
          >
            {categoryValue}
          </Text>
          <Text
            style={{
              color: colors.textPrimary,
              fontFamily: "Lato-Regular",
              marginBottom: 15,
            }}
          >
            Quantity: {quantity}
          </Text>

          <Text
            style={{ color: colors.textPrimary, fontFamily: "Lato-Regular" }}
          >
            Total Price: ${totalPrice}
          </Text>
        </View>

        {/* <Text style={{ color: colors.textPrimary }}>{artist}</Text> */}

        {/* <Text style={{ color: colors.textPrimary }}>Price: {price}</Text> */}

        {/* <Text style={{ color: colors.textPrimary }}>event ID: {eventID}</Text> */}

        {/* <Text style={{ color: colors.textPrimary }}>
          sales round ID: {salesRoundID}
        </Text> */}

        {/* <Text style={{ color: colors.textPrimary }}>price ID: {priceID}</Text> */}

        <Button
          buttonText={"Ewallet"}
          onPressFunction={() => {
            purchaseTicket();
          }}
          enableCondition={true} //change to enable condition based on account verified fan status and access
        />

        {/* Ticket Category Button */}
        <View style={styles.buttonContainer}>
          <Button
            buttonText={"Back"}
            onPressFunction={() => {
              navigation.goBack();
            }}
            enableCondition={true} //change to enable condition based on account verified fan status and access
          />
        </View>

        

      </ScrollView>
    </SafeAreaView>
  );
};
