import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default ManageFanclubMiniCard = ({ 
    title,
    textDisplay,
    // navigationDestination // Receive the screen name prop
    onPressFunction,
}) => {
    const navigation = useNavigation();
    const [showDeleteButton, setShowDeleteButton] = useState(false);

    return (
        <View>
            <Pressable 
                style={styles.container}
                onPress={() => {
                    // Use the navigationDestination prop as the screen name to navigate to
                    // navigation.navigate(navigationDestination);
                    onPressFunction();
                }}
            >

                {/* information */}
                <View style={styles.information}>
                    <Text style={styles.title}>{title} </Text>
                    <Text style={styles.textDisplay}>{textDisplay} </Text>
                    <Text style={styles.viewMore}>View More </Text>
                </View>
                
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        backgroundColor: "white",
        borderRadius: 15,
        height: '100%',
        width: 190,
    },

    title: {
        fontSize: 20,
        color: '#252F40',
        fontFamily: 'Lato-Bold',
        lineHeight: 26, // Updated line height for title
        marginBottom: 5,
    },

    textDisplay: {
        fontSize: 15,
        color: '#67748E',
        fontFamily: 'Lato-Regular',
        lineHeight: 20, // Updated line height for textDisplay
        marginBottom: 10,
    },

    viewMore: { 
        fontSize: 13,
        color: '#7928CA',
        fontFamily: 'Lato-Regular',
        lineHeight: 18, // Updated line height for viewMore
    },

    information: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 10,
    },
});
