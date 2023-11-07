import { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, ScrollView, Pressable, Image, SafeAreaViewBase, SafeAreaView, useColorScheme } from 'react-native';

import Card from '../../components/accountSettings/card.js';
import ToggleSlider from '../../components/accountSettings/toggleSlider.js';
import NotificationsPage from './notificationsPage.js';
import { ColorContext } from '../../../context.js';
import ColorScheme from '../../colorScheme.js';
import colorScheme from '../../colorScheme.js';

export default AccountSettingsPage = ({ navigation }) => {
    const { colors, setColors } = useContext(ColorContext);
    const [useFaceID, setUseFaceID] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(colors === colorScheme.dark);

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.background,
        }}>
            {/* Recommended Settings */}
            <Card>
                <View style={styles.cardHeaderRow}>
                    <Image source={require('../../assets/icon.png')}
                        style={styles.cardIcon}
                    />
                    <Text style={[styles.cardTitle, { color: colors.textPrimary }]}>
                        Recommended Settings
                    </Text>
                </View>
                <View style={styles.cardRow}>
                    <Text style={[styles.cardText, { color: colors.textPrimary }]}>
                        Use FaceID to sign in
                    </Text>
                    <ToggleSlider toggleValue={useFaceID}
                        onToggle={() => {
                            setUseFaceID(!useFaceID);
                        }} />
                </View>
                <View style={styles.cardRow}>
                    <Text style={[styles.cardText, { color: colors.textPrimary }]}>
                        Light/Dark Mode
                    </Text>
                    <ToggleSlider toggleValue={isDarkMode}
                        onToggle={() => {
                            setIsDarkMode(!isDarkMode);
                            setColors(isDarkMode ? ColorScheme.light : ColorScheme.dark)

                        }} />
                </View>
                <Pressable onPress={() => navigation.navigate('notificationsPage')}>
                    <View style={styles.cardRow}>
                        <Text style={[styles.cardText, { color: colors.textPrimary }]}>
                            Notifications
                        </Text>
                        <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/arrow3x.png')} style={styles.cardRightIcon} />
                    </View>
                </Pressable>
            </Card>

            {/* Payment */}
            <Card>
                <View style={styles.cardHeaderRow}>
                    <Image source={require('../../assets/icon.png')}
                        style={styles.cardIcon}
                    />
                    <Text style={[styles.cardTitle, { color: colors.textPrimary }]}>
                        Payment
                    </Text>
                </View>
                <View style={styles.cardRow}>
                    <Text style={[styles.cardText, { color: colors.textPrimary }]}>
                        Manage E-wallet
                    </Text>
                    <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/arrow3x.png')} style={styles.cardRightIcon} />
                </View>
                <View style={styles.cardRow}>
                    <Text style={[styles.cardText, { color: colors.textPrimary }]}>
                        Manage Gift Cards
                    </Text>
                    <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/arrow3x.png')} style={styles.cardRightIcon} />
                </View>
            </Card>

            {/* Payment */}
            <Card>
                <View style={styles.cardHeaderRow}>
                    <Image source={require('../../assets/icon.png')}
                        style={styles.cardIcon}
                    />
                    <Text style={[styles.cardTitle, { color: colors.textPrimary }]}>
                        Payment
                    </Text>
                </View>
                <View style={styles.cardRow}>
                    <Text style={[styles.cardText, { color: colors.textPrimary }]}>
                        User Agreement
                    </Text>
                    <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/arrow3x.png')} style={styles.cardRightIcon} />
                </View>
                <View style={styles.cardRow}>
                    <Text style={[styles.cardText, { color: colors.textPrimary }]}>
                        Privacy
                    </Text>
                    <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/arrow3x.png')} style={styles.cardRightIcon} />
                </View>
                <View style={styles.cardRow}>

                    <Text style={[styles.cardText, { color: colors.textPrimary }]}>
                        About
                    </Text>
                    <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/arrow3x.png')} style={styles.cardRightIcon} />
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