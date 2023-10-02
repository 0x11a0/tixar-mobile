import { React, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderBlock from '../../components/login/headerBlock.js';
import FooterBlock from '../../components/login/footerBlock.js';
import NextButton from '../../components/login/nextButton.js';
import TextInputField from '../../components/login/textInputField.js';
import CheckBoxBlock from '../../components/login/checkBoxBlock.js';
import BlurBlock from '../../components/login/blurBlock.js';


export default ForgetPasswordPage = () => {
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [isCaptchaChecked, setCaptchaChecked] = useState(false);

    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#f2f2f2',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            borderColor: '#f2f2f2',
        }}>
            <HeaderBlock />

            <BlurBlock />

            <View style={styles.translucentBox}>

                <Text style={styles.subtitle}>Password Reset</Text>

                <View style={{ height: 25 }} />

                {/* <TextInputField value={nameField}
                    placeholder={"Name"}
                    onChangeTextFunction={(text) => { setNameField(text); }} />

                <View style={{ height: 25 }} /> */}

                <TextInputField value={emailField}
                    placeholder={"Email"}
                    onChangeTextFunction={(text) => { setEmailField(text); }} />

                {/* <View style={{ height: 62 }} />

                <CheckBoxBlock isChecked={isCaptchaChecked} setIsChecked={setCaptchaChecked} /> */}

                <View style={{ height: 52, }} />

                <NextButton buttonText={
                    // "Reset My Password"
                    "Submit"
                }
                    enableCondition={
                        // isCaptchaChecked && nameField !== '' && emailField != ''
                        emailField !== ''
                    
                    }
                    onPressFunction={() => {
                        // Replace this function with navigation to SetPasswordPage

                        if (nameField === '' || emailField === '') {
                            console.log('Not all fields entered');
                        } else {
                            console.log({ nameField, emailField });
                        }
                    }}
                />
                <FooterBlock />

            </View>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 20,
        fontFamily: 'Lato-Bold',
        color: '#394051',
        marginTop: 24,
        marginBottom: 8,
    },
    translucentBox: {
        height: '79%',
        width: '85%',
        position: 'absolute',
        top: 165,
        backgroundColor: 'rgba(255, 255, 255, 0.55)',
        borderRadius: 15,
        zIndex: 3,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

});
