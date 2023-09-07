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


export default LoginPage = ({ route, navigation }) => {
    console.log(route.name);
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

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
                        isFocused={true}
                        isLeft={true} />

                    <FilterButton buttonText={'Register'}
                        isFocused={false}
                        onPressFunction={() => {
                            navigation.navigate('registerPage');
                        }}
                        isLeft={false} />
                </View>


                <View style={{ height: 25 }} />

                <TextInputField value={emailField}
                    placeholder={"Email"}
                    onChangeTextFunction={(text) => { setEmailField(text); }} />

                <View style={{ height: 25 }} />

                <TextInputField value={passwordField}
                    placeholder={"Password"}
                    onChangeTextFunction={(text) => { setPasswordField(text); }} />

                <View style={{ height: 15 }} />

                <Pressable style={{
                    alignSelf: 'flex-start',
                    marginLeft: '7%',
                }}
                    onPress={() => {
                        navigation.navigate('forgetPasswordPage');
                    }}
                >
                    <Text style={{
                        color: '#5EAEE9',
                        textDecorationLine: 'underline'
                    }}>
                        Forget Password?
                    </Text>
                </Pressable>

                <View style={{ height: 20 }} />

                <NextButton buttonText={"Login"}
                    enableCondition={emailField !== '' && passwordField != ''}
                    onPressFunction={() => {
                        if (emailField === '' || passwordField === '') {
                            console.log('Not all fields entered');
                        } else {
                            console.log({ emailField: emailField, passwordField: passwordField });
                            navigation.navigate('browseConcertPage');
                        }
                    }}
                />

                <View style={{ height: 15 }} />

                <Text style={{
                    fontFamily: 'Lato-Regular'
                }}>
                    or
                </Text>

                <View style={{ height: 15 }} />
                <View style={{
                    flexDirection: 'row',

                }}>
                    <OutLogin imageIcon={require('../../assets/soft-ui-pro-react-native-v1.1.1/facebook3x.png')}
                        onPressFunction={() => {
                            console.log('facebook login clicked');
                        }} />
                    <OutLogin imageIcon={require('../../assets/soft-ui-pro-react-native-v1.1.1/apple3x.png')}
                        onPressFunction={() => {
                            console.log('apple login clicked');
                        }} />
                    <OutLogin imageIcon={require('../../assets/soft-ui-pro-react-native-v1.1.1/google3x.png')}
                        onPressFunction={() => {
                            console.log('google login clicked');
                        }} />
                </View>

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
