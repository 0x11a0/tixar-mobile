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


export default NewUserRegistrationPage = ({ navigation }) => {

    const [firstNameField, setFirstName] = useState('');
    const [lastNameField, setlastName] = useState('');
    const [emailField, setEmail] = useState('');
    const [credentialCheck, setCredentialCheck] = useState(false);

    const [isVisible, setIsVisible] = useState(true);
    const [checkField, setCheck] = useState(false);

    //onchange functions (what am i suppose to do here?)
    const handleFirstName = (text) => {
        setFirstName(text)
        setCredentialCheck((text !== '') && (emailField !== '')  && (lastNameField !== '') && checkField)
    };
    const handleLastName = (text) => {
        setlastName(text)
        setCredentialCheck((text !== '') && (emailField !== '') && (firstNameField !== '') && checkField);
    };
    const handleEmail = (text) => {
        setEmail(text)
        setCredentialCheck((text !== '') && (firstNameField !== '') && (lastNameField !== '') && checkField);
    }

    const handleCheck = () => {
        setCredentialCheck((firstNameField !== '') && (lastNameField !== '') && (emailField !== '') && 
        !checkField); {/* Not sure why checkfield must be flipped, but it doesnt work otherwise,
                            probably something to do with javascript not running code in order,
                            but rather simultaneously */}
    }

  
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
                        placeholder="Email" />
                </View>

                {/* First Name Input Field */}
                <View style={styles.fieldBox}>
                    <TextInput
                        style={styles.fieldText}
                        onChangeText={handleFirstName}
                        value={firstNameField}
                        placeholder="First Name" />
                </View>

                {/* Last Name Input Field */}
                <View style={styles.fieldBox}>
                    <TextInput
                        style={styles.fieldText}
                        onChangeText={handleLastName}
                        value={lastNameField}
                        placeholder="Last Name" />
                </View>

                {/* Continue Button HEEEEEREEEE THANKS HEHE */}

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
  
  