import { React, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBlock from './headerBlock.js';
import { BlurView } from 'expo-blur';

export default SetPasswordPage = ({ onLayout }) => {
    const [passwordField1, setPasswordField1] = useState('');
    const [passwordField2, setPasswordField2] = useState('');
    const [passwordCheck, setPasswordCheck] = useState(false);

    const handlePassword1 = (text) => {
        setPasswordField1(text);
        setPasswordCheck((text !== '') && (passwordField2 === text));
    };
    const handlePassword2 = (text) => {
        setPasswordField2(text);
        setPasswordCheck((text !== '') && (passwordField1 === text));
    };

    const [isVisible, setIsVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container} onLayout={onLayout}>
            <HeaderBlock />
            {/* <BlurView intensity={30} tint="light" style={styles.blur}>
            </BlurView> */}
            <View style={styles.translucentBox}>

                <Text style={styles.subtitle}>Create New Password</Text>
                <View style={styles.fieldBox}>
                    <TextInput
                        secureTextEntry={isVisible}
                        style={styles.fieldText}
                        onChangeText={handlePassword1}
                        value={passwordField1}
                        placeholder="New Password" />
                    <EyeButton isVisible={isVisible} setIsVisible={setIsVisible} />
                </View>

                <View style={styles.fieldBox}>
                    <TextInput
                        secureTextEntry={isVisible}
                        style={styles.fieldText}
                        onChangeText={handlePassword2}
                        value={passwordField2}
                        placeholder="Confirm New Password" />
                    <EyeButton isVisible={isVisible} setIsVisible={setIsVisible} />
                </View>

                <ResetButton passwordCheck={passwordCheck} passwordField={passwordField1} />
                <Text style={styles.footerText}>TIXAR</Text>
            </View>

        </SafeAreaView >
    );
};

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

const ResetButton = ({ passwordCheck, passwordField }) => {
    return (
        <LinearGradient colors={
            passwordCheck ?
                ['#FF0080', '#7928CA'] :
                ['#E8ECEF', '#E8ECEF']}
            style={styles.resetBackgroundEnabled}
            start={[0, 0]} end={[1, 0]}>
            <Pressable style={styles.resetButton}
                onPress={() => {
                    if (passwordCheck) {
                        console.log('password set to "' + passwordField + '"');
                    } else {
                        console.log('button disabled');
                    }
                }} >
                <Text style={passwordCheck ?
                    styles.resetTextEnabled
                    : styles.resetTextDisabled}>
                    Set new password</Text>
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
        zIndex: 3,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    blur: {
        height: '70%',
        width: '85%',
        position: 'absolute',
        top: 130,
        borderRadius: 15,
        zIndex: 2,
    },
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
    captchaButton: {
        height: 32,
        width: 32,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#D2D6DA',
        borderWidth: 1,
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
    eyeIcon: {
        height: 30,
        width: 30,
    },
    eyeButton: {
        right: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
