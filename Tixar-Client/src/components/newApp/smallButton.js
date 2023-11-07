import React, { useContext, useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { ColorContext } from "../../../context";

export default SmallButton = ({ buttonText, enableCondition, onPressFunction }) => {
    const { colors } = useContext(ColorContext);
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    const scaleStyle = {
        transform: [{ scale: isPressed ? 0.95 : 1 }], // Scale down when pressed
    };

    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                enableCondition // If button is enabled, set background color to enabled color, else set to disabled color
                    ? { backgroundColor: colors.buttonEnabled }
                    : { backgroundColor: colors.buttonDisabled },
                
                enableCondition && isPressed && scaleStyle, // Scale down when pressed ony if button is enabled (feedback)
            ]}
            onPress={enableCondition
                ? () => onPressFunction()
                // ? () => console.log('button enabled')
                : () => console.log('button disabled')}
            onPressIn={handlePressIn} // Scale down when pressed
            onPressOut={handlePressOut} // Scale back up when released
        >
            <Text
                style={{
                    fontSize: 15,
                    fontFamily: 'Lato-Bold',
                    color: enableCondition ? colors.textAccent : colors.textDisabled,
                }}
            >
                {buttonText}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        width: '47%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
});
