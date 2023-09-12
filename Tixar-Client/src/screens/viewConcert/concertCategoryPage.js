import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FooterBlock from "../../components/viewConcert/footerBlock";
import NextButton from "../../components/viewConcert/nextButton";
import OptionFields from "../../components/viewConcert/optionFields";

export default ConcertCategoryPage = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F2F2F2",
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
        <View style={{ height: 17 }} />
        <Image
          source={require("../../assets/images/concertLayout.png")}
          style={styles.layoutImage}
        />

        <View style={{ height: 30 }} />

        <View
          style={{
            width: "100%",

            borderRadius: 20,
            backgroundColor: "white",
            zIndex: 1,
            paddingHorizontal: "5%",
          }}
        >
          {/* date selection */}
          <Text style={styles.subtitle}>Availibility</Text>

          <OptionFields
            optionText={"Select date"}
            icon={require("../../assets/soft-ui-pro-react-native-v1.1.1/calendar3x.png")}
            onPressFunction={() => {
              console.log("date option clicked");
            }}
          />

          {/* quantity selection */}
          <Text style={styles.subtitle}>Quantity</Text>

          <OptionFields
            optionText={"01"}
            icon={require("../../assets/soft-ui-pro-react-native-v1.1.1/users3x.png")}
            onPressFunction={() => {
              console.log("quantity option clicked");
            }}
          />

          {/* seat catergory selection */}
          <Text style={styles.subtitle}>Seat Category</Text>

          <OptionFields
            optionText={"Category 1"}
            icon={require("../../assets/soft-ui-pro-react-native-v1.1.1/components3x.png")}
            onPressFunction={() => {
              console.log("category option clicked");
            }}
          />

          <View style={{ height: 25 }} />

          {/* button that brings you to purchase confirmation page */}
          <NextButton
            buttonText={"BOOK NOW"}
            onPressFunction={() => {
              console.log("Book button clicked");
            }}
            buttonHeight={50}
          />

          <View style={{ height: 20 }} />
        </View>

        <View style={{ height: 20 }} />
        <FooterBlock />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // width: '90%',
    // backgroundColor: 'blue',
    paddingHorizontal: 20,
  },
  layoutImage: {
    // backgroundColor: 'green',
    width: "90%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
    color: "#252F40",
    paddingVertical: "5%",
  },
});
