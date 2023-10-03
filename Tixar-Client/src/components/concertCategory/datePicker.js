import React, { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Pressable, Platform, Text, StyleSheet, TextInput, View, Image } from "react-native";

export default DatePicker = ({
    icon,
    minDate,
    maxDate
}) => {

    // STATE VARIABLES
    const [date, setDate] = useState(minDate); // initialise date to first day
    const [showPicker, setShowPicker] = useState(false); // initialise showPicker to be invisible

    // FUNCTIONS
    // toggle the date picker
    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    }

    // when the date is changed, update the date, and toggle the date picker
    const onChange = ({ type }, selectedDate) => {
        if (type === "set") {
            const currentDate = selectedDate
            setDate(currentDate);

            if (Platform.OS === 'android') {
                toggleDatePicker();
            }
        } else {
            toggleDatePicker();
        }
    }

    // RENDERED ELEMENTS
    return (
        <View>

            {/* show the date picker only when use has clicked text box (showPicker is true) */}
            {showPicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="spinner"
                    onChange={onChange}
                    style={styles.datePicker}
                    minimumDate={minDate}
                    maximumDate={maxDate}
                />
            )}

            {/* show the confirm button only when user has clicked date picker on ios platform */}
            {showPicker && Platform.OS === 'ios' && (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}
                >
                    {/* confirm button updates the date variable state and toggles visibility of date picker */}
                    <Pressable
                        style={styles.dateButton}
                        onPress={onChange}>
                        <Text style={styles.optionText}>Confirm</Text>
                    </Pressable>

                </View>
            )}


            {/* show the the date input box only when user has not clicked */}
            {!showPicker && (
                <Pressable
                    onPress={toggleDatePicker}
                    style={styles.container}
                >
                    {/* displays icon from icon prop */}
                    <Image source={icon} style={styles.icon} />

                    {/* space between icon and text input */}
                    <View style={{ width: "5%" }} />

                    {/* displays the date variable in the text input */}
                    <TextInput
                        // value={date.toDateString()}
                        style={styles.input}
                        placeholder={date.toDateString()}
                        placeholderTextColor="#9398A0"
                        editable={false}
                        onPressIn={toggleDatePicker}
                    />

                </Pressable>
            )}

        </View>
    );
};


// STYLES
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

    datePicker: {
        height: 120,
        marginTop: -10,
    },

    dateButton: {
        flexDirection: "row",
        height: 30,
        width: "20%",
        backgroundColor: "#F2F2F2",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: "2%",
        // backgroundColor: 'blue',
    },

    icon: {
        width: 22,
        height: 22,
        resizeMode: "contain",
        tintColor: "#252F40",
        // backgroundColor: 'red',
    },

    input: {
        fontFamily: "Lato-Regular",
        fontSize: 17,
    },
});
