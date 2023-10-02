import { React, useState } from "react";
import {
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DatePicker from "../../components/admin/datePicker";

export default CreateConcertPage = ({ route, navigation }) => {
  const [nameField, setNameField] = useState("");
  const handleName = (text) => {
    setNameField(text);
  };

  const [artistField, setArtistField] = useState("");
  const handleArtist = (text) => {
    setArtistField(text);
  };

  const [locationField, setLocationField] = useState("");
  const handleLocation = (text) => {
    setLocationField(text);
  };

  const [startDateField, setStartDateField] = useState("");
  const handleStartDateChange = (text) => {
    console.log("Start Date Changed:", text);
    setStartDateField(text);
  };

  const [endDateField, setEndDateField] = useState("");
  const handleEndDateChange = (text) => {
    console.log("End Date Changed:", text);
    setEndDateField(text);
  };

  const [descriptionField, setdescriptionField] = useState("");
  const handleDescription = (text) => {
    setdescriptionField(text);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <SafeAreaView style={styles.container}>
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

        <View style={styles.translucentBox}>
          <Text style={styles.subtitle}>Concert Details</Text>
          <View style={styles.fieldBox}>
            <TextInput
              style={styles.fieldText}
              onChangeText={handleName}
              value={nameField}
              placeholder="Concert Name"
            />
          </View>
          <View style={styles.fieldBox}>
            <TextInput
              style={styles.fieldText}
              onChangeText={handleArtist}
              value={artistField}
              placeholder="Artist/Band Name"
            />
          </View>
          <View style={styles.fieldBox}>
            <TextInput
              style={styles.fieldText}
              onChangeText={handleLocation}
              value={locationField}
              placeholder="Location"
            />
          </View>
          {/* date selection */}
          <Text style={styles.datePickerSubtitle}>Start Date</Text>

          <View>
            <DatePicker
              icon={require("../../assets/soft-ui-pro-react-native-v1.1.1/calendar3x.png")}
              onDateChange={handleStartDateChange}
            />
          </View>
          {/* date selection */}
          <Text style={styles.datePickerSubtitle}>End Date</Text>

          <View>
            <DatePicker
              icon={require("../../assets/soft-ui-pro-react-native-v1.1.1/calendar3x.png")}
              onDateChange={handleEndDateChange}
            />
          </View>
          <View style={styles.descriptionFieldBox}>
            <TextInput
              style={styles.descriptionFieldText}
              multiline={true}
              onChangeText={handleDescription}
              value={descriptionField}
              placeholder="Concert Description"
            />
          </View>

          <SubmitButton
            route={route}
            navigation={navigation}
            nameField={nameField}
            artistField={artistField}
            locationField={locationField}
            startDateField={startDateField}
            endDateField={endDateField}
            descriptionField={descriptionField}
          />
        </View>
        <Text style={styles.footerText}>TIXAR</Text>
      </SafeAreaView>
    </ScrollView>
  );
};

const SubmitButton = ({
  route,
  navigation,
  nameField,
  artistField,
  locationField,
  startDateField,
  endDateField,
  descriptionField,
}) => {
  let isValid =
    nameField !== "" &&
    artistField !== "" &&
    locationField !== "" &&
    startDateField !== "" &&
    endDateField !== "" &&
    descriptionField !== "";
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
            nameField,
            artistField,
            locationField,
            startDateField,
            endDateField,
            descriptionField,
          });
          if (
            nameField === "" ||
            artistField === "" ||
            locationField === "" ||
            startDateField === "" ||
            endDateField === "" ||
            descriptionField === ""
          ) {
            console.log("Not all fields entered");
          }
          //   navigation.navigate("CreateCategoriesPage");
          alert("Navigate to category page");
          console.log("next page");
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
    height: "20%",
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
    height: "80%",
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

  datePickerSubtitle: {
    fontSize: 15,
    fontFamily: "Lato-Bold",
    color: "#394051",
    marginTop: 15,
    marginBottom: 5,
  },

  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "#f2f2f2",
    height: 1050,
  },

  footerText: {
    bottom: 15,
    fontFamily: "Lato-Regular",
    fontSize: 12,
    position: "absolute",
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

  descriptionFieldBox: {
    height: 150,
    width: "86%",
    borderRadius: 10,
    borderColor: "#D2D6DA",
    borderWidth: 1,
    // justifyContent: 'center',
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
