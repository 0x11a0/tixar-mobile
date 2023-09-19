import { View, Text, StyleSheet, Animated, Easing, Pressable } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import FooterBlock from '../../components/viewConcert/footerBlock';
import NextButton from '../../components/vf/nextButton';
import TextInputField from '../../components/vf/textInputField';
import DatePicker from '../../components/vf/datePicker';

export default GenerateFanCodePage2 = () => {
    const code = 'AFUHE12';

    const [title, setTitle] = useState('');
    const [points, setPoints] = useState('');
    const [expiryDate, setExpiryDate] = useState(new Date());

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

                <View style={{ height: 20 }} />

                <TextInputField
                    value={title}
                    placeholder={'Title'}
                    onChangeTextFunction={(text) => { setTitle(text); }}
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
                    setDate={setExpiryDate} />

            </View>

            <View style={{ height: 20 }} />

            <NextButton buttonText={'Generate Code'}
                onPressFunction={() => {
                    console.log('title: ' + title);
                    console.log('point: ' + points);
                    console.log('date: ' + expiryDate.toString());
                }
                }
                buttonHeight={50}
                enableCondition={title !== '' && points !== ''}
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