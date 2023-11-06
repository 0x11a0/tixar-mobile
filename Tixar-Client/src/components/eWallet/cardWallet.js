import { React } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";


export default cardWallet = ({ firstName, lastName, balance }) => {
  return (
    // entire card container
    <View style={styles.container}>
      {/* card backgroud image */}
      <Image
        source={require("../../assets/soft-ui-pro-react-native-v1.1.1/background3x.png")}
        style={styles.cardBackground}
      />

         <View style={styles.cardContentContainer}>

            {/* name */}
            <View style={styles.nameContainer}>
            <Text style={styles.name}>
                {firstName} {lastName}
            </Text>
            </View>

            {/* image row */}
            <View style={styles.cardImageContainer}>
            {/* card image */}
            <Image
                source={require("../../assets/creditcardicon.png")}
                style={styles.cardImage}
            />

            {/* profile icon */}
            <Image
                source={require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png")}
                style={styles.profilePicture}
            />
            </View>

            <View style={styles.balanceContainer}>
            <Text style={styles.balanceAmount}>Balance:  {balance}</Text>

            </View>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    alignItems: "center",
    // backgroundColor: "red",
  },

  cardBackground: {
    height: '100%',
    width: "100%",
    borderRadius: 15,
    resizeMode: "cover",
    position: "absolute",
  },
  cardContentContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    // backgroundColor: "red",
  },
  //   name
  nameContainer: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "blue",
  },
  name: {
    fontFamily: "Lato-Bold",
    fontSize: 25,
    color: "white",
  },

  //   images
  cardImageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "orange",
  },
  cardImage: {
    height: 50,
    width: 50,
  },
  profilePicture: {
    height: 50,
    width: 50,
    resizeMode: "cover",
    borderRadius: 10,
  },

  //   balance
  balanceContainer: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "red",
  },
  balanceAmount: {
    fontFamily: "Lato-Bold",
    fontSize: 20,
    color: "white",
  },
});
