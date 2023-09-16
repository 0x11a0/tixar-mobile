import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, ScrollView, Pressable, Image, SafeAreaViewBase, SafeAreaView } from 'react-native';

import CardWallet from '../../components/eWallet/cardWallet';
import Card from '../../components/accountSettings/card';

export default eWallet = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#F8F9FA",
            flexDirection: 'column',

        }}>
            <View style={styles.eCardContainer}>
                <CardWallet/>
            </View>
            <View style={{
                flex: 3,
                flexDirection: 'column'
            }}>
                <View style={styles.transactionContainer}>
                    <Card>
                        <View style={styles.cardRow}>
                            <Text style={styles.cardText}>
                                Top Up
                            </Text>
                            <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/arrow3x.png')} style={styles.cardRightIcon}/>
                        </View>
                        <View style={styles.cardRow}>
                            <Text style={styles.cardText}>
                                Transfer to Bank
                            </Text>
                            <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/arrow3x.png')} style={styles.cardRightIcon}/>
                        </View>
                    </Card>
                </View>
                <View style={styles.container}>
                    <Card>
                        <View style={{alignItems: 'center'}}>
                            <Text>History</Text>
                        </View>
                        <View style={styles.cardRow}>
                            <Text>Taylor Swift Tickets</Text>
                            <Text>-$368</Text>
                        </View>
                        <View style={styles.cardRow}>
                            <Text>Dean Lewis Tickets</Text>
                            <Text>-$128</Text>
                        </View>
                    </Card>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    eCardContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginHorizontal: 20,
    },
    transactionContainer: {
        flex: 0.8,
    },
    container: {
        flex: 3,
    },
    cardRow: {
        flexDirection: 'row', 
        alignItems: 'center',
        margin: 10,
        justifyContent: 'space-between'
    },
    cardRightIcon: {
        width: 10,
        height: 17.22,
        resizeMode: 'contain',
        tintColor: '#252F40'
    }
})