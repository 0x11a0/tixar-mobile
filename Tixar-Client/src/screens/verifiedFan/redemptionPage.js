import { useNavigation } from '@react-navigation/native';
import { React, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image, SafeAreaViewBase, SafeAreaView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import card33x from '../../assets/images/card33x.png';



export default RedemptionPage = ({navigation, imageBackground}) => {

    const [code, setCode] = useState('');
    const [canRedeem, setCanRedeem] = useState(false);

    const handleCode = (text) => {
        setCode(text);
        setCanRedeem(text !== '');
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#F8F9FA",
        }}
        >
            {/* Header box stuff */}
            <View style={styles.headerContainer}>
                <Image source={card33x}
                    style={styles.imageBackground} />
                <Text style={styles.headerText}>
                    TIXAR FAN CODES
                </Text>
                <Text style={styles.subtitleText}>
                    Follow your favorite artists.{`\n`}
                    Be rewarded.
                </Text>
            </View>

            <View style={
                {marginTop: 10,
                justifyContent: 'center',}
            }>
                <Text style={styles.redeemText}>
                    Redeem your code here
                </Text>
            </View>

            {/* Redeem code stuff */}
            <View style={styles.fieldBox}>
                <TextInput
                    style={styles.fieldText}
                    onChangeText={handleCode}
                    value={code}
                    placeholder="XXXX-XXXX-XXXX-XXXX" />
            </View>

            {/* Redeem button */}
            <RedeemButton code={code} canRedeem={canRedeem}
                        navigation={navigation} />

            {/* FAQ */}
            <Text style={styles.faqText}>
                FAQs {`\n`}
                Lorem ipsum dolor sit amet. 
                Ab repellat voluptas ut rerum fugit rem 
                autem ducimus est repellendus optio eos 
                iusto commodi. Ut nulla itaque ut ducimus 
                veritatis est accusantium voluptas est minima 
                reprehenderit et iste magni aut maxime sint ad 
                incidunt pariatur. Et obcaecati doloremque quo
                 quos magni ab dolorem fugiat id sequi accusamus 
                 et assumenda reiciendis et velit deserunt qui 
                 recusandae consequatur. {'\n'}
                Learn More
            </Text>

            {/* Footer */}
            <View>
                <Text style={styles.footerText}>TIXAR</Text>
            </View>
        </SafeAreaView>
    )

}

const RedeemButton = ({ canRedeem, code, navigation }) => {
    return (
        <LinearGradient colors={
            canRedeem ?
                ['#FF0080', '#7928CA'] :
                ['#E8ECEF', '#E8ECEF']}
            style={styles.redeemBackgroundEnabled}
            start={[0, 0]} end={[1, 0]}>
            <Pressable style={styles.loginButton}
                onPress={() => {
                    if (canRedeem) {
                        // Redeem code here
                        console.log('Redeemed code: "' + code + '"');
                        navigation.pop();
                    } else {
                        console.log('button disabled');
                    }
                }} >
                <Text style={canRedeem ?
                    styles.redeemTextEnabled
                    : styles.redeemTextDisabled}>
                    Redeem</Text>
            </Pressable>
        </LinearGradient >
    )
}

const styles = StyleSheet.create({
    // Header box stuff
    headerContainer: {
        backgroundColor: 'green',
        height: 150,
        borderRadius: 20,
        marginVertical: 13,
        paddingVertical: 15,
        overflow: 'hidden',
        width: '86%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',  
    },
    imageBackground: {
        height: 240,
        width: '100%',
        position: 'absolute',
        alignSelf: 'center',
        resizeMode: 'stretch',
    },
    headerText: {
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Lato-Bold',
    },
    subtitleText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        marginTop: 5,
    },

    // Redeem code stuff
    redeemText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Lato-Bold',
    },

    // Field stuff
    fieldBox: {
        flexDirection: 'row',
        height: 56,
        width: '86%',
        borderRadius: 10,
        borderColor: '#D2D6DA',
        borderWidth: 1,
        marginTop: 10,
        alignSelf: 'center',
    },
    fieldText: {
        flex: 1,
        left: '25%',
        fontSize: 15,
        fontFamily: 'Lato-Regular',
        color: '#8F8F8F',
        paddingRight: 35,
    },

    // Redeem button stuff
    redeemButton: {
        width: '30%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    redeemBackgroundEnabled: {
        marginTop: 15,
        borderRadius: 20,
        width: '30%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    redeemBackgroundDisabled: {
        marginTop: 15,
        borderRadius: 20,
        width: '30%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8ECEF',
    },
    redeemTextEnabled: {
        fontSize: 15,
        fontFamily: 'Lato-Bold',
        color: 'white',
    },
    redeemTextDisabled: {
        fontSize: 15,
        fontFamily: 'Lato-Bold',
        color: '#252F40',
    },

    //FAQ
    faqText: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        fontFamily: 'Lato-Regular',
        fontSize: 13,
        color: '#67748E',
    },

    // Footer
    footerText: {
        bottom: 15,
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        position: 'absolute',
        alignSelf:'center',
    },
});