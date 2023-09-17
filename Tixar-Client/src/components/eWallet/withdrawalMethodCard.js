import { React, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import Card from '../accountSettings/card';



export default WithdrawalMethodCard = ({navigation, value, onChangeTextFunction}) => {

    

    return (
        <View style={styles.container}>
            <Card>
                <View style={{alignItems: 'center', marginTop: 15}}>
                    <Text style={styles.transactionTitle}>Select Withdrawal Method</Text>
                </View>
                <View style={styles.paymentMethodContainer}>
                    <Fontisto name="mastercard" size={100} color="black" />
                    <Fontisto name="visa" size={100} color="black" />
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.transactionTitle}>Enter Amount</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <TextInput
                            style={styles.inputField}
                            onChangeText={text => onChangeTextFunction(text)}
                            value={value}
                            keyboardType="numeric"
                            placeholder="$"
                        />
                        <View style={styles.dottedLine}></View>
                </View>
            </Card>  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    paymentMethodContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '60%'
    },
    transactionTitle: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: '#67748E',
    },
    inputField: {
        width: '80%',
        marginTop: 10,
        padding: 10,
        fontSize: 16,
    },
    dottedLine: {
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderRadius: 1,
        borderColor: '#ccc',
        width: '75%',
      },
    
});