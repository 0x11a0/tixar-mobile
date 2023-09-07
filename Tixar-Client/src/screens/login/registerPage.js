import { React, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderBlock from '../../components/login/headerBlock.js';
import FooterBlock from '../../components/login/footerBlock.js';
import NextButton from '../../components/login/nextButton.js';
import TextInputField from '../../components/login/textInputField.js';
import BlurBlock from '../../components/login/blurBlock.js';
import FilterButton from '../../components/login/filterButton.js';
import forgetPassword from './forgetPassword.js';
import OutLogin from '../../components/login/outLogin.js';
import CheckBoxBlock from '../../components/login/checkBoxBlock.js';


export default RegisterPage = ({ route, navigation }) => {
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [isTCChecked, setTCChecked] = useState(false);
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
            <HeaderBlock navigation={navigation} />

            <BlurBlock />

            <View style={styles.translucentBox}>

                <View style={{ height: 20 }} />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                    <FilterButton buttonText={'Login'}
                        isFocused={false}
                        onPressFunction={() => {
                            navigation.navigate('registerPage');
                        }}
                        isLeft={true} />

                    <FilterButton buttonText={'Register'}
                        isFocused={true}
                        isLeft={false} />
                </View>

                <View style={{ height: 25 }} />

                <TextInputField value={nameField}
                    placeholder={"Name"}
                    onChangeTextFunction={(text) => { setNameField(text); }} />

                <View style={{ height: 25 }} />

                <TextInputField value={emailField}
                    placeholder={"Email"}
                    onChangeTextFunction={(text) => { setEmailField(text); }} />

                <View style={{ height: 25 }} />

                <TextInputField value={passwordField}
                    placeholder={"Password"}
                    onChangeTextFunction={(text) => { setPasswordField(text); }} />

                <View style={{ height: 55 }} />

                <CheckBoxBlock text={'I agree to the '}
                    boldedText={'Terms and Conditions'}
                    isChecked={isTCChecked}
                    setIsChecked={setTCChecked} />

                <View style={{ height: 40 }} />

                <NextButton buttonText={"Create Account"}
                    enableCondition={nameField !== '' && emailField !== ''
                        && passwordField !== '' && isTCChecked}
                    onPressFunction={() => {
                        if (nameField === '' || emailField === '' || passwordField === '') {
                            console.log('Not all fields entered');
                        } else {
                            console.log({ nameField: nameField, emailField: emailField, passwordField: passwordField });
                            navigation.navigate('browseConcertPage');
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
        paddingTop: 20,
    },

});
