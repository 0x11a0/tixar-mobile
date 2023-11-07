import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { Barcode } from "expo-barcode-generator";

// import HeaderBlock from "../../components/generatedUserTicket/headerBlock";
// import Card from "../../components/generatedUserTicket/card";
import GradientText from "../../components/generatedUserTicket/gradientText";
import DashedLine from "react-native-dashed-line";

import { ColorContext } from "../../../context";
import { useContext } from "react";

export default GenerateTicketPage = ({ route, navigation}) => {
  const { colors } = useContext(ColorContext);
  const ticket = route.params.ticket;

  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: "cover", // or "contain" for different behavior
    },
   
    containerView: {
      marginHorizontal: 15,
      backgroundColor: 'white',
      opacity: 0.9,
      width: "80%",
      padding: 20,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
    },

    stadiumTitleView: {
      paddingBottom: 20,
    },
    stadiumTitle: {
      fontFamily: "Lato-Bold",
      fontSize: 20,
    },
    concertTitleView: {
      paddingBottom: 20,
    },
    concertTitle: {
      fontSize: 18,
      fontFamily: "Lato-Bold",
      color: 'black',
      marginBottom: 5,
    },
    concertInfoView: {
      // paddingBottom: 10,
    },
    concertInfo: {
      fontFamily: "Lato-Regular",
      fontSize: 16,
      paddingBottom: 5,
      color: 'black',
    },
    dashedLine: {
      width: "95%",
      paddingVertical: 1,
    },
    barcode: {
      width: "80%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      opacity: 0.90,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
    },
  });

  return (
    <ImageBackground
      source={require("../../assets/images/loginbackground.png")} // Change to your image path
      style={styles.backgroundImage}
    >
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* backgorund overlay */}
        {/* Info Card */}
        <View style={styles.containerView}>
        
          {/* Location */}
          <View style={styles.stadiumTitleView}>
            <GradientText style={styles.stadiumTitle}>
              {ticket.event.sessions[0].venue}
            </GradientText>
          </View>
          {/* Concert Title */}
          <View style={styles.concertTitleView}>
            <Text style={styles.concertTitle}>
              {ticket.event.name}
            </Text>
            <Text style={styles.concertInfo}>{ticket.event.artistName}</Text>

          </View>

          {/* Concert Info */}
          <View style={styles.concertInfoView}>
            <Text style={styles.concertInfo}>{ticket.type}</Text>
            {/* <Text style={styles.concertInfo}>Quantity: 1</Text> */}
          </View>
        </View>

        {/* Barcode */}
        <View style={styles.barcode}>
          <DashedLine style={styles.dashedLine} />
          <Barcode
            value={ticket._id.slice(-8)} //ticket reference number
            options={{ format: "CODE128", backgroundColor: "black" }}
          />
        </View>
        {/* </View> */}
      </SafeAreaView>
    </ImageBackground>
  );
};
