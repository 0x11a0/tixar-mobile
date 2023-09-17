import React from "react";
import { Pressable, Text, StyleSheet, Image, View, TextInput, KeyboardAvoidingView } from "react-native";

export default OptionField = ({
  value,
  onChangeTextFunction,
  optionText,
  icon,
  onPressFunction,
  keyboardType,
}) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Choose behavior according to your platform
    >
      <Pressable
        style={styles.container}
        onPress={() => {
          onPressFunction();
        }}
      >
        <Image source={icon} style={styles.icon} />

        <View style={{ width: "5%" }} />

        <TextInput
          style={styles.optionText}
          onChangeText={(text) => {
            onChangeTextFunction(text);
          }}
          value={value}
          placeholder={optionText}
          keyboardType={keyboardType}
        />
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "#D2D6DA",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: "5%",
  },
  optionText: {
    fontFamily: "Lato-Regular",
    color: "#9398A0",
    fontSize: 17,
    width: "90%",
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    tintColor: "#252F40",
  },
});
