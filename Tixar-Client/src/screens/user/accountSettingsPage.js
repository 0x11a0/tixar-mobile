import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, ScrollView, Pressable, Image, SafeAreaViewBase, SafeAreaView } from 'react-native';

import Card from '../../components/accountSettings/card.js';
import ToggleSlider from '../../components/accountSettings/toggleSlider.js';
import NotificationsPage from './notificationsPage.js';

export default AccountSettingsPage = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#F8F9FA",
        }}>
            {/* Recommended Settings */}
            <Card>
                <View style={styles.cardHeaderRow}>
                    <Image source={require('../../assets/icon.png')}
                        style={styles.cardIcon}
                    />
                    <Text style={styles.cardTitle}>
                        Recommended Settings
                    </Text>
                </View>
                <View style={styles.cardRow}>
                    <Text style={styles.cardText}>
                        Use FaceID to sign in
                    </Text>
                    <ToggleSlider/>
                </View>
                <View style={styles.cardRow}>
                    <Text style={styles.cardText}>
                        Light/Dark Mode
                    </Text>
                    <ToggleSlider/>
                </View>
                <Pressable onPress={() => navigation.navigate('notificationsPage')}>
                    <View style={styles.cardRow}>
                            <Text style={styles.cardText}>
                                Notifications
                            </Text>
                            <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/arrow3x.png')} style={styles.cardRightIcon}/>
                    </View>
                </Pressable>
            </Card>

            {/* Payment */}
            <Card>
                <View style={styles.cardHeaderRow}>
                    <Image source={require('../../assets/icon.png')}
                        style={styles.cardIcon}
                    />
                    <Text style={styles.cardTitle}>
                        Payment
                    </Text>
                </View>
                <View style={styles.cardRow}>
                    <Text style={styles.cardText}>
                        Manage E-wallet
                    </Text>
                    <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/arrow3x.png')} style={styles.cardRightIcon}/>
                </View>
                <View style={styles.cardRow}>
                    <Text style={styles.cardText}>
                        Manage Gift Cards
                    </Text>
                    <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/arrow3x.png')} style={styles.cardRightIcon}/>
                </View>
            </Card>

            {/* Payment */}
            <Card>
                <View style={styles.cardHeaderRow}>
                    <Image source={require('../../assets/icon.png')}
                        style={styles.cardIcon}
                    />
                    <Text style={styles.cardTitle}>
                        Payment
                    </Text>
                </View>
                <View style={styles.cardRow}>
                    <Text style={styles.cardText}>
                        User Agreement
                    </Text>
                    <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/arrow3x.png')} style={styles.cardRightIcon}/>
                </View>
                <View style={styles.cardRow}>
                    <Text style={styles.cardText}>
                        Privacy
                    </Text>
                    <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/arrow3x.png')} style={styles.cardRightIcon}/>
                </View>
                <View style={styles.cardRow}>

                    <Text style={styles.cardText}>
                        About
                    </Text>
                    <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/arrow3x.png')} style={styles.cardRightIcon}/>
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