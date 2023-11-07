import { React, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderBlock from '../../components/login/headerBlock.js';
import FooterBlock from '../../components/login/footerBlock.js';
import TextInputFieldPrivate from '../../components/login/textInputFieldPrivate.js';
import BlurBlock from '../../components/login/blurBlock.js';

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

            <BlurBlock />

            <View style={styles.translucentBox}>

                <Text style={styles.subtitle}>Create New Password</Text>

                <View style={{ height: 25 }} />

                <TextInputFieldPrivate value={passwordField1}
                    placeholder={"New Password"}
                    onChangeTextFunction={(text) => { setPasswordField1(text); }}
                    isSecure={isSecure}
                    setIsSecure={setIsSecure} />

                <View style={{ height: 25 }} />

                <TextInputFieldPrivate value={passwordField2}
                    placeholder={"Confirm New Password"}
                    onChangeTextFunction={(text) => { setPasswordField2(text); }}
                    isSecure={isSecure}
                    setIsSecure={setIsSecure} />
                
                <View style={{ height: 100 }} />
                
                <NextButton buttonText={"Set New Password"}
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
        marginTop: 30,
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
