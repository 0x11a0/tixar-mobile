// install this library to make the page scrollable when the keyboard is open
//yarn add react-native-keyboard-aware-scroll-view

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { React, useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import FooterBlock from "../../components/viewConcert/footerBlock";
import NextButton from "../../components/viewConcert/nextButton";
import OptionFields from "../../components/concertCategory/optionFields";
import DatePicker from "../../components/concertCategory/datePicker";

export default ConcertCategoryPage = ({ route, navigation }) => {
  // STATE VARIABLES to store the text input from the user for quantity and category
  const [quantityField, setQuantityField] = useState('');
  const [categoryField, setCategoryField] = useState('');

  const insets = useSafeAreaInsets();

  return (

    //commented out as using KeyboardAwareScrollView instead, may affect other devices but so far works on iPhone 14
    // Wrap the content with KeyboardAvoidingView
    // <KeyboardAvoidingView
    //   style={{ flex: 1 }}
    //   behavior={Platform.OS === "ios" ? "padding" : null}
    //   enabled
    // >

      // ensures that the content is not hidden by the phone's status bar or notches
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#F2F2F2",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >

        {/* this library component ensures that the input will jump above the keyboard when typing */}
        <KeyboardAwareScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.container}
          extraHeight={100} // Adjust this value as needed
          enableOnAndroid={true} // Set this to true for Android support
        >
          <View style={{ height: 17 }} />

          {/* image of the concert's category layout */}
          <Image
            source={require("../../assets/images/concertLayout.png")}
            style={styles.layoutImage}
          />

          <View style={{ height: 30 }} />

          {/* card that wraps all the input boxes */}
          <View
            style={{
              width: "100%",
              borderRadius: 20,
              backgroundColor: "white",
              zIndex: 1,
              paddingHorizontal: "5%",
            }}
          >
            {/* date picker that works on both iOS and Android */}
            <Text style={styles.subtitle}>Date</Text>
            <View>
              <DatePicker
                icon={require("../../assets/soft-ui-pro-react-native-v1.1.1/calendar3x.png")}
                minDate={new Date(2024, 0, 23)}
                maxDate={new Date(2024, 0, 27)}
              />
            </View>

            {/* quantity selection */}
            <Text style={styles.subtitle}>Quantity</Text>
            <OptionFields
              optionText={"0"}
              icon={require("../../assets/soft-ui-pro-react-native-v1.1.1/users3x.png")}
              onPressFunction={() => {
                console.log("quantity option clicked");
              }}
              onChangeTextFunction={(text) => {
                setQuantityField(text);
              }}
              keyboardType={"numeric"}
            />

            {/* seat category selection */}
            <Text style={styles.subtitle}>Seat Category</Text>
            <OptionFields
              optionText={"Category 1"}
              icon={require("../../assets/soft-ui-pro-react-native-v1.1.1/components3x.png")}
              onPressFunction={() => {
                console.log("category option clicked");
              }}
              onChangeTextFunction={(text) => {
                setCategoryField(text);
              }}
              keyboardType={"numeric"}
            />

            <View style={{ height: 25 }} />

            {/* button that brings you to the purchase confirmation page */}
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

        </KeyboardAwareScrollView>

      </SafeAreaView>

    // </KeyboardAvoidingView> //commented out as using KeyboardAwareScrollView instead, may affect other devices but so far works on iPhone 14
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  layoutImage: {
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
