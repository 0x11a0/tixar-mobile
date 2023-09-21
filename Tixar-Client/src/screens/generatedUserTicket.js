import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, ScrollView, Pressable, Image, SafeAreaViewBase, SafeAreaView } from 'react-native';
import { Barcode } from 'expo-barcode-generator';

import HeaderBlock from '../components/generatedUserTicket/headerBlock';
import Card from '../components/generatedUserTicket/card';
import GradientText from '../components/generatedUserTicket/gradientText';
import DashedLine from 'react-native-dashed-line';

export default GeneratedUserTicketPage = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#F8F9FA",
        }}>
            <HeaderBlock navigation={navigation}/>
            <View style={styles.container}>
                <Card>
                    <View style={styles.containerView}>
                        <View style={styles.stadiumTitleView}>
                            <GradientText style={styles.stadiumTitle}>
                                NATIONAL STADIUM SINGAPORE
                            </GradientText>
                        </View>
                        <View style={styles.concertTitleView}>
                            <Text style={styles.concertTitle}>
                                Coldplay: Music of the Spheres
                            </Text>
                        </View>
                        <View style={styles.concertInfoView}>
                            <Text style={styles.concertInfoTitle}>
                                Coldplay Ticket
                            </Text>
                            <Text style={styles.concertInfo}>
                                Reference Number: 12345ABC
                            </Text>
                            <Text style={styles.concertInfo}>
                                Category: 1
                            </Text>
                            <Text style={styles.concertInfo}>
                                Quantity: 1
                            </Text>
                        </View>
                    </View>
                    <View style={styles.barcode}>
                        <DashedLine style={styles.dashedLine}/>
                        <Barcode 
                            value="12345678999"
                            options={{ format: 'CODE128', backgroundColor: 'white'}}
                        />
                    </View>
                </Card>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '75%',
        width: '100%',
        position: 'absolute',
        top: 65,
        borderRadius: 15,
        zIndex: 3,
    },
    containerView: {
        marginHorizontal: 15,
        zIndex: 3
    },
    stadiumTitleView: {
        paddingVertical: 10,
    },
    stadiumTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 13
    },
    concertTitleView: {
        paddingBottom: 20,
    },
    concertTitle: {
        fontSize: 18,
        fontFamily: 'Lato-Bold'
    },
    concertInfoView: {
        paddingBottom: 20,
    },
    concertInfoTitle: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        paddingBottom: 20,
    },
    concertInfo: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        paddingBottom: 10,
        color: '#67748E'
    },
    dashedLine: {
        width: '95%',
        paddingBottom: 10
    },
    barcode: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})