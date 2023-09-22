import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

export default FanCard = ({ 
    fanName,
    fanPoints,
}) => {

    const [showDeleteButton, setShowDeleteButton] = useState(false);

    const handleHamburgerPress = () => {
        setShowDeleteButton(!showDeleteButton);
    }

    const handleDeletePress = () => {
        // Handle the delete action here
        // You can add your logic to delete the item
        console.log('Delete button pressed');
    }

    return (
        <View>
            <Pressable 
                style={styles.container}
            >

                {/* information */}
                <View style={styles.information}>
                    <Text style={styles.title}>{fanName} </Text>
                    <Text style={styles.fanPoints}>Verified Fan Points: {fanPoints} </Text>
                </View>

                {/* hamburger menu icon, it dissapears when delete button is visible */}
                {!showDeleteButton && (
                       <Pressable
                       style={styles.hamburgerMenuContainer}
                       onPress={handleHamburgerPress}
                   >
                       <Image
                           source={require("../../assets/hamburgerMenu.png")}
                           style={styles.hamburgerMenuIcon}
                           resizeMode="cover"
                       />
                   </Pressable>
                )}
             

                {/* Transparent overlay covering the entire screen when delete button is shown */}
                {showDeleteButton && (
                    <Pressable
                        style={styles.overlay}
                        onPress={handleHamburgerPress} // Handle presses on the overlay to hide the delete button
                    />
                )}

                {/* delete button */}
                {showDeleteButton && (
                    <Pressable
                        style={styles.deleteButton}
                        onPress={handleDeletePress}
                    >
                        <Text style={styles.deleteButtonText}>Delete</Text>
                    </Pressable>
                )}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 15,
        height: 70,
        marginTop: 5,
        marginBottom: 5,
        marginHorizontal: 10,
        padding: 10,
    },

    title: {
        fontSize: 20,
        color: '#252F40',
        fontFamily: 'Lato-Regular',
        lineHeight: 35,
    },

    fanPoints: {
        fontSize: 15,
        color: '#67748E',
        fontFamily: 'Lato-Light',
        lineHeight: 22,
    },

    information: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 10,
    },

    hamburgerMenuContainer: {
        padding: 5,
        borderRadius: 5,
    },

    hamburgerMenuIcon: {
        width: 30,
        height: 30,
        alignSelf: "center",
    },

    deleteButton: {
        backgroundColor: "red",
        padding: 8,
        borderRadius: 5,
        marginLeft: 10,
    },

    deleteButtonText: {
        color: "white",
        textAlign: "center",
    },

    overlay: {
        position: 'absolute', // Position the overlay on the parent view with starting coordinates (0, 0, 0, 0)
        top: 0, 
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
    },
});
