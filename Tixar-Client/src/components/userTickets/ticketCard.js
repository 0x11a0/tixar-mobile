import React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { ColorContext } from "../../../context";
import { useContext } from "react";

export default TicketCard = ({
  artistName,
  concertName,
  concertCategory,
  concertReference,
  onPress, // Pass a callback function to handle the press card event
}) => {
  const { colors } = useContext(ColorContext);

  // Function to handle the favorite button press
  // const handleFavoritePress = () => {
  //   console.log("favorite button clicked");
  // };

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.primary,
      marginHorizontal: 10, 
      padding: 10,
      borderRadius: 10,
      // borderBottomWidth: 0.5,
      // borderColor: colors.secondary,
    },
  
    icon: {
      width: 80,
      height: 80,
      borderRadius: 15,
    },
  
    // favouriteButtonContainer: {
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   paddingRight: 12,
    //   // backgroundColor: "blue",
    // },
  
    // favouriteButton: {
    //   width: 20,
    //   height: 20,
    //   borderRadius: 15,
    // },
  
    textContainer: {
      flex: 9,
      justifyContent: "center",
      paddingLeft: 15,
    },
  
    concertTitle: {
      fontSize: 16,
      color: colors.textPrimary,
      fontFamily: "Lato-Bold",
      lineHeight: 20,
    },
  
    concertCategory: {
      fontSize: 12,
      color: colors.textPrimary,
      fontFamily: "Lato-Regular",
      lineHeight: 20,
    },
  
    concertReference: {
      fontSize: 12,
      color: colors.textPrimary,
      fontFamily: "Lato-Regular",
      lineHeight: 20,
    },
  });
  

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>

        {/* icon (need integration) */}
        {/* <Image
          source={require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png")}
          style={styles.icon}
          resizeMode="cover"
        /> */}

        {/* body info (need integration thanks) */}
        <View style={styles.textContainer}>
          <Text style={styles.concertTitle}>{concertName} Ticket</Text>

          <View style= {{height:10,}}/>

          <Text style={styles.concertReference}>Artist:  {artistName}</Text>
          <Text style={styles.concertCategory}>Category:  {concertCategory}</Text>

          <View style= {{height:10,}}/>

          <Text style={styles.concertReference}>{concertReference}</Text>
        </View>

        {/* favorite button not implemented */}
        {/* <Pressable
          onPress={handleFavoritePress}
          style={styles.favouriteButtonContainer}
        >
          <Image
            source={require("../../assets/soft-ui-pro-react-native-v1.1.1/star3x.png")}
            style={styles.favouriteButton}
            resizeMode="cover"
          />
        </Pressable> */}

      </View>
    </Pressable>
  );
};

