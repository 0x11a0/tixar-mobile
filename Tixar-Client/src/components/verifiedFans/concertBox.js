import { View, Image, Text, Pressable, StyleSheet } from "react-native";

export default ConcertBlock = ({ artistIcon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.concertBlock}>
        <Image source={artistIcon} style={styles.artistIcon} />
        <Text style={styles.Ttile}>Upcoming Concerts</Text>
        <Text style={styles.artistDescription}>
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
  Ttile: {
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
