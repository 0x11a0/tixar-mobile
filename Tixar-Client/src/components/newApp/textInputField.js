import React from "react";
import { colors } from "../../colors";
import {
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";


export default TextInputField = ({
  value, // inital value
  optionText,
  onChangeTextFunction,
  keyboardType,
}) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Choose behavior according to your platform, not sure if need
    >
      <TextInput
        style={styles.container}
        onChangeText={(text) => {
          onChangeTextFunction(text);
        }}
        value={value}
        placeholder={optionText}
        placeholderTextColor={colors.textDisabled}
        keyboardType={keyboardType}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    //general styles
    height: 50,
    width: 300,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.secondary,

    //alignment styles
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",

    //text styles
    fontFamily: "Lato-Regular",
    color: colors.textPrimary,
    fontSize: 17,
  },
});
