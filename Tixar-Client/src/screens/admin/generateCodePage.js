import { View, Text, StyleSheet, Animated, Easing, Pressable } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import FooterBlock from '../../components/viewConcert/footerBlock';
import NextButton from '../../components/vf/nextButton';
import TextInputField from '../../components/vf/textInputField';
import DatePicker from '../../components/vf/datePicker';

export default GenerateCodePage = ({ route, navigation }) => {
    const [code, setCode] = useState('');
    const [points, setPoints] = useState('');
    const [expiryDate, setExpiryDate] = useState(new Date());


    const padTo2Digits = (num) => {
        return num.toString().padStart(2, '0');
    }

    const formatDate = (date) => {
        return [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join('-');
    }

    return (
        <View style={styles.container}>

            <View style={styles.upperBlock}>
                <Text style={styles.title}>Generate Fan Code</Text>

                <View style={{ height: 20 }} />

                <TextInputField
                    value={code}
                    placeholder={'Code'}
                    onChangeTextFunction={(text) => { setCode(text); }}
                    keyboardType={'default'}
                />

                <View style={{ height: 20 }} />

                <TextInputField
                    value={points}
                    placeholder={'Points'}
                    onChangeTextFunction={(text) => { setPoints(text.replace(/[^0-9]/g, '')); }}
                    keyboardType={'numeric'}
                />

                <View style={{ height: 20 }} />


                <DatePicker
                    date={expiryDate}
                    setDate={setExpiryDate}
                     />

            </View>

            <View style={{ height: 20 }} />

            <NextButton buttonText={'Generate Code'}
                onPressFunction={() => {
                    navigation.navigate('confirmCodePage', {
                        code: code,
                        points: points,
                        expiryDate: formatDate(expiryDate),
                        token: route.params.token,
                        name: route.params.name,
                        clubId: route.params.clubId,
                    });
                }
                }
                buttonHeight={50}
                enableCondition={code !== '' && points !== ''}
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
        height: '75%',
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
