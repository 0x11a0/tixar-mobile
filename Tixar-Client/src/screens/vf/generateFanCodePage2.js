import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import FooterBlock from '../../components/viewConcert/footerBlock';
import NextButton from '../../components/vf/nextButton';
import * as Clipboard from 'expo-clipboard';
import TextInputField from '../../components/vf/textInputField';

export default GenerateFanCodePages = () => {
    const code = 'AFUHE12';
  
    const [title, setTitle] = useState('');
    const [points, setPoints] = useState(0);
    const [expiryDate, setExpiryDate] = useState('');

    return (
        <View style={styles.container}>

            <View style={styles.upperBlock}>
                <Text style={styles.title}>Generate Fan Code</Text>

                <Text style={{
                    fontFamily: 'Lato-Bold',
                    fontSize: 30,
                }}>
                    {code}
                </Text>

                <TextInputField
                    placeholder={'Title'}
                />



            </View>

            <View style={{ height: 20 }} />

            <NextButton buttonText={'Save'}
                onPressFunction={() => {
                    console.log('code saved');
                }
                }
                buttonHeight={50}
            />
            <FooterBlock />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        paddingVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    upperBlock: {
        height: '55%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        paddingVertical: '5%',
        paddingHorizontal: '5%',
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: '#252F40',
        height: '15%',
    },
});