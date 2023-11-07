import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ColorContext } from "../../../context";
import { useContext } from "react";

export default Card = (props) => {
    const { colors } = useContext(ColorContext);

    const styles = StyleSheet.create({
        cardContainer: {
            backgroundColor: colors.primary,
            marginHorizontal: 15,
            marginTop: 20,
            borderRadius: 14,
            paddingTop: 10,
            paddingBottom: 10,
            position: "absolute",
            width: '85%'
        }
    })

    return (
        <View style={styles.cardContainer}>
            <View>
                {props.children}
            </View>
        </View>
    );
};

