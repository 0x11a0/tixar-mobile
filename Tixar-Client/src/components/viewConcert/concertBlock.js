import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import { ColorContext } from "../../../context";
import { useContext } from "react";
// const formatDateString = (startDate, endDate) => {
//   const startDay = startDate.getDate();
//   const endDay = endDate.getDate();
//   const month = startDate.toLocaleString("default", { month: "long" });
//   const year = startDate.getFullYear();

//   if (startDay === endDay) {
//     return `${startDay} ${month} ${year}`;
//   } else {
//     const days = [];
//     for (let day = startDay; day <= endDay; day++) {
//       days.push(day);
//     }
//     return `${days.join(", ")} ${month} ${year}`;
//   }
// };

export default ConcertBlock = ({
  concertName,

  artistName,
  artistDescription,
  artistImage,
  imageBackground,
  onPressFunction,
}) => {
  const { colors } = useContext(ColorContext);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      height: 350,
      width: "95%",
      borderRadius: 10,
      marginVertical: 10,
      alignSelf: "center",
      overflow: "hidden",
    },
    title: {
      fontFamily: "Lato-Bold",
      fontSize: 25,
      color: colors.textPrimary,
    },
    subtitle: {
      fontFamily: "Lato-Regular",
      fontSize: 15,
      color: colors.textPrimary,
    },
    artistIcon: {
      height: 45,
      width: 45,
      resizeMode: "contain",
      borderRadius: 6,
    },
    imageBackground: {
      height: 240,
      width: "100%",
      // position: "absolute",
      alignSelf: "flex-start",
      resizeMode: "cover",
      borderRadius: 10,
    },
    artistBlock: {
      flexDirection: "row",
    },
    artistTextContainer: {
      paddingHorizontal: 15,
      width:'90%',
      // backgroundColor: 'red',
    },
    artistName: {
      fontFamily: "Lato-Bold",
      color: colors.textPrimary,
    },
    artistDescription: {
      fontFamily: "Lato-Regular",
      color: colors.textPrimary,
    },
  });

  //   const formattedDate = formatDateString(startDate, endDate);
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        onPressFunction
          ? onPressFunction()
          : console.log(concertName + " pressed");
      }}
    >
      <Image source={{ uri: imageBackground }} style={styles.imageBackground} />
      <View style={{ paddingHorizontal: 15 }}>
        <View style={{ height: 10 }} />

        <Text style={styles.title}>{concertName}</Text>

        {/* <View style={{ height: 30 }} /> */}

        {/* <Text style={styles.subtitle}>{venueName}</Text> */}

        {/* <View style={{ height: 10 }} /> */}

        {/* <Text style={styles.title}> */}
        {/* {startDate === endDate ? startDate : `${startDate} to ${endDate}`} */}
        {/* {formattedDate} */}
        {/* </Text> */}

        <View style={{ height: 10 }} />

        <View style={styles.artistBlock}>
          <Image source={{ uri: artistImage }} style={styles.artistIcon} />
          <View style={styles.artistTextContainer}>
            <Text style={styles.artistName}>{artistName}</Text>
            <View style={{ height: 5 }} />
            <Text
              numberOfLines={1.5}
              ellipsizeMode="tail"
              style={styles.artistDescription}
            >
              {artistDescription}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
