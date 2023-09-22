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
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import CreateAccountButton from "../../../components/login/new/conditionalButton";


export default NewUserRegistrationPage = ({ navigation }) => {

    //states for text input fields
    const [firstNameField, setFirstName] = useState('');
    const [lastNameField, setlastName] = useState('');
    const [emailField, setEmail] = useState('');

    //use to check if all fields are filled
    const [credentialCheck, setCredentialCheck] = useState(false);
  
    // for each text input field, check if all fields are filledm if yes, set credentialCheck to true
    const handleEmail = (text) => {
        setEmail(text)
        setCredentialCheck((text !== '') && (firstNameField !== '') && (lastNameField !== ''));
    }
    const handleFirstName = (text) => {
        setFirstName(text)
        setCredentialCheck((text !== '') && (emailField !== '')  && (lastNameField !== ''))
    };
    const handleLastName = (text) => {
        setlastName(text)
        setCredentialCheck((text !== '') && (emailField !== '') && (firstNameField !== ''));
    };
  
    //rendered items
    return (
      <ImageBackground
        source={require("../../../assets/purpleConcertBackground.png")}
        style={styles.backgroundImage}
        blurRadius={5} // Adjust the blur radius as needed

      >
        <SafeAreaView style={styles.container}>

            {/* Translucent card */}
            <View style={styles.translucentCard}>

                <Text style={styles.cardText}>Create Your Profile.</Text>

                <View style={{ height:'10%' }}></View>

                {/* Email field */}
                <View style={styles.fieldBox}>
                    <TextInput
                        style={styles.fieldText}
                        onChangeText={handleEmail}
                        value={emailField}
                        placeholder="Email" 
                        autoCapitalize='none'/>
                </View>

                {/* First Name Input Field */}
                <View style={styles.fieldBox}>
                    <TextInput
                        style={styles.fieldText}
                        onChangeText={handleFirstName}
                        value={firstNameField}
                        placeholder="First Name"/>
                </View>

                {/* Last Name Input Field */}
                <View style={styles.fieldBox}>
                    <TextInput
                        style={styles.fieldText}
                        onChangeText={handleLastName}
                        value={lastNameField}
                        placeholder="Last Name"/>
                </View>

                {/* Continue Button HEEEEEREEEE THANKS HEHE */}
                <CreateAccountButton
                    credentialCheck={credentialCheck}
                    // emailField={emailField}
                    // firstNameField={firstNameField}
                    // lastNameField={lastNameField}
                    navigation={navigation}>
                </CreateAccountButton>

            </View>

        </SafeAreaView>

      </ImageBackground>
    );
  };
  
  
  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
      width: "100%",
      height: "100%",
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    translucentCard: {
        height: '80%',
        width: '85%',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '25%',
        bottom: 40,
    },

    cardText: {
      fontSize: 20,
      fontWeight: "bold",
      fontFamily: 'Lato-Bold',
      color: "#252F40", 
    },

    //text input field styles
    fieldBox: {
        flexDirection: 'row',
        height: 56,
        width: '86%',
        borderRadius: 10,
        borderColor: '#1A1A1A',
        borderWidth: 1,
        marginTop: 26,
    },
    fieldText: {
        flex: 1,
        left: '25%',
        fontSize: 18,
        fontFamily: 'Lato-Regular',
        color: '#8F8F8F',
        paddingRight: 35,
    },

});
  
  