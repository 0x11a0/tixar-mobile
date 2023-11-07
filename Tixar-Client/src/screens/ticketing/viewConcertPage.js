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
  const concert = route.params.concert;
  console.log(concert);

  //function to format dates
  function formatDate(dateString) {
    const dateObject = new Date(dateString);
    const day = dateObject.getUTCDate();
    const month = dateObject.toLocaleString("default", {
      month: "long",
    });
    const year = dateObject.getUTCFullYear();
    return `${day} ${month} ${year}`;
  }

  const startDate = new Date(concert.sessions[0].start);
  const formattedStartDate = formatDate(startDate);
  const endDate = new Date(concert.sessions[concert.sessions.length - 1].end);
  const formattedEndDate = formatDate(endDate);

  const styles = StyleSheet.create({
    // main container
    container: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      backgroundColor: colors.background,
      paddingHorizontal: 20,
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
    venueText: {
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
        {/* Top Image from DB */}
        <Image source={{ uri: concert.concertImage }} style={styles.topImage} />

        {/* Venue from DB */}
        <Text style={styles.venueText}>{concert.sessions[0].venue}</Text>

        {/* Concert Title from DB */}
        <Text style={styles.concertTitle}>{concert.name}</Text>

        {/* Description from DB */}
        <Text style={styles.ticketCategoryDescription}>
          Hosted by {concert.artistName}, {concert.name}{" "}
          {formattedStartDate === formattedEndDate
            ? `runs on ${formattedStartDate}`
            : `runs from ${formattedStartDate} to ${formattedEndDate}`}
          .
        </Text>

        {/* Concert Category Image from DB */}
        <Image
          source={require("../../assets/images/concertLayout.png")}
          style={styles.layoutImage}
        />

        {/* Ticket Category Title */}
        <Text style={styles.ticketCategoryTitle}>Ticket Categories</Text>

        {/* Ticket Category Description from DB */}
        <Text style={styles.ticketCategoryDescription}>
          {concert.concertDescription}
        </Text>

        {/* Ticket Category Button */}
        <View style={styles.buttonContainer}>
          <Button
            buttonText={"Check Availability"}
            onPressFunction={() => {
              navigation.navigate("concertCategoryPage", {
                concert: concert,
              });
            }}
            enableCondition={true} //change to enable condition based on account verified fan status and access
          />
        </View>

        <View style={{ height: 20 }} />

        <FooterBlock />
      </ScrollView>
    </SafeAreaView>
  );
};
