import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { ColorContext } from "../../../context";

export default ArtistBlock = ({
    clubName,
    points,
    artistDescription,
    artistIcon,
    onPressFunction,
}) => {
    const [isPressed, setIsPressed] = useState(false);
    const { colors } = useContext(ColorContext);
    const handleHeartPress = () => {
        // Toggle the isPressed state here
        setIsPressed(!isPressed);

        // You can add your logic for favoriting/unfavoriting here
        // For now, I'm just toggling the isPressed state
    };

    let image = require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png");
    if (artistIcon) {
        image = { uri: artistIcon };
    }

    return (
        <Pressable
        style={[styles.container, {backgroundColor: colors.primary}]}
        onPress={() => {
            onPressFunction
                ? onPressFunction()
                : console.log(artistName + " pressed");
            console.log("HERE" + clubName);
            console.log("HERE" + artistIcon);
        }}
        >
        <View style={styles.artistBlock}>
        {/* ICON */}
        <Image source={image} style={styles.artistIcon} resizeMode="cover" />

        {/* TEXT CONTAINER */}
        <View style={styles.artistTextContainer}>
        {/* SPLITS INTO TITLE ROW AND DESCRIPTION ROW */}
        <View style={{ flexDirection: "column" }}>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={[styles.clubName, {color: colors.textSecondary}]} numberOfLines={2}>
        {clubName}
        </Text>

        <Text style={[styles.clubName, {color: colors.textSecondary}]} numberOfLines={1}>
        Your points: {points}
        </Text>
        </View>
        {/* DESCRIPTION ROW */}
        <View style={styles.textConainer}>
        <View style={styles.descriptionContainer}>
        <Text style={[styles.artistDescription, {color: colors.textSecondary}]} numberOfLines={2}>
        {artistDescription}
        </Text>
        </View>

        {/* FAVORITE ICON */}
        <Pressable onPress={handleHeartPress} style={styles.iconBox}>
        {/* <View style={styles.iconBox}> */}
        <Image
        style={[
            styles.favoriteIcon,
            { tintColor: isPressed ? "red" : "#252F40" },
        ]}
        source={require("../../assets/favoriteiconfilled.png")}
        />
        {/* </View> */}
        </Pressable>
        </View>
        </View>
        </View>
        </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: 100,
        borderRadius: 20,
        paddingTop: 5,
        width: "95%",
        marginTop: 15,
        justifyContent: 'center'
    },
    artistIcon: {
        width: 70,
        height: 70,
        borderRadius: 17,
        marginLeft: 5,
        marginRight: 10,
    },

    artistBlock: {
        flexDirection: "row",
    },
    artistTextContainer: {
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
    },
    clubName: {
        fontSize: 15,
        fontFamily: "Lato-Bold",
        color: "#252F40",
        marginRight: 15,
    },
    pointText: {
        fontSize: 14,
        fontFamily: "Lato-Light",
        color: "#252F40",
        textAlign: "left",
        marginRight: 15,
        marginTop: 5,
    },

    // description row + icon
    textConainer: {
        marginTop: 8,
        flexDirection: "row",
        height: 40,
        // backgroundColor: "blue",
    },

    descriptionContainer: {
        flex: 8,
        // backgroundColor: "yellow",
    },

    artistDescription: {
        fontFamily: "Lato-Regular",
        color: "#252F40",
        flex: 8,
    },

    // favourite icon
    iconBox: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "red",
    },
    favoriteIcon: {
        width: 15,
        height: 15,
    },
});
