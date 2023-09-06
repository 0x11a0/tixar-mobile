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
    const [passwordField, setPasswordField] = useState('');
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

            <BlurBlock/>

            <View style={styles.translucentBox}>

                <Text style={styles.subtitle}>Password Reset</Text>

                <TextInputField value={nameField}
                    placeholder={"Name"}
                    onChangeTextFunction={(text) => { setNameField(text); }} />

                <TextInputField value={passwordField}
                    placeholder={"Password"}
                    onChangeTextFunction={(text) => { setPasswordField(text); }} />

                <CheckBoxBlock isChecked={isCaptchaChecked} setIsChecked={setCaptchaChecked} />

                <NextButton buttonText={"Reset My Password"}
                    enableCondition={isCaptchaChecked && nameField !== '' && passwordField != ''}
                    onPressFunction={() => {
                        // Replace this function with navigation to SetPasswordPage

                        if (nameField === '' || passwordField === '') {
                            console.log('Not all fields entered');
                        } else {
                            console.log({ nameField, passwordField });
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
    },
    translucentBox: {
        height: '80%',
        width: '85%',
        position: 'absolute',
        top: 130,
        backgroundColor: 'rgba(255, 255, 255, 0.45)',
        borderRadius: 15,
        zIndex: 3,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    
});
