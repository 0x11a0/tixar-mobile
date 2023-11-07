import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Card = (props) => {
    return (
        <View style={styles.cardContainer}>
            <View>
                {props.children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 15,
        marginTop: 20,
        borderRadius: 14,
        paddingTop: 10,
        paddingBottom: 10,
        position: "absolute",
        width: '85%'
    }
})