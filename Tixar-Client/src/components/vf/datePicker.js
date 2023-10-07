import React, { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Pressable, Platform, Text, StyleSheet, View, Dimensions } from "react-native";

export default DatePicker = ({ date, setDate }) => {

    const today = new Date();

    // STATE VARIABLES

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
                    minimumDate={today}
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
                <Pressable style={styles.container}
                    onPress={toggleDatePicker}>

                    {/* displays the date variable in the text input */}
                    <Text style={styles.text}>
                        {date.toDateString()}
                    </Text>

                </Pressable>
            )}

        </View>
    );
};


// STYLES
const styles = StyleSheet.create({

    container: {
        height: 56,
        width: Dimensions.get('window').width * 0.70,
        borderRadius: 10,
        borderColor: '#D2D6DA',
        borderWidth: 1,
        justifyContent: 'center',
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
    },

    text: {
        left: '5%',
        fontSize: 18,
        fontFamily: 'Lato-Regular',
        color: '#8F8F8F',
        paddingRight: 35,
    },
    fieldBox: {
        height: 56,
        width: '86%',
        borderRadius: 10,
        borderColor: '#D2D6DA',
        borderWidth: 1,
        justifyContent: 'center',
    },
});