import { View, Image, Text, Pressable, StyleSheet } from "react-native";

export default ArtistBlock = ({
  clubName,
  monthlyInteractions,
  newFans,
  totalFans,
  artistIcon,
  onPressFunction,
  artistDescription,
  points,
}) => {
  return (
    // <Pressable style={styles.container}
    //     onPress={() => {
    //         onPressFunction
    //             ? onPressFunction()
    //             : console.log(clubName + ' statistic box pressed');
    //     }}>

    <View style={styles.container}>
      <View style={styles.artistBlock}>
        {/* ICON */}
        <Image source={artistIcon} style={styles.artistIcon} />

        {/* POINTS */}
        <Text style={styles.points}>Your VF Points: {points}</Text>

        {/* TEXT CONTAINER */}
        <View style={styles.artistTextContainer}>
          {/* SPLITS INTO TITLE ROW AND DESCRIPTION ROW */}
          <View style={{ flexDirection: "column" }}>
            {/* TITLE ROW, ARTIST NAME*/}
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.clubName} numberOfLines={1}>
                {clubName}
              </Text>
            </View>

            <View style={{ height: 3 }} />

            {/* BUFFER BETWEEN ROWS */}
            <View style={{ height: 3 }} />

            {/* NEW CLUB DESCRIPTION */}
            <Text style={styles.artistDescription}>{artistDescription}</Text>
          </View>

          {/* DESCRIPTION ROW _old card with stats_ */}
          {/* <View style={{ flexDirection: 'row',}}>
                            <Text style={styles.artistDescription}
                                numberOfLines={4}>
                                Just this month, you've had:{'\n'}
                                {monthlyInteractions.toLocaleString()} interactions{'\n'}
                                {newFans.toLocaleString()} new fans{'\n'}
                                {totalFans.toLocaleString()} total fans
                            </Text>
                        </View> */}
        </View>
      </View>
    </View>
    // </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 250,
    borderRadius: 20,
    padding: 10,
    width: "100%",
    marginTop: 15,
  },
  artistIcon: {
    width: 130,
    height: "80%", // can change to aspectratio: 1 if images dont fit well in this shape
    borderRadius: 17,
    marginRight: 10,
  },
  artistBlock: {
    flexDirection: "row",
    // backgroundColor: 'blue',
    height: "100%",
  },
  artistTextContainer: {
    flexDirection: "column",
    flex: 1,
    height: "85%",
    // backgroundColor: 'red',
  },
  clubName: {
    fontSize: 20,
    fontFamily: "Lato-Bold",
    color: "#252F40",
    flex: 1,
  },

  artistDescription: {
    fontFamily: "Lato-Light",
    color: "#252F40",
    lineHeight: 20,
  },
  points: {
    fontFamily: "Lato-Light",
    color: "#252F40",
    lineHeight: 20,
    fontSize: 15,
    alignSelf: "flex-start",
    marginRight: 15,
    position: "absolute",
    bottom: 0,
    left: 5,
  },
});
