import { React, useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput, FlatList, TouchableOpacity, Button, onPressLearnMore, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBlock from './headerBlockUserProfile';
const userEdit = ['Ewallet', 'Edit', 'Settings']

export default UserProfile = ({ route, navigation }) => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');


    const parsePhoneNumber = (phoneNum) => {
        // convert phone number to formatter phone number
    }

    const getUser = () => {
        fetch('http://vf.tixar.sg/api/fan', {
            method: 'GET',
            credentials: 'include',
            headers: { 'Authorization': route.params.token }
        })
            .then(response => response.json())
            .then((data) => {
                setName(data.name);
                setEmail(data.email);
                setPhoneNumber(data.phone);
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <HeaderBlock name={name}
                walletOnPress={() => {
                    navigation.navigate('manageEWalletPage', { token: route.params.token });
                }}
                editOnPress={() => {
                    navigation.navigate('editUserProfilePage', { token: route.params.token });
                }}
                settingsOnPress={() => {
                    navigation.navigate('settingsPage', { token: route.params.token });
                }}
            />

            <View style={styles.translucentBox}>
                <Text style={styles.email}>Email</Text>
                <Text style={styles.subtitle}>{email}</Text>
                <Text style={styles.text}>Phone Number</Text>
                <Text style={styles.subtitle}>{phoneNumber}</Text>
                <TouchableOpacity style={{ marginTop: 50 }}>
                    <View style={buttonContainerStyle}>
                        <Button title="View My Tickets" accessibilityLabel="View Tickets"
                            color={Platform.OS === 'ios' ? "white" : "#AB2FCD"}
                            onPress={() => {
                                // Alert.alert('Link to view tickets');
                                navigation.navigate('userTicketsPage');
                            }} />
                    </View>
                </TouchableOpacity>
            </View>

            <Text style={styles.footerText}>TIXAR</Text>
        </SafeAreaView>
    )

}
const buttonContainerStyle = Platform.OS === 'ios' ? { backgroundColor: "#AB2FCD" } : { backgroundColor: 'transparent' };

const styles = StyleSheet.create({


    translucentBox: {
        height: '50%',
        width: '85%',
        position: 'absolute',
        top: 320,
        borderRadius: 15,
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'center'
    },
    email: {
        marginTop: 20,
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        marginBottom: 10,
        marginRight: 'auto'

    },
    text: {
        marginTop: 20,
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        marginBottom: 10,
        marginRight: 'auto'

    },
    subtitle: {
        fontFamily: 'Lato-Regular',
        fontSize: 15,
        marginBottom: 10,
        marginRight: 'auto'

    },

    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: '#f2f2f2',
    },
    footerText: {
        bottom: 15,
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        position: 'absolute'
    },

    viewTicketsButton: {
        marginTop: 50,
        backgroundColor: '#B731D9',
        borderWidth: 5,
        borderColor: '#fff'
    },

});

