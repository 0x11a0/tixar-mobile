import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import ConditionalButton from "../../components/new/conditionalButton";
import Button from "../../components/newApp/button";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { AuthContext } from "../../../context";
import { useContext } from "react";
import { ColorContext } from "../../../context";

export default CreateClubPage = ({ route, navigation }) => {
  const { colors } = useContext(ColorContext);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: colors.background,
    },

    thumbnailBox: {
      marginTop: 20,
      width: "50%",
      aspectRatio: 1,
      backgroundColor: colors.primary,
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
    },

    thumbnail: {
      fontSize: 15,
      fontFamily: "Lato-Bold",
      color: colors.textDisabled,
      // backgroundColor:"green"
    },

    inputContainer: {
      flex: 1,
      width: "100%",
      backgroundColor: colors.primary,
      borderRadius: 15,
      width: "90%",
      marginTop: 20,
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingVertical: 20, // Add paddingBottom to create space at the bottom
    },

    // text input field styles
    clubNameFieldBox: {
      flexDirection: "row",
      height: 56,
      width: "86%",
      borderRadius: 10,
      backgroundColor: colors.secondary,
    },

    descriptionFieldBox: {
      flex: 1, // Let the description field box take up the remaining space
      width: "86%",
      borderRadius: 10,
      backgroundColor: colors.secondary,
      marginTop: 20,
      alignItems: "flex-start", // Align text input to the start (top-left)
      paddingBottom: 20, // Add paddingBottom to create space at the bottom
    },

    fieldText: {
      height: 50,
      paddingLeft: 20,
      fontSize: 18,
      fontFamily: "Lato-Regular",
      color: colors.textPrimary,
    },

    // descriptionFieldText: {
    //   flex: 1,
    //   paddingLeft: 20,
    //   fontSize: 18,
    //   fontFamily: "Lato-Regular",
    //   color: colors.textPrimary,
    //   textAlignVertical: "top", // Align text to the top-left
    // },
  });

  const { token } = useContext(AuthContext);

  let image = require("../../../src/assets/thumbnail2.png");
  const handleDocumentSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
    });

    // let result = await DocumentPicker.getDocumentAsync({
    //     allowsEditing: true,
    // });
    // console.log(result);

    // if (!result.canceled) {
    //     image = require({ uri: result.uri });
    // }
  };
  const [nameField, setNameField] = useState("");
  const [descriptionField, setDescriptionField] = useState("");

  const [credentialCheck, setCredentialCheck] = useState(false);

  const nameFieldRef = useRef(null); // Create a ref for the name input field
  const descriptionFieldRef = useRef(null); // Create a ref for the description input field

  const handleNameField = (text) => {
    setNameField(text);
    setCredentialCheck(text !== "" && descriptionField !== "");
  };

  const handleDescriptionField = (text) => {
    setDescriptionField(text);
    setCredentialCheck(text !== "" && nameField !== "");
  };

  const handlePressFieldBox = (fieldRef) => {
    fieldRef.current && fieldRef.current.focus(); // Focus on the input field when the field box is pressed
  };

  const body = {
    name: nameField,
    description: descriptionField,
  };

  const createClub = () => {
    fetch("http://vf.tixar.sg/api/club", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then(() => console.log("created club"))
      .catch((error) => console.error(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* picture upload field */}
      <Pressable
        style={styles.thumbnailBox}
        onPress={() => {
          // alert("Upload pic!"); //todo: use express to upload
          handleDocumentSelection();
        }}
      >
        <Image
          source={image}
          style={{
            height: 100,
            aspectRatio: 1,
            resizeMode: "contain",
            // backgroundColor:"blue"
          }}
        />

        <Text style={styles.thumbnail}>Add Thumbnail</Text>
      </Pressable>

      {/* container to house all input fields */}
      <View style={styles.inputContainer}>
        {/* name box */}
        <Pressable
          style={styles.clubNameFieldBox}
          onPress={() => handlePressFieldBox(nameFieldRef)} // Handle press for the name field box
        >
          <TextInput
            style={styles.fieldText}
            onChangeText={handleNameField}
            value={nameField}
            placeholder="Club Name"
            placeholderTextColor={colors.textDisabled}
            ref={nameFieldRef} // Assign the ref to the name input field
          />
        </Pressable>

        {/* description box */}
        <Pressable
          style={styles.descriptionFieldBox}
          onPress={() => handlePressFieldBox(descriptionFieldRef)} // Handle press for the description field box
        >
          <TextInput
            style={styles.fieldText}
            onChangeText={handleDescriptionField}
            value={descriptionField}
            placeholder="Description..."
            placeholderTextColor={colors.textDisabled}
            ref={descriptionFieldRef} // Assign the ref to the description input field
            multiline={true} // Allow multiple lines
          />
        </Pressable>
      </View>

      {/* Next Button */}
      <Button
        buttonText={"Continue"}
        onPressFunction={() => {
          createClub();
          navigation.navigate("adminDashboardPage");
        }}
        enableCondition={credentialCheck}
      />
      {/* <ConditionalButton
        credentialCheck={credentialCheck}
        navigation={navigation}
        onPressFunction={() => {
          createClub();
          //   console.log(nameField, descriptionField);
        }}
      ></ConditionalButton> */}
    </SafeAreaView>
  );
};
