import React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";

export default TicketCard = ({ 
    concertName,
    concertCategory,
    concertReference,
    onPress // Pass a callback function to handle the press card event
}) => {

  // Function to handle the favorite button press
  const handleFavoritePress = () => {
    console.log("favorite button clicked");
  };

  return (
    <Pressable onPress={onPress}> 
      <View style={styles.container}>

        {/* icon */}
        <Image
          source={require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png")}
          style={styles.icon}
          resizeMode="cover"
        />

        {/* text */}
        <View style={styles.textContainer}>

          <Text style={styles.concertTitle}>{concertName}</Text>
          <Text style={styles.concertCategory}>{concertCategory}</Text>
          <Text style={styles.concertReference}>{concertReference}</Text>

        </View>

        {/* favorite button */}
        <Pressable onPress={handleFavoritePress} style={styles.favouriteButtonContainer}>
          <Image
            source={require("../../assets/soft-ui-pro-react-native-v1.1.1/star3x.png")}
            style={styles.favouriteButton}
            resizeMode="cover"
          />
        </Pressable>

      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
    justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 15,
    marginHorizontal: 10, // space outside on sides of the card
    marginVertical: 5, // space outside on top and bottom of the card
    padding: 10, // space inside the card
    height: 100,
    },

    icon: {
    width: 80,
    height: 80,
    borderRadius: 15,
    },

    favouriteButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 12,
    // backgroundColor: "blue",
    },

    favouriteButton: {
    width: 20,
    height: 20,
    borderRadius: 15,
    },

    textContainer: {
    flex: 9,
    justifyContent: "center",
    paddingLeft: 15,
    },

    concertTitle: {
    fontSize: 16,
    color: '#252F40',
    fontFamily: 'Lato-Bold',
    lineHeight: 27,
    },

    concertCategory: {
        fontSize: 12,
        color: '#67748E',
        fontFamily: 'Lato',
        lineHeight: 27,
    },

    concertReference: {
        fontSize: 12,
        color: '#67748E',
        fontFamily: 'Lato',
        lineHeight: 27,
    }
});
