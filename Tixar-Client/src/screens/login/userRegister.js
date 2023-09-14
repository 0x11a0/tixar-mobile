import { React, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBlockRegister from '../../components/login/headerBlockRegistration';


export default UserRegistrationPage = ({navigation}) => {
    const [nameField, setName] = useState('');
    const [loginField, setLogin] = useState('');
    const [passwordField, setPassword] = useState('');
    const [credentialCheck, setCredentialCheck] = useState(false);

    const handleName = (text) => {
        setName(text)
        setCredentialCheck((text !== '') && (passwordField !== '')  && (loginField !== '') && checkField)
    };

    const handleLogin = (text) => {
        setLogin(text)
        setCredentialCheck((text !== '') && (passwordField !== '') && (nameField !== '') && checkField);
    };
    const handlePassword = (text) => {
        setPassword(text);
        setCredentialCheck((text !== '') && (loginField !== '') && (nameField !== '') && checkField);
    };

    const handleCheck = () => {
        setCredentialCheck((passwordField !== '') && (loginField !== '') && (nameField !== '') && 
        !checkField); {/* Not sure why checkfield must be flipped, but it doesnt work otherwise,
                            probably something to do with javascript not running code in order,
                            but rather simultaneously */}
    }

    const [isVisible, setIsVisible] = useState(true);
    const [checkField, setCheck] = useState(false);

    

    return (

        <SafeAreaView style={styles.container}>
            <HeaderBlockRegister navigation={navigation}/>

                <View style={styles.translucentBox}>

                    {/* Login/Register field */}
                    <View style={styles.subtitleRow}>
                        <LoginButton navigation={navigation}/>
                        <Text style={styles.subtitleCentre}>|</Text>
                        <Text style={styles.subtitleRegister}>Register</Text>
                    </View>

                    {/* Name field */}
                    <View style={styles.fieldBox}>
                        <TextInput
                            style={styles.fieldText}
                            onChangeText={handleName}
                            value={nameField}
                            placeholder="Name" />
                    </View>

                    {/* Email field */}
                    <View style={styles.fieldBox}>
                        <TextInput
                            style={styles.fieldText}
                            onChangeText={handleLogin}
                            value={loginField}
                            placeholder="Email" />
                    </View>

                    {/* Password field */}
                    <View style={styles.fieldBox}>
                        <TextInput
                            secureTextEntry={isVisible}
                            style={styles.fieldText}
                            onChangeText={handlePassword}
                            value={passwordField}
                            placeholder="Password" />
                        <EyeButton isVisible={isVisible} setIsVisible={setIsVisible} />
                    </View>

                    {/* Terms and conditions row */}
                    <View style={styles.checkRow}>
                        <CheckBox checkField={checkField} setCheck={setCheck} handleCheck={handleCheck}/>
                        <Text style={styles.checkText}>I agree to the Terms and Conditions</Text>
                    </View>

                    {/* Create Account button */}
                    <CreateAccountButton credentialCheck={credentialCheck} loginField={loginField} 
                        navigation={navigation}/>

                </View>

                
                {/* TIXAR footer */}
                <View>
                    <Text style={styles.footerText}>TIXAR</Text>
                </View>

        </SafeAreaView>
    )

}

const LoginButton = ({navigation}) => {
    return (
        <Pressable style = {styles.loginButton}
            onPress={() => {
                console.log('Navigating to user login page');
                navigation.navigate('UserLoginPage');
            }}>
            <Text style = {styles.subtitleLogin}>Login</Text>
        </Pressable>                
    )
}

const CreateAccountButton = ({ credentialCheck, loginField , navigation}) => {
    return (
        <LinearGradient colors={
            credentialCheck ?
                ['#FF0080', '#7928CA'] :
                ['#E8ECEF', '#E8ECEF']}
            style={styles.loginBackgroundEnabled}
            start={[0, 0]} end={[1, 0]}>
            <Pressable style={styles.CreateAccountButton}
                onPress={() => {
                    if (credentialCheck) {
                        // Add register account here
                        console.log('Creating account for "' + loginField + '"');
                        navigation.popToTop();
                    } else {
                        console.log('button disabled');
                    }
                }} >
                <Text style={credentialCheck ?
                    styles.loginTextEnabled
                    : styles.loginTextDisabled}>
                    Create Account</Text>
            </Pressable>
        </LinearGradient >
    )
}

const CheckBox = ({ checkField, setCheck, handleCheck }) => {
    return (
        <Pressable style={styles.checkBox}
            onPress={() => {
                    setCheck(!checkField);
                    handleCheck();
                }}>
            <Image source={checkField ? 
                require('../../assets/checkicon.png')
                : null} style={styles.checkIcon}></Image>
        </Pressable>
    );
}

const EyeButton = ({ isVisible, setIsVisible }) => {
    return (
        <Pressable style={styles.eyeButton}
            onPress={() => { setIsVisible(!isVisible) }}>
            <Image source={isVisible ?
                require('../../assets/eyeClose.png')
                : require('../../assets/eyeOpen.png')}
                style={styles.eyeIcon} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderTopWidth: 40,
        borderColor: '#f2f2f2',
    },
    translucentBox: {
        height: '80%',
        width: '85%',
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 15,
        zIndex: 3,
        alignItems: 'center',
        bottom: 40,
    },
    footerText: {
        bottom: 15,
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        position: 'absolute',
        alignSelf:'center',
    },

    // Check row
    checkRow:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
    },
    checkBox: {
        borderBlockColor: 'grey',
        borderRadius: 5,
        borderWidth: 0.5,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkText: {
        paddingLeft: 10,
        fontFamily: 'Lato-Regular',
        fontSize: 14,
    },
    checkIcon: {
        height: 15,
        width: 15,
    },

    // Login/register stuff
    subtitleLogin: {
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        color: '#67748E',
        textAlign: 'center',
        padding: 5,
        paddingLeft: 20,
    },
    loginButton: {
        flex: 1,
        alignSelf:'center',
        textAlign:'center',
    },
    subtitleRegister: {
        flex: 1,
        fontSize: 20,
        fontFamily: 'Lato-Bold',
        textDecorationLine: 'underline',
        color: '#252F40',
        textAlign: 'center',
        padding: 5,
        paddingRight: 20,
    },
    subtitleCentre: {
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        color: '#67748E',
        padding: 5,
    },
    subtitleRow: {
        flexDirection: 'row',
        paddingTop: 40,
        justifyContent: 'center',
        
    },

    // Field stuff
    fieldBox: {
        flexDirection: 'row',
        height: 56,
        width: '86%',
        borderRadius: 10,
        borderColor: '#D2D6DA',
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

    // Eye stuff
    eyeIcon: {
        height: 30,
        width: 30,
    },
    eyeButton: {
        right: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Login button stuff
    emailButton: {
        width: '86%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginBackgroundEnabled: {
        marginTop: 55,
        borderRadius: 8,
        width: '86%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginBackgroundDisabled: {
        marginTop: 55,
        borderRadius: 8,
        width: '86%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8ECEF',
    },
    loginTextEnabled: {
        fontSize: 15,
        fontFamily: 'Lato-Bold',
        color: 'white',
    },
    loginTextDisabled: {
        fontSize: 15,
        fontFamily: 'Lato-Bold',
        color: '#252F40',
    },
});