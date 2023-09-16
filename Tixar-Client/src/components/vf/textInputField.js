import { View, TextInput, StyleSheet, Dimensions } from "react-native";

export default TextInputField = ({ value, placeholder, onChangeTextFunction, keyboardType }) => {
    return (
        <View style={styles.fieldBox}>
            <TextInput
                style={styles.fieldText}
                onChangeText={(text) => { onChangeTextFunction(text); }}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    fieldBox: {
        height: 56,
        width: Dimensions.get('window').width * 0.70,
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