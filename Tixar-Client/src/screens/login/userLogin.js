import { React, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBlock from '../../components/login/headerBlock';


export default UserLoginPage = ({navigation}) => {
    const [loginField, setLogin] = useState('');
    const [passwordField, setPassword] = useState('');
    const [credentialCheck, setCredentialCheck] = useState(false);

    const handleLogin = (text) => {
        setLogin(text)
        setCredentialCheck((text !== '') && (passwordField !== ''));
    };
    const handlePassword = (text) => {
        setPassword(text);
        setCredentialCheck((text !== '') && (loginField !== ''));
    };

    const [isVisible, setIsVisible] = useState(true);

    return (

        <SafeAreaView style={styles.container}>
            <HeaderBlock navigation={navigation}/>

                <View style={styles.translucentBox}>

                    {/* Login/Register field */}
                    <View style={styles.subtitleRow}>
                            <Text style={styles.subtitleLogin}>Login</Text>
                            <Text style={styles.subtitleCentre}>|</Text>
                            <RegisterButton navigation={navigation}/>
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

                    {/* Forget password button */}
                    <View style = {styles.forgetRow}>
                        <ForgotPasswordButton navigation={navigation}/>
                    </View>


                    {/* Login button */}
                    <LoginButton credentialCheck={credentialCheck} loginField={loginField}
                        navigation={navigation} />

                    {/* OR row */}
                    <View style = {styles.orRow}>
                        <View style={styles.orLine}></View>
                        <Text style = {styles.orText}>or</Text>
                        <View style={styles.orLine}></View>
                    </View>

                    {/* Auth 2.0 */}
                    <View style = {styles.authRow}>
                        <FacebookAuthButton/>
                        <AppleAuthButton/>
                        <GoogleAuthButton/>
                    </View>

                </View>

                
                {/* TIXAR footer */}
                <View>
                    <Text style={styles.footerText}>TIXAR</Text>
                </View>

        </SafeAreaView>
    )

}

const RegisterButton = ({navigation}) => {
    return (
        <Pressable style = {styles.registerButton}
            onPress={() => {
                console.log('Navigating to user registration page');
                navigation.navigate('UserRegistrationPage');
            }}>
            <Text style = {styles.subtitleRegister}>Register</Text>
        </Pressable>                
    )
}

const AppleAuthButton = () => {
    return (
            <Pressable style = {styles.authBox}
                onPress={() => {
                    console.log('Apple button pressed');
                }}>
                <Image source={require('../../assets/appleicon.png')}
                    style={styles.authIcon} />

            </Pressable>
    )
}

const FacebookAuthButton = () => {
    return (
            <Pressable style = {styles.authBox}
                onPress={() => {
                    console.log('Facebook button pressed');
                }}>
                <Image source={require('../../assets/facebookicon.png')}
                    style={styles.authIcon} />

            </Pressable>
    )
}

const GoogleAuthButton = () => {
    return (
            <Pressable style = {styles.authBox}
                onPress={() => {
                    console.log('Google button pressed');
                }}>
                <Image source={require('../../assets/googleicon.png')}
                    style={styles.authIcon} />

            </Pressable>
    )
}

const LoginButton = ({ credentialCheck, loginField, navigation }) => {
    return (
        <LinearGradient colors={
            credentialCheck ?
                ['#FF0080', '#7928CA'] :
                ['#E8ECEF', '#E8ECEF']}
            style={styles.loginBackgroundEnabled}
            start={[0, 0]} end={[1, 0]}>
            <Pressable style={styles.loginButton}
                onPress={() => {
                    if (credentialCheck) {
                        console.log('Logging in as "' + loginField + '"');
                        navigation.pop();
                    } else {
                        console.log('button disabled');
                    }
                }} >
                <Text style={credentialCheck ?
                    styles.loginTextEnabled
                    : styles.loginTextDisabled}>
                    Login</Text>
            </Pressable>
        </LinearGradient >
    )
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

const ForgotPasswordButton = ({navigation}) => {
    return (
        <Pressable
            onPress={() =>{
                console.log('Forget Password pressed');
                navigation.navigate('forgetPassword');
            }}>
            <Text style={styles.forgetText}>Forgot Password?</Text>
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
        position: 'absolute',
        top: 130,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 15,
        zIndex: 3,
        alignItems: 'center',
    },
    footerText: {
        bottom: 15,
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        position: 'absolute',
        alignSelf:'center',
    },

    // Forgot password
    forgetRow: {
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        alignSelf: 'center',
        width: '80%',
        paddingTop: 5,
    },
    forgetText: {
        color: '#5EAEE9',
        textDecorationLine: 'underline',
        fontSize: 12,
    },

    // OR row
    orRow: {
        flexDirection: "row",
        width: "75%",
        alignSelf: "center",
        alignItems: 'center',
        height: 50,
    },
    orText: {
        fontSize: 16,
        paddingHorizontal: 15,
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        color: '#67748E',
        paddingBottom: 4,
    },
    orLine: {
        backgroundColor: 'grey',
        height: 0.5,
        flex: 1,
        alignSelf: "center",
    },

    // Auth Row
    authRow: {
        width: '75%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    authBox: {
        borderBlockColor: 'grey',
        borderRadius: 15,
        borderWidth: 0.5,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    authIcon: {
        height: 40,
        width: 40,
    },

    // Login/register stuff
    subtitleLogin: {
        fontSize: 20,
        fontFamily: 'Lato-Bold',
        textDecorationLine: 'underline',
        color: '#252F40',
        padding: 5,
        flex: 1,
        textAlign: 'center',
        paddingLeft: 20,
    },
    registerButton: {
        flex: 1,
        paddingRight: 20,
        alignSelf:'center',
    },
    subtitleRegister: {
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        color: '#67748E',
        padding: 5,
        textAlign: 'center',
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
    loginButton: {
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