import { React, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderBlock from '../../components/login/headerBlock.js';
import FooterBlock from '../../components/login/footerBlock.js';
import TextInputFieldPrivate from '../../components/login/textInputFieldPrivate.js';

export default SetPasswordPage = () => {
    const [passwordField1, setPasswordField1] = useState('');
    const [passwordField2, setPasswordField2] = useState('');
    const [isSecure, setIsSecure] = useState(true);

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

            <View style={styles.translucentBox}>

                <Text style={styles.subtitle}>Create New Password</Text>

                <TextInputFieldPrivate value={passwordField1}
                    placeholder={"New Password"}
                    onChangeTextFunction={(text) => { setPasswordField1(text); }}
                    isSecure={isSecure}
                    setIsSecure={setIsSecure} />

                <TextInputFieldPrivate value={passwordField2}
                    placeholder={"Confirm New Password"}
                    onChangeTextFunction={(text) => { setPasswordField2(text); }}
                    isSecure={isSecure}
                    setIsSecure={setIsSecure} />

                <NextButton buttonText={"Set new password"}
                    enableCondition={passwordField1 === passwordField2 && passwordField1 !== ''}
                    onPressFunction={() => {
                        // Replace this function with code to update password
                        console.log('password set to "' + passwordField1 + '"');
                    }}
                />
                <FooterBlock />
            </View>
        </SafeAreaView >
    );
};

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
        alignSelf: 'center',
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
        justifyContent: 'space-between',
    },
});
