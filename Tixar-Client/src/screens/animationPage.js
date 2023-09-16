import { View, Text, Animated, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default AnimationPage = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'red',
            marginTop: insets.top,
            paddingBottom: insets.bottom,
            paddingRight: insets.right,
            paddingLeft: insets.left,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{
                backgroundColor: 'green'
            }}>
                <Text style={styles.text}>
                    Loading
                </Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Lato-Bold',
        fontSize: 30,
    }
});