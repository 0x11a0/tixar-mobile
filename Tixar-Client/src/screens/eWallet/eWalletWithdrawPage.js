import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Pressable, Image, SafeAreaViewBase, SafeAreaView } from 'react-native';

import CardWallet from '../../components/eWallet/cardWallet';
import WithdrawalMethodCard from '../../components/eWallet/withdrawalMethodCard';
import NextButton from '../../components/viewConcert/nextButton';

export default EWalletWithdrawPage = ({ Navigation }) => {
    const [withdrawalAmount, setWithdrawalAmount] = useState('');

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#F8F9FA",
            flexDirection: 'column',

        }}>
            <View style={styles.container}>
                <CardWallet />
            </View>
            <View style={styles.container2}>
                <View style={styles.container3}>
                    <WithdrawalMethodCard value={withdrawalAmount}
                    onChangeTextFunction={(text) => { setWithdrawalAmount(text); }}/>
                </View>
                <View style={styles.container4}>
                    <NextButton 
                        buttonText={"Withdraw"}
                        onPressFunction={() => {
                            if (withdrawalAmount > 0) {
                                console.log('Withdrawn amount: ', withdrawalAmount);
                            } else {
                                console.log('error');
                            }
                        }}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    container2: {
        flex: 3.5,
    },
    container3: {
        flex: 1.5,
    },
    container4: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 25
    }
})