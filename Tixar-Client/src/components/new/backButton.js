import { React, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
  ImageBackground,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  navigation,
} from "react-native";

export default BackButton = ({ navigation }) => {
    return (
            <View style={styles.backButton}>
            {/* the button itself */}
            <Pressable 
                //on press function
                onPress={() => {
                    console.log("returning to login page")
                    navigation.goBack();
                }} >
                    <Image style={styles.backIcon} source={require('../../assets/backArrowBlack.png')} />
                    
            </Pressable>
            </View>

    )
}

styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: '5%',
        left: '5%',
    },

    backIcon: {
        width: 30,
        height: 30,
    },
})