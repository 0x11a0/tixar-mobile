import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, Image, TextInput } from 'react-native';
import ConditionalButton from '../../components/new/conditionalButton';

export default AdminCreateClub = ({ navigation }) => {

    const [NameField, setNameField] = useState("");
    const [descriptionField, setDescriptionField] = useState("");

    const [credentialCheck, setCredentialCheck] = useState(false);

    const nameFieldRef = useRef(null); // Create a ref for the name input field
    const descriptionFieldRef = useRef(null); // Create a ref for the description input field

    const handleNameField = (text) => {
        setNameField(text);
        setCredentialCheck(
            text !== "" && descriptionField !== ""
        );
    }

    const handleDescriptionField = (text) => {
        setDescriptionField(text);
        setCredentialCheck(
            text !== "" && NameField !== ""
        );
    }

    const handlePressFieldBox = (fieldRef) => {
        fieldRef.current && fieldRef.current.focus(); // Focus on the input field when the field box is pressed
    }

    return (

        <SafeAreaView style={styles.container}>

            {/* picture upload field */}
            <Pressable style={styles.thumbnailBox}
                onPress={() => {
                alert("Upload pic!"); //todo: use express to upload
                }}>

                <Image
                    source={require("../../../src/assets/thumbnail2.png")}
                    style={{
                        height: 100,
                        aspectRatio: 1,
                        resizeMode: "contain",
                        // backgroundColor:"blue"
                    }}/>

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
                        value={NameField}
                        placeholder="Club Name"
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
                        ref={descriptionFieldRef} // Assign the ref to the description input field
                    />
                </Pressable>

            </View>

            {/* Next Button */}
            <ConditionalButton
                credentialCheck={credentialCheck}
                navigation={navigation}
            ></ConditionalButton>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#F2F2F2",
    },

    thumbnailBox: {
        marginTop: 20,
        width: "50%",
        aspectRatio: 1,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },

    thumbnail: {
        fontSize: 15,
        fontFamily: "Lato-Bold",
        color: "#66748E",
        // backgroundColor:"green"
    },

    inputContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: "white",
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
        borderColor: "#1A1A1A",
        borderWidth: 1,
    },

    descriptionFieldBox: {
        flex: 1, // Let the description field box take up the remaining space
        width: "86%",
        borderRadius: 10,
        borderColor: "#1A1A1A",
        borderWidth: 1,
        marginTop: 20,
        alignItems: "flex-start", // Align text input to the start (top-left)
        paddingBottom: 20, // Add paddingBottom to create space at the bottom
    },

    fieldText: {
        height: 50,
        paddingLeft: 20,
        fontSize: 18,
        fontFamily: "Lato-Regular",
        color: "#8F8F8F",
    },
});
