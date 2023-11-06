import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";

import moment from "moment";
import { React, useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ColorContext } from "../../../context";
import { useContext } from "react";
import Button from "../../components/newApp/button";
import { AntDesign } from "@expo/vector-icons";
import FooterBlock from "../../components/viewConcert/footerBlock";
import OptionFields from "../../components/concertCategory/optionFields";
import { Picker } from "@react-native-picker/picker";

export default ConcertCategoryPage = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const concert = route.params.concert;

  //code used to check if any sales round is open
  const showAlertAndNavigateBack = () => {
    Alert.alert("Sales round not open", "Please wait till further notice", [
      {
        text: "OK",
        onPress: () => {
          // Navigate back to the previous screen
          navigation.goBack();
        },
      },
    ]);
  };

  const currentDate = new Date();
  const salesRounds = concert.salesRound;

  //check which round it is now, if current round is public and within the current date, set true
  let anySalesRoundMatchesConditions = false;
  const filteredSalesRound = salesRounds.map((salesRound) => {
    const salesRoundStartDate = new Date(salesRound.start);
    const salesRoundEndDate = new Date(salesRound.end);
    if (
      currentDate >= salesRoundStartDate &&
      currentDate <= salesRoundEndDate &&
      salesRound.roundType == "public"
    ) {
      anySalesRoundMatchesConditions = true;
      return salesRound;
    } else {
    }
  });

  dateList = [];
  categoryAndPrice = [];

  //dateList from session
  function generateDateList(startDate, endDate) {
    let currentDate = moment(startDate);

    while (currentDate.isSameOrBefore(endDate, "day")) {
      dateList.push(currentDate.format("D MMM YYYY"));
      currentDate.add(1, "day");
    }
    return dateList;
  }

  function generateCategoryAndPrice(data) {
    return data.map((item) => `${item.category} - $${item.price}`);
  }

  //check if anySalesRoundMatchesConditions == true, else navigate back as user is not allowed to buy tickets now
  if (!anySalesRoundMatchesConditions) {
    showAlertAndNavigateBack();
  } else {
    console.log("========================");
    console.log(filteredSalesRound);

    const quantityForRound = filteredSalesRound[0].allocation;
    console.log(quantityForRound);
    const sessions = concert.sessions;
    const startDate = concert.sessions[0].start;
    const length = concert.sessions.length;
    const endDate = concert.sessions[length - 1].end;
    console.log(startDate);
    console.log(endDate);
    dateList = generateDateList(moment(startDate), moment(endDate));
    console.log(dateList);
    const prices = filteredSalesRound[0].prices;
    console.log("check the prices " + prices);
    categoryAndPrice = generateCategoryAndPrice(prices);
    console.log("here is the title " + filteredSalesRound[0].title);
    console.log("here are the prices " + filteredSalesRound[0].prices[0].price);
    console.log(categoryAndPrice);
  }

  console.log("-----------------");
  console.log(concert.sessions);

  //for dates - get the date from the session, the first array element and the last one
  const { colors } = useContext(ColorContext);
  // STATE VARIABLES to store the text input from the user for quantity and category
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const quantities = ["1", "2", "3", "4", "5"];

  const categories = ["A", "B", "C", "D"];

  //   const [date, setDate] = useState("Date");
  //   const [quantity, setQuantity] = useState("Quantity");
  //   const [category, setCategory] = useState("Category");
  const [date, setDate] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    setIsButtonEnabled(date !== null && quantity !== null && category !== null);
  }, [date, quantity, category]);

  const 

  const getQuantity = (selectedCategory, selectedDate) => {
    // Filter sessions based on the selected date
    const selectedDateSessions = concert.sessions.filter((session) => {
      const sessionDate = moment(session.start).format("D MMM YYYY");
      if (sessionDate == selectedDate) {
        console.log("look at this " + session.capacity[0].available);
        const capacity = session.capacity;
        console.log(capacity);
      }
      return sessionDate === selectedDate;
    });

    // Find the session with the matching category
    const matchingSession = selectedDateSessions.find((session) => {
      return session.capacity.some((capacityEntry) => {
        return capacityEntry.category === selectedCategory;
      });
    });

    if (matchingSession) {
      // If a matching session is found, return the available quantity for the selected category
      const matchingCapacityEntry = matchingSession.capacity.find(
        (capacityEntry) => capacityEntry.category === selectedCategory
      );

      return matchingCapacityEntry.quantity;
    } else {
      // Category not found for the selected date
      return "N/A";
    }
  };

  const styles = StyleSheet.create({
    container: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      paddingHorizontal: 20,
      backgroundColor: colors.background,
    },
    layoutImage: {
      margin: 15,
      backgroundColor: colors.primary,
      width: "100%",
      borderRadius: 15,
      resizeMode: "contain",
      alignSelf: "center",
    },
    subtitle: {
      fontSize: 16,
      fontFamily: "Lato-Bold",
      color: colors.textPrimary,
      paddingVertical: 10,
    },
    buttonContainer: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
    },
  });

  return (
    // ensures that the content is not hidden by the phone's status bar or notches
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
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
            backgroundColor: colors.primary,
            zIndex: 1,
            padding: 20,
          }}
        >
          {/* date picker that works on both iOS and Android */}
          <Text style={styles.subtitle}>Date</Text>
          {/* <View>
                        <DatePicker
                            icon={require("../../assets/soft-ui-pro-react-native-v1.1.1/calendar3x.png")}
                            minDate={new Date()}
                        // maxDate={new Date(2024, 0, 27)}
                        />
                    </View> */}

          {/* <OptionFields
            optionText={date}
            setOption={setDate}
            antIconName="calendar"
            options={date}
          /> */}
          <View>
            <Picker
              selectedValue={date}
              onValueChange={(itemValue) => setDate(itemValue)}
            >
              {dateList.map((date, index) => (
                <Picker.Item key={index} label={date} value={date} />
              ))}
            </Picker>
          </View>

          {/* seat category selection */}
          <Text style={styles.subtitle}>Seat Category</Text>
          {/* <OptionFields
                        optionText={"Category 1"}
                        icon={require("../../assets/soft-ui-pro-react-native-v1.1.1/components3x.png")}
                        onPressFunction={() => {
                            console.log("category option clicked");
                        }}
                        onChangeTextFunction={(text) => {
                            handleCategoryChange(text);
                        }}
                        keyboardType={"numeric"}
                    /> */}
          {/* <OptionFields
            optionText={category}
            setOption={setCategory}
            antIconName={"tag"}
            options={categories}
          /> */}
          <View>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              {categoryAndPrice.map((category, index) => (
                <Picker.Item key={index} label={category} value={category} />
              ))}
            </Picker>
          </View>

          <Text style={{ color: "gray", fontSize: 12, marginTop: 5 }}>
            {/* Selected Category: {category} 
            Selected Date: {date} */}
            Available Quantity: {getQuantity(category, date)}
          </Text>

          {/* quantity selection */}
          <Text style={styles.subtitle}>Quantity</Text>
          {/* <OptionFields
                        optionText={"0"}
                        icon={require("../../assets/soft-ui-pro-react-native-v1.1.1/users3x.png")}
                        onPressFunction={() => {
                            console.log("quantity option clicked");
                        }}
                        onChangeTextFunction={(text) => {
                            handleQuantityChange(text);
                        }}
                        keyboardType={"numeric"}
                    /> */}
          {/* <OptionFields
            optionText={quantity}
            setOption={setQuantity}
            materialIconName={"format-list-numbered"}
            options={quantities}
          /> */}

          {/* button that brings you to the purchase confirmation page */}

          <View style={styles.buttonContainer}>
            <Button
              buttonText={"BOOK NOW"}
              onPressFunction={() => {
                console.log("Book button clicked");
                navigation.navigate("checkoutPage");
              }}
              enableCondition={isButtonEnabled} // condition to be set  when all fields are filled and available
            />
          </View>
        </View>

        <View style={{ height: 20 }} />

        <FooterBlock />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
