import { React, useState, useContext } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  SafeAreaViewBase,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StatisticBox from "../../components/verifiedFans/statisticBox";
import ConcertBox from "../../components/verifiedFans/concertBox";
import NextButton from "../../components/new/nextButton";
import { AuthContext, ColorContext } from "../../../context";

export default ViewClubPage = ({ route, navigation }) => {
    const { clubName, artistDescription, key, imageUrl, points } = route.params;
    const { token } = useContext(AuthContext);
    const { colors } = useContext(ColorContext);
    const handleDeletePress = () => {
        fetch(`http://vf.tixar.sg:3001/api/profile/${key}`, {
            method: "DELETE",
            credentials: "include",
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(() => navigation.pop())
            .catch((error) => {
                console.error(error);
            });
    };

    console.log(clubName);
    console.log(artistDescription);
    console.log(imageUrl);
    // console.log(points);

    let image = require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png");
    if (imageUrl) {
        image = { uri: imageUrl };
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.background, }} >
        <View
        style={{ flex: 1,
                 width: "90%",
                 alignItems: "center",
                 alignSelf: "center",
        }} >

        <StatisticBox
        clubName={clubName}
        // artistIcon={require("../../assets/taylorswifticon.png")}
        artistIcon={image}
        artistDescription={artistDescription}
        points={points}
        />

        <ConcertBox
        clubName={"Taylor"}
        monthlyInteractions={40123}
        newFans={16452}
        totalFans={131239543}
        artistIcon={require("../../assets/nationalstadiumicon.png")}
        />

        <NextButton
        buttonText={"Redeem Fan Code Here!"}
        onPressFunction={() => {
            navigation.navigate("redemptionPage");
        }}
        style={(marginTop = 50)}
        />
        <Pressable
        style={styles.deleteButton}
        onPress={handleDeletePress}
        >
        {points !== null && <Text style={styles.deleteButtonText}>Delete</Text> }
        </Pressable>
        </View>

        <View>
        <Text style={[styles.footerText, {color: colors.textSecondary}]}>TIXAR</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // generate button
    generateBackground: {
        width: "86%",
        height: 50,
        borderRadius: 8,
        marginTop: 15,
        alignSelf: "center",
    },
    generateButton: {
        width: "100%",
        height: 50,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    generateText: {
        fontSize: 15,
        fontFamily: "Lato-Bold",
        color: "#3A416F",
    },

    // footer
    footerText: {
        bottom: 15,
        fontFamily: "Lato-Regular",
        fontSize: 12,
        position: "absolute",
        alignSelf: "center",
    },
    deleteButton: {
        paddingVertical: 2,
        borderRadius: 5,
        marginTop: 20,
    },
    deleteButtonText: {
        color: "blue",
        fontSize: 14,
        textAlign: "center",
        textDecorationLine: "underline",
    },
});
