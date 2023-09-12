import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, ScrollView, Pressable, Image, SafeAreaViewBase, SafeAreaView } from 'react-native';

import Card from '../components/accountSettings/card.js';
import ToggleSlider from '../components/accountSettings/toggleSlider.js';

export default NotificationsPage = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#F8F9FA",
        }}>
            <Card>
                <View style={styles.cardHeaderRow}>
                    <Image source={require('../assets/icon.png')} style={styles.cardIcon}/>
                    <Text style={styles.cardTitle}>
                        Notification
                    </Text>
                </View>
                <View style={styles.cardRow}>
                    <Text style={styles.cardText}>
                        Notification Sound
                    </Text>
                    <ToggleSlider/>
                </View>
                <View style={styles.cardRow}>
                    <Text style={styles.cardText}>
                        Order Updates
                    </Text>
                    <ToggleSlider/>
                </View>
                <View style={styles.cardRow}>
                    <Text style={styles.cardText}>
                        Wallet Updates
                    </Text>
                    <ToggleSlider/>
                </View>
                <View style={styles.cardRow}>
                    <Text style={styles.cardText}>
                        Ticket News
                    </Text>
                    <ToggleSlider/>
                </View>
            </Card>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cardHeaderRow: {
        flexDirection: 'row', 
        alignItems: 'center',
        margin: 10
    },
    cardRow: {
        flexDirection: 'row', 
        alignItems: 'center',
        margin: 10,
        justifyContent: 'space-between'
    },
    cardIcon: {
        width: 32,
        height: 32,
        marginRight: 15
    },
    cardTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 14,
    },
    cardText: {
        fontFamily: 'Lato-Regular',
        fontSize: 14
    },
    cardRightIcon: {
        width: 10,
        height: 17.22,
        resizeMode: 'contain',
        tintColor: '#252F40'
    }
})