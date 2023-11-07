import { View, Image, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ColorContext } from "../../../context";
import { useState, useEffect, useContext } from "react";

export default CheckoutBlock = ({ ticketName, image, }) => {
    const insets = useSafeAreaInsets();
    const {colors} = useContext(ColorContext);

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            borderRadius: 15,
            padding: 20,
            backgroundColor: colors.primary,
        },

        titleStyle: {
            fontSize: 20,
            fontFamily: 'Lato-Bold',
            color: colors.textPrimary,
            alignSelf: 'center',
            marginBottom: 20,
        },

        textStyle: {
            fontSize: 15,
                fontFamily: 'Lato-Bold',
                color: colors.textPrimary,
                margin: 10,
        }
    });

    return (
        < View style={styles.container}>

            {/* Title */}
            <Text style={styles.titleStyle}>
                Confirm Purchase
            </Text>

            {/* Reference Number */}
            <Text style={styles.textStyle}>
                Ref. No.: 123456789
            </Text>

            <View style={{ height: 20 }} />

            {/* Concert Name */}
            <Text style={styles.textStyle}>
                Concert Name
            </Text>

            {/* Concert Date */}
            <Text style={styles.textStyle}>
                Date
            </Text>

            <View style={{ height: 20 }} />

            {/* Category */}
            <Text style={styles.textStyle}>
                Category: xxx
            </Text>

            {/* Quantity */}
            <Text style={styles.textStyle}>
                Quantity: xxx
            </Text>

        </View >
    );
}

