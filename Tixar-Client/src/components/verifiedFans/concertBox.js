import { useContext } from "react";
import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import { ColorContext } from "../../../context";

export default ConcertBlock = ({ artistIcon }) => {
  const { colors } = useContext(ColorContext);
    return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <View style={styles.concertBlock}>
        <Image source={artistIcon} style={styles.artistIcon} />
        <Text style={[styles.Title, {color: colors.textSecondary}]}>Upcoming Concerts</Text>
        <Text style={[styles.artistDescription, {color: colors.textSecondary}]}>
          There are no upcoming concerts. Check back later!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 250,
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%",
    marginVertical: 15,
  },
  concertBlock: {
    flexDirection: "column",
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  artistIcon: {
    width: "100%",
    height: "45%",
    borderRadius: 16,
    alignSelf: "center",
  },
  artistTextContainer: {
    flexDirection: "column",
    flex: 1,
  },
  Title: {
    fontSize: 20,
    fontFamily: "Lato-Bold",
    color: "#252F40",
    marginTop: 10,
    // backgroundColor: "red",
  },

  artistDescription: {
    fontFamily: "Lato-Regular",
    color: "#252F40",
    lineHeight: 20,
    marginTop: 10,
  },
});
