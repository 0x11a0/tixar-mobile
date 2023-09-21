import React, { useState, useEffect, useRef } from "react";
import {
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dropdown } from "react-native-element-dropdown";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default CreateConcert = ({ route, navigation }) => {
  const data = [
    { label: "1", value: "01" },
    { label: "2", value: "02" },
    { label: "3", value: "03" },
    { label: "4", value: "04" },
    { label: "5", value: "05" },
    { label: "6", value: "06" },
    { label: "7", value: "07" },
    { label: "8", value: "08" },
  ];

  const [value, setValue] = useState(1);
  const [isFocus, setIsFocus] = useState(false);
  const [categoryHeight, setCategoryHeight] = useState(500);

  const initialCategories = Array.from({ length: 8 }, (_, index) => ({
    name: "",
    price: "",
    key: index + 1,
  }));
  const [categories, setCategories] = useState(initialCategories);

  const handleCategoryChange = (index, text) => {
    const updatedCategories = [...categories];
    updatedCategories[index].name = text;
    setCategories(updatedCategories);
  };

  const handlePriceChange = (index, text) => {
    const updatedCategories = [...categories];
    updatedCategories[index].price = text;
    setCategories(updatedCategories);
  };

  const categoryViews = categories.slice(0, value).map((category) => (
    <View key={category.key} style={styles.categoryFieldBox}>
      <View style={styles.categoryBox}>
        <TextInput
          style={styles.fieldText}
          placeholder={`Category Name ${category.key}:`}
          onChangeText={(text) => handleCategoryChange(category.key - 1, text)}
          value={category.name}
        />
      </View>
      <View style={styles.priceBox}>
        <TextInput
          style={styles.fieldText}
          placeholder="Price:"
          onChangeText={(text) => handlePriceChange(category.key - 1, text)}
          value={category.price}
        />
      </View>
    </View>
  ));

  const scrollViewRef = useRef(null);

  useEffect(() => {
    const newCategoryHeight = 500 + value * 80;
    setCategoryHeight(newCategoryHeight);
  }, [value]);

  const renderLabel = () => {
    if (value || isFocus) {
      return <Text style={[styles.label, isFocus]}>Number of Categories:</Text>;
    }
    return null;
  };

  const [descriptionField, setdescriptionField] = useState("");
  const handleDescription = (text) => {
    setdescriptionField(text);
  };

  const [numberOfCategoryField, setNumberOfCategoryField] = useState("1");
  const handleNumberOfCategory = (text) => {
    setNumberOfCategoryField(text);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollViewContent}
      extraHeight={100}
      enableOnAndroid={true}
      enableAutomaticScroll={true}
    >
      <SafeAreaView
        style={[
          styles.container,
          {
            minHeight: categoryHeight + 300,
          },
        ]}
      >
        <View style={styles.thumbnailBox}>
          <Pressable
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginRight: "7%",
            }}
            onPress={() => {
              alert("Upload pic!"); //todo: use express to upload
            }}
          >
            <Image
              source={require("../../../src/assets/thumbnail2.png")}
              style={{
                height: 190,
                width: 100,
                justifyContent: "center",
                marginLeft: 30,
                resizeMode: "contain",
              }}
            />
          </Pressable>
          <Text style={styles.thumbnail}>Add Thumbnail</Text>
        </View>
        <View
          style={[
            styles.translucentBox,
            {
              minHeight: categoryHeight,
            },
          ]}
        >
          <Text style={styles.subtitle}>Category Details</Text>
          <View style={styles.dropdownFieldBox}>
            <View style={styles.dropDownContainer}>
              {renderLabel()}
              <Dropdown
                style={[styles.dropdown, isFocus]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select" : "..."}
                searchPlaceholder="Search..."
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setValue(item.value);
                  setIsFocus(false);
                  handleNumberOfCategory(item.value);
                }}
                value={numberOfCategoryField}
              />
            </View>
          </View>
          {categoryViews}

          <View style={styles.descriptionFieldBox}>
            <TextInput
              style={styles.descriptionFieldText}
              multiline={true}
              onChangeText={handleDescription}
              placeholder="Category Description"
            />
          </View>
          <SubmitButton
            route={route}
            navigation={navigation}
            numberOfCategoryField={numberOfCategoryField}
            categories={categories}
            descriptionField={descriptionField}
          />
          <Text style={styles.footerText}>TIXAR</Text>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const SubmitButton = ({
  route,
  navigation,
  numberOfCategoryField,
  categories,
  descriptionField,
}) => {
  // Parse numberOfCategoryField to an integer
  const numberOfCategories = parseInt(numberOfCategoryField, 10);

  // Create an array to store error messages for categories with empty fields
  const errorMessages = [];

  // Check if numberOfCategoryField is not empty and categories are not empty
  const isValid =
    numberOfCategoryField !== "" &&
    descriptionField !== "" &&
    categories.every((category, index) => {
      if (index < numberOfCategories) {
        if (category.name === "" || category.price === "") {
          // Add an error message for this category
          errorMessages.push(`Category ${index + 1} has empty fields.`);
          return false;
        }
        return true;
      }
      return true;
    });

  return (
    <LinearGradient
      colors={isValid ? ["#FF0080", "#7928CA"] : ["#E8ECEF", "#E8ECEF"]}
      style={styles.submitBackgroundEnabled}
      start={[0, 0]}
      end={[1, 0]}
    >
      <Pressable
        style={styles.submitButton}
        onPress={() => {
          console.log({
            numberOfCategoryField,
            categories,
            descriptionField,
          });

          if (!isValid) {
            console.log("Not all fields entered");
            // Log the specific error messages for categories with empty fields
            errorMessages.forEach((message) => alert(message));
          }

          console.log(route.name);
        }}
      >
        <Text
          style={isValid ? styles.submitTextEnabled : styles.submitTextDisabled}
        >
          Next
        </Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  categoryView: {
    backgroundColor: "blue",
    flex: 0.5,
  },

  dropDownContainer: {
    backgroundColor: "white",
    padding: 40,
  },
  dropdown: {
    height: 50,
    width: 90,
    borderColor: "#D2D6DA",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
    marginLeft: "auto",
    justifyContent: "center",
  },

  icon: {
    marginRight: 5,
  },

  label: {
    position: "absolute",
    fontSize: 17,
    fontFamily: "Lato-Regular",
    left: 0,
    top: "auto",
    zIndex: 999,
    paddingHorizontal: 8,
    lineHeight: 17,
  },

  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: "transparent",
  },

  headerBox: {
    position: "relative",
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 1,
  },
  title: {
    fontSize: 35,
    fontFamily: "Lato-Bold",
    color: "white",
    marginTop: 40,
  },

  headerImage: {
    marginTop: 30,
    width: "95%",
    height: 280,
    borderRadius: 22,
    resizeMode: "cover",
    position: "absolute",
  },

  profileImage: {
    flex: 0.5,
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginTop: 8,
  },

  thumbnailBox: {
    top: 15,
    height: 200,
    width: "85%",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 15,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "center",
  },

  thumbnail: {
    fontSize: 15,
    fontFamily: "Lato-Bold",
    color: "#66748E",
    bottom: 35,
  },

  translucentBox: {
    width: "85%",
    position: "absolute",
    top: 250,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 15,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "center",
  },

  subtitle: {
    fontSize: 20,
    fontFamily: "Lato-Bold",
    color: "#394051",
    marginTop: 24,
  },

  dropDownContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "#f2f2f2",
  },

  footerText: {
    fontFamily: "Lato-Regular",
    fontSize: 12,
  },

  footerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  dropdownFieldBox: {
    height: 56,
    width: "86%",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    marginTop: 26,
  },

  fieldBox: {
    height: 56,
    width: "86%",
    borderRadius: 10,
    borderColor: "#D2D6DA",
    borderWidth: 1,
    justifyContent: "center",
    marginTop: 26,
  },

  categoryBox: {
    height: 56,
    width: "60%",
    borderRadius: 10,
    borderColor: "#D2D6DA",
    borderWidth: 1,
    justifyContent: "center",
    marginRight: 5,
  },

  priceBox: {
    height: 56,
    width: "40%",
    borderRadius: 10,
    borderColor: "#D2D6DA",
    borderWidth: 1,
    justifyContent: "center",
    marginLeft: 5,
  },

  categoryFieldBox: {
    flexDirection: "row",
    height: 56,
    width: "86%",
    borderRadius: 10,
    // borderColor: '#D2D6DA',
    // borderWidth: 1,
    justifyContent: "center",
    marginTop: 26,
  },

  descriptionFieldBox: {
    height: 150,
    width: "86%",
    borderRadius: 10,
    borderColor: "#D2D6DA",
    borderWidth: 1,
    marginTop: 26,
  },

  descriptionFieldText: {
    left: "5%",
    top: 10,
    fontSize: 18,
    fontFamily: "Lato-Regular",
    color: "#8F8F8F",
    textAlignVertical: "top",
    width: "85%",
  },

  fieldText: {
    left: "5%",
    fontSize: 18,
    fontFamily: "Lato-Regular",
    color: "#8F8F8F",
  },

  submitButton: {
    width: "86%",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },

  submitBackgroundEnabled: {
    marginTop: 55,
    borderRadius: 8,
    width: "86%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },

  resetBackgroundDisabled: {
    marginTop: 55,
    borderRadius: 8,
    width: "86%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8ECEF",
  },

  submitTextEnabled: {
    fontSize: 15,
    fontFamily: "Lato-Bold",
    color: "white",
  },

  submitTextDisabled: {
    fontSize: 15,
    fontFamily: "Lato-Bold",
    color: "#252F40",
  },
});
