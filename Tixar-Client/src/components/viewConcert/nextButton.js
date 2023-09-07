import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text, StyleSheet } from "react-native";

export default NextButton = ({ buttonText, onPressFunction, buttonHeight }) => {
    return (
        <LinearGradient colors={['#FF0080', '#7928CA']}
            style={{
                borderRadius: 8,
                width: '100%',
                height: buttonHeight ? buttonHeight : 40,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
            }}
            start={[0, 0]} end={[1, 0]}>

            <Pressable style={styles.button}
                onPress={() => { onPressFunction(); }} >

                <Text style={styles.buttonText}>
                    {buttonText}
                </Text>

            </Pressable>

        </LinearGradient >
    )
}

const styles = StyleSheet.create({

    button: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 15,
        fontFamily: 'Lato-Bold',
        color: 'white',
    }
});