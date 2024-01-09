import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Alert,
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
  const clubId = concert.clubId;
  const vfThreshold = concert.vfThreshold;

  useEffect(() => {
    getFanInfo();
  }, []);
  // let isVerifiedFan = false;
  // function getVerifiedFanEligibility(profileId) {
  //   console.log("getVerifiedFanElibility page");
  //   const payload = {
  //     profileId: profileId,
  //   };
  //   fetch("http://vf.tixar.sg/api/fan/eligibility", {
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(payload),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       isVerifiedFan = data;
  //       console.log("get verified fan is verified fan value " + isVerifiedFan);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  // fanProfiles = [];
  // const getFanInfo = () => {
  //   fetch("http://vf.tixar.sg/api/fan", {
  //     method: "GET",
  //     credentials: "include",
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.profiles);
  //       fanProfiles = data.profiles;
  //       for (const profile of fanProfiles) {
  //         console.log("here is the profile id " + profile.club._id);
  //         console.log("here is the clubID " + clubId);
  //         if (profile.club._id == clubId) {
  //           console.log("THEY ARE THE SAME");
  //           getVerifiedFanEligibility(profile._id);
  //         }
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  const [isVerifiedFan, setIsVerifiedFan] = useState(false);
  const [fanProfiles, setFanProfiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const getVerifiedFanEligibility = (profileId, vfThreshold) => {
    console.log("getVerifiedFanEligibility page");
    const payload = {
      profileId: profileId,
      threshold: vfThreshold,
    };

    return fetch("http://vf.tixar.sg/api/fan/eligibility", {
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log("it is true");
          setIsVerifiedFan(true);
          return true;
        }
        console.log("get verified fan is verified fan value " + data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const getFanInfo = () => {
  //   return new Promise((resolve, reject) => {
  //     setLoading(true);
  //     fetch("http://vf.tixar.sg/api/fan", {
  //       method: "GET",
  //       credentials: "include",
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data.profiles);
  //         setFanProfiles(data.profiles);
  //         for (const profile of data.profiles) {
  //           console.log("here is the profile id " + profile.club._id);
  //           console.log("here is the clubID " + clubId);
  //           if (profile.club._id == clubId) {
  //             console.log("THEY ARE THE SAME");
  //             if (getVerifiedFanEligibility(profile._id)) {
  //               return;
  //             }
  //           }
  //         }
  //       })
  //       .then(() => {
  //         setLoading(false);
  //         resolve();
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         setLoading(false);
  //         reject(error);
  //       });
  //   });
  // };

  const getFanInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://vf.tixar.sg/api/fan", {
        method: "GET",
        credentials: "include",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      console.log(data.profiles);
      setFanProfiles(data.profiles);
      for (const profile of data.profiles) {
        console.log("here is the profile id " + profile.club._id);
        console.log("here is the clubID " + clubId);
        if (profile.club._id == clubId) {
          console.log("THEY ARE THE SAME");
          await getVerifiedFanEligibility(profile._id, vfThreshold);
          // If you want to wait for the verification to complete, use `await` here.
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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

  //check availability checks
  const currentDate = new Date();
  const salesRounds = concert.salesRound;

  //check which round it is now, if current round is public and within the current date,
  //set true
  let anySalesRoundMatchesConditions = false;
  const filteredSalesRound = salesRounds.map((salesRound) => {
    const salesRoundStartDate = new Date(salesRound.start);
    const salesRoundEndDate = new Date(salesRound.end);
    console.log("LAST " + isVerifiedFan);
    if (
      (currentDate >= salesRoundStartDate &&
        currentDate <= salesRoundEndDate &&
        salesRound.roundType == "public") ||
      isVerifiedFan == true
    ) {
      anySalesRoundMatchesConditions = true;
      return salesRound;
    } else {
    }
  });

  const checkAvailability = () => {
    if (!anySalesRoundMatchesConditions) {
      Alert.alert("Sales round not open", "Please wait till further notice");
    } else {
      navigation.navigate("concertCategoryPage", { concert: concert });
    }
  };

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
              console.log("am i a verified fan " + isVerifiedFan);
              console.log("here are all the fan profiles " + fanProfiles);
              if (!anySalesRoundMatchesConditions) {
                Alert.alert(
                  "Sales round not open",
                  "Please wait till further notice"
                );
              } else {
                navigation.navigate("concertCategoryPage", {
                  concert: concert,
                  isVerifiedFan: isVerifiedFan,
                });
              }
            }}
            // onPressFunction={() => {
            //   getFanInfo()
            //     .then(() => {
            //       console.log("am i a verified fan " + isVerifiedFan);
            //       console.log("here are all the fan profiles " + fanProfiles);
            //       checkAvailability();
            //     })
            //     .catch((error) => {
            //       // Handle error if needed
            //       console.error(error);
            //     });
            // }}
            enableCondition={true} //change to enable condition based on account verified fan status and access
          />
        </View>

        <View style={{ height: 20 }} />

        <FooterBlock />
      </ScrollView>
    </SafeAreaView>
  );
};
