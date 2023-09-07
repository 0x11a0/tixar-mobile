import { React, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBlock from './headerBlock.js';

export default ForgetPasswordPage = ({ navigation, onLayout }) => {
    const [nameField, setNameField] = useState('');
    const handleName = (text) => {
        setNameField(text);
    };

    const [passwordField, setPasswordField] = useState('');
    const handlePassword = (text) => {
        setPasswordField(text);
    };

    const [isCaptchaChecked, setCaptchaChecked] = useState(false);

    return (
        <SafeAreaView style={styles.container} onLayout={onLayout}>
            <HeaderBlock />
            <View style={styles.translucentBox}>
                <Text style={styles.subtitle}>Password Reset</Text>
                <View style={styles.fieldBox}>
                    <TextInput
                        style={styles.fieldText}
                        onChangeText={handleName}
                        value={nameField}
                        placeholder="Name"
                    />
                </View>
                <View style={styles.fieldBox}>
                    <TextInput
                        style={styles.fieldText}
                        onChangeText={handlePassword}
                        value={passwordField}
                        placeholder="Email"
                    />
                </View>
                <CaptchaButton isCaptchaChecked={isCaptchaChecked} setCaptchaChecked={setCaptchaChecked} />
                <ResetButton isCaptchaChecked={isCaptchaChecked}
                    nameField={nameField} passwordField={passwordField}
                />
                <Text style={styles.footerText}>TIXAR</Text>
            </View>
        </SafeAreaView >
    );
};

const CaptchaButton = ({ isCaptchaChecked, setCaptchaChecked }) => {
    return (
        <View style={styles.captchaBlock}>
            <Pressable style={styles.captchaButton}
                onPress={() => {
                    setCaptchaChecked(!isCaptchaChecked);
                    console.log('isCaptchaChecked == ' + isCaptchaChecked);
                }}>
                <Image source={isCaptchaChecked ? require('../../src/assets/soft-ui-pro-react-native-v1.1.1/check3x.png') : null}
                    style={styles.tickIcon}
                />
            </Pressable>
            <Text style={styles.captchaText}>I am not a robot.</Text>
        </View>
    );
}

const ResetButton = ({ isCaptchaChecked, nameField, passwordField }) => {
    let isValid = isCaptchaChecked && nameField !== '' && passwordField != '';
    return (
        <LinearGradient colors={isValid ?
            ['#FF0080', '#7928CA']
            : ['#E8ECEF', '#E8ECEF']}
            style={styles.resetBackgroundEnabled}
            start={[0, 0]} end={[1, 0]}>
            <Pressable style={styles.resetButton}
                onPress={() => {
                    console.log({ nameField, passwordField });
                    if (nameField === '' || passwordField === '') {
                        console.log('Not all fields entered');
                    }
                }} >
                <Text style={isValid ?
                    styles.resetTextEnabled
                    : styles.resetTextDisabled}>
                    Reset My Password</Text>
            </Pressable>
        </LinearGradient >
    )
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
    subtitle: {
        fontSize: 20,
        fontFamily: 'Lato-Bold',
        color: '#394051',
        marginTop: 24,
    },
    translucentBox: {
        height: '80%',
        width: '85%',
        position: 'absolute',
        top: 130,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 15,
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    fieldBox: {
        height: 56,
        width: '86%',
        borderRadius: 10,
        borderColor: '#D2D6DA',
        borderWidth: 1,
        justifyContent: 'center',
        marginTop: 26,
    },
    fieldText: {
        left: '5%',
        fontSize: 18,
        fontFamily: 'Lato-Regular',
        color: '#8F8F8F',
    },
    captchaButton: {
        height: 32,
        width: 32,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#D2D6DA',
        borderWidth: 1,
    },
    captchaBlock: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'center',
        alignContent: 'center',
    },
    captchaText: {
        marginTop: 4,
        left: 17,
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        color: '#252F40',
        position: 'relative'
    },
    resetButton: {
        width: '86%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resetBackgroundEnabled: {
        marginTop: 55,
        borderRadius: 8,
        width: '86%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resetBackgroundDisabled: {
        marginTop: 55,
        borderRadius: 8,
        width: '86%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8ECEF',
    },
    resetTextEnabled: {
        fontSize: 15,
        fontFamily: 'Lato-Bold',
        color: 'white',
    },
    resetTextDisabled: {
        fontSize: 15,
        fontFamily: 'Lato-Bold',
        color: '#252F40',
    },
    tickIcon: {
        marginTop: 3,
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    footerText: {
        bottom: 15,
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        position: 'absolute'
    },
});
