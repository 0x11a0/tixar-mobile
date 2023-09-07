import { View, TextInput, StyleSheet } from "react-native";

export default TextInputField = ({ value, placeholder, onChangeTextFunction }) => {
    return (
        <View style={styles.fieldBox}>
            <TextInput
                style={styles.fieldText}
                onChangeText={(text) => { onChangeTextFunction(text); }}
                value={value}
                placeholder={placeholder}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    fieldBox: {
        height: 56,
        width: '86%',
        borderRadius: 10,
        borderColor: '#D2D6DA',
        borderWidth: 1,
        justifyContent: 'center',
    },
    fieldText: {
        left: '5%',
        fontSize: 18,
        fontFamily: 'Lato-Regular',
        color: '#8F8F8F',
        paddingRight: 35,
    },
});