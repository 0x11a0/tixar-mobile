import { useContext } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { ColorContext } from "../../../context";

export default Button = ({ buttonText, enableCondition, onPressFunction }) => {
    const {colors} = useContext(ColorContext);

    return (
        <Pressable
            style={styles.button}
            backgroundColor={enableCondition ? colors.buttonEnabled : colors.buttonDisabled}
            onPress={enableCondition
                ? (() => { onPressFunction() })
                : (() => { console.log('button disabled') })} >

            <Text style={{
                fontSize: 15,
                fontFamily: 'Lato-Bold',
                color: enableCondition ? colors.textAccent : colors.textDisabled,
            }}>
                {buttonText}
            </Text>
        </Pressable>
    )
}



const styles = StyleSheet.create({

    button: {
        borderRadius: 25,
        width: 300,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
});