import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default ManageFanclubCard = ({ 
    clubName,
    description,
    imageUrl,
}) => {

    let image = require('../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png');
    if (imageUrl) {
        image = { uri: imageUrl };
    }

    return (
        <View style={(styles.container)}>
            
            {/* icon */}
            <Image
                source={image}
                style={styles.icon}
                resizeMode="cover"
            />

            {/* information */}
            <View style={styles.information}>
                <Text style={styles.title}>{clubName} </Text>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.description}>{description} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 15,
        height: 200,
        margin: 20,
        padding: 10,
    },

    icon: {
        width: "40%",
        height: "100%",
        borderRadius: 15,
    },

    title: {
        fontSize: 20,
        color: '#252F40',
        fontFamily: 'Lato-Bold',
        lineHeight: 24, // Adjusted line height for better alignment
        marginBottom: 10,
    },

    description: {
        fontSize: 12,
        color: '#67748E',
        fontFamily: 'Lato-Regular',
        lineHeight: 16,
    },

    descriptionTitle: { 
        fontSize: 15,
        color: '#67748E',
        fontFamily: 'Lato-Regular',
        lineHeight: 18, // Adjusted line height for better alignment
        marginBottom: 5,
    },

    information: {
        flex: 1,
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingLeft: 10,
    },
});
