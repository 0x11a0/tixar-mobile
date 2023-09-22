import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default FanclubCard = ({ 
    clubName,
    fanNumber,
    codesActive,
    navigationDestination // Receive the screen name prop
}) => {
    const navigation = useNavigation();

    return (
        <Pressable 
            style={styles.container}
            onPress={() => {
                // Use the screenName prop as the screen name to navigate to
                navigation.navigate(navigationDestination);
            }}
        >
            {/* icon */}
            <Image
                source={require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png")}
                style={styles.icon}
                resizeMode="cover"
            />

            <View style={styles.information}>
                <Text style={styles.title}> {clubName} </Text>
                <Text style={styles.fanNumber}> Fans: {fanNumber} </Text>
                <Text style={styles.codesActive}> Codes Active: {codesActive} </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignContent: "flex-start",
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 15,
        height: 100,
        marginTop: 5,
        marginBottom: 5,
        marginHorizontal: 10, // space outside on sides of the card
        padding: 10, // space inside the card
    },

    icon: {
        width: 80,
        height: 80,
        borderRadius: 15,
    },
    pressableContent: {
        flex: 1,
        padding: 0,
    },
    title: {
        fontSize: 20,
        color: '#252F40',
        fontFamily: 'Lato-Bold',
        lineHeight: 35,
    },
    fanNumber: {
        fontSize: 15,
        color: '#67748E',
        fontFamily: 'Lato-Regular',
        lineHeight: 22,
    },
    codesActive: { 
        fontSize: 15,
        color: '#67748E',
        fontFamily: 'Lato-Regular',
        lineHeight: 22,
    },
    information: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 10,
        // backgroundColor: "blue",
    },
    
});
