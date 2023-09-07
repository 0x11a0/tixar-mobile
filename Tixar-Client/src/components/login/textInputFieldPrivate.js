import { useState } from "react";
import { View, TextInput, StyleSheet, Pressable, Image } from "react-native";

export default TextInputFieldPrivate = ({ value, placeholder, onChangeTextFunction, isSecure, setIsSecure }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={styles.fieldBox}>
            <TextInput
                secureTextEntry={isSecure}
                style={styles.fieldText}
                onChangeText={(text) => { onChangeTextFunction(text); }}
                value={value}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <Pressable style={styles.eyeButton}
                onPress={() => { setIsSecure(!isSecure) }}>
                <Image source={isFocused ?
                    (isSecure ?
                        require('../../assets/images/eyeClose.png')
                        : require('../../assets/images/eyeOpen.png')) : null
                }
                    style={styles.eyeIcon} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    fieldBox: {
        flexDirection: 'row',
        height: 56,
        width: '86%',
        borderRadius: 10,
        borderColor: '#D2D6DA',
        borderWidth: 1,
    },
    fieldText: {
        flex: 1,
        left: '25%',
        fontSize: 18,
        fontFamily: 'Lato-Regular',
        color: '#8F8F8F',
        paddingRight: 35,
    },
    eyeIcon: {
        height: 30,
        width: 30,
    },
    eyeButton: {
        right: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});