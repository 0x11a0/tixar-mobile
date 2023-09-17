import React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";

export default FilterButton = ({}) => {

    // Function to handle the filter button press
    const handleFilterPress = () => {
        console.log("filter button clicked");
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={handleFilterPress} style={styles.buttonContainer}>
                <Image
                    source={require("../../assets/sort.png")}
                    style={styles.icon}
                    resizeMode="cover"
                />
                <Text style={styles.buttonText}>ABC</Text>
            </Pressable>
        </View>
    );
};

styles = StyleSheet.create({
    buttonContainer: {
        // backgroundColor: 'red',
        height: 30,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 20,
    },

    icon: {
        width: 20,
        height: 20,
    },

    buttonText: {
        fontFamily: 'Lato-semibold',
        fontSize: 14,
        fontWeight: '500',
        fontStyle: 'normal',
        letterSpacing: 0.25,
        color: '#000000',
        marginLeft: 5,
    },
});
