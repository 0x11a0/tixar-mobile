import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext, ColorContext } from "../../../context";
import { useContext } from "react";
import { AntDesign } from '@expo/vector-icons';

export default FanclubCard = ({
    clubId,
    clubName,
    fanNumber,
    codesActive,
    navigationDestination, // Receive the screen name prop
    imageUrl,
    onPressFunction,
    isMember,
    profiles,
    isLoading,
    setIsLoading,
}) => {
    const navigation = useNavigation();
    const { token } = useContext(AuthContext);
    const { colors } = useContext(ColorContext);
    const [pressed, setPressed] = useState(profiles.includes(clubId));

    const handleAddPress = () => {
        // Handle the delete action here
        // You can add your logic to delete the item
        const requestBody = {
            // Add your data here
            mode: "raw",
            raw: "",
            // Add more key-value pairs as needed
        };
        fetch(`http://vf.tixar.sg:3001/api/club/${clubId}/join`, {
            method: "POST",
            credentials: "include",
            headers: { Authorization: `Bearer ${token}` },
            body: JSON.stringify(requestBody),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("SUCCESSFUL");
                console.log(data);
                //navigation.navigate("vfDashboardPage", { token: token });
            }).then(() => {
                setPressed(true);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    let image = require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png");
    if (imageUrl) {
        image = { uri: imageUrl };
    }

    useEffect(() => {
        setPressed(profiles.includes(clubId));

    }, []);

    return (
        <View>
        <Pressable
        style={[styles.container, {backgroundColor: colors.primary}]}
        onPress={() => {
            // Use the screenName prop as the screen name to navigate to
            // navigation.navigate(navigationDestination);
            onPressFunction();
        }}
        >
        {/* icon */}
        <Image source={image} style={styles.icon} resizeMode="cover" />

        {/* information */}
        <View style={styles.information}>


        <View style={{flexDirection: 'row'}}>
        <Text
        style={[styles.title, {color: colors.textSecondary}]}
        adjustsFontSizeToFit={true}
        numberOfLines={1}
        >
        {" "}
        {clubName}{" "}
        </Text>
        </View>



        <View
        style={{
            justifyContent: "flex-end",
        }}
        >
        <Text style={styles.fanNumber}> Fans: {fanNumber} </Text>
        <Text style={styles.codesActive}>
        {" "}
        Codes Active: {codesActive}{" "}
        </Text>
        </View>
        </View>

        <Pressable onPress={() => {
            if (!isMember) {
                setPressed(true);
                handleAddPress();
            } 
        }}> 
        <AntDesign name={pressed ? 'check' : 'plus'} color={colors.textSecondary} size={30}/>        

        </Pressable>

        <View style={{width: 10}}/>
        </Pressable>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 15,
        height: Dimensions.get("window").height * 0.12,
        marginVertical: 5,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },

    icon: {
        width: 80,
        height: 80,
        borderRadius: 15,
    },

    title: {
        flex: 1,
        fontSize: 20,
        color: "#252F40",
        fontFamily: "Lato-Bold",
        lineHeight: 25,
    },

    fanNumber: {
        fontSize: 15,
        color: "#67748E",
        fontFamily: "Lato-Regular",
        lineHeight: 22,
    },

    codesActive: {
        fontSize: 15,
        color: "#67748E",
        fontFamily: "Lato-Regular",
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

    optionButton: {
        backgroundColor: "green",
        padding: 8,
        borderRadius: 5,
        marginLeft: 10,
    },

    optionButtonText: {
        color: "white",
        textAlign: "center",
    },

    overlay: {
        position: "absolute", // Position the overlay on the parent view with starting coordinates (0, 0, 0, 0)
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "transparent",
    },
});
