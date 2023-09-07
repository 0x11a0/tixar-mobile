import { React, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default HeaderBlock = () => {
    return (
        <View style={styles.headerBox}>
            <Image source={require('../../src/assets/soft-ui-pro-react-native-v1.1.1/background3x.png')}
                style={styles.headerImage} />
            <Text style={styles.title}>TIXAR</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerBox: {
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        zIndex: 1,

    },
    title: {
        fontSize: 35,
        fontFamily: 'Lato-Bold',
        color: 'white',
        marginTop: 40,
    },
    headerImage: {
        width: '92%',
        height: 225,
        borderRadius: 22,
        resizeMode: 'contain',
        position: 'absolute',
    },
});