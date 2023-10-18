import { React, useContext } from "react";
import {
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
} from "react-native";
import { ColorContext } from "../../../context";

export default TextInputField = ({
    value, // inital value
    optionText,
    onChangeTextFunction,
    keyboardType,
}) => {
    const { colors } = useContext(ColorContext);

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"} // Choose behavior according to your platform, not sure if need
        >
            <TextInput
                style={[styles.container, {
                    backgroundColor: colors.secondary,
                    color: colors.textPrimary
                }]}
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
        // backgroundColor: Colors.secondary,

        //alignment styles
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",

        //text styles
        fontFamily: "Lato-Regular",
        // color: Colors.dark.textPrimary,
        fontSize: 17,
    },
});
