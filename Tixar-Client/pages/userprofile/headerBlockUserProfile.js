import { React, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput, TouchableOpacity, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList } from 'react-native-gesture-handler';


export default HeaderBlock = () => {
    return (
        <View style={styles.headerBox}>
            <Image source={require('../../src/assets/soft-ui-pro-react-native-v1.1.1/background3x.png')}
                style={styles.headerImage} />
            <Text style={styles.title}>TIXAR</Text>
            <Image source={require('../../src/assets/profilepicture.png')}
                style={styles.profileImage} />
            <Text style={styles.username}>Olivia Belle</Text>
            <Text style={styles.user}> User</Text>
            <TouchableOpacity style={{flexDirection: 'row', top:14,}} activeOpacity={0.5}>
            <View>
                <Image
                    source={require('../../src/assets/wallet.png')}
                    style={styles.walletStyle} 
                    />
            </View>
            <View>
                <Image
                    source={require('../../src/assets/edit.png')}
                    style={styles.editStyle}
                    />
            </View>
            <View>
                <Image
                    source={require('../../src/assets/settings.png')}
                    style={styles.settingStyle}
                    />
            </View>
           
        </TouchableOpacity>
        </View>
      
    );
}

const styles = StyleSheet.create({
    headerBox: {
        position: 'relative',
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        zIndex: 1,

    },
    title: {
        fontSize: 35,
        fontFamily: 'Lato-Bold',
        color: 'white',
        marginTop: 40,
    },
    headerImage: {
        marginTop: 30,
        width: '95%',
        height: 280,
        borderRadius: 22,
        resizeMode: 'contain',
        position: 'absolute',
    }, 
    profileImage: {
        flex: 0.35,
        width: 100,
        height: 100,
        resizeMode: 'contain',        
        marginTop: 10,
        marginBottom: 5,
    },
    username: {
        color: 'white',
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        marginBottom: 5,

    },

    user:{
        color: 'white',
        fontFamily: 'Lato-Bold',
        fontSize: 14,
        marginBottom: 10,
    },

    editStyle:{
        width: 50,
        height: 50,
        marginLeft:30,

    },

    walletStyle:{
        width: 50,
        height: 50,

    },

    settingStyle:{
        bottom:4,
        width: 60,
        height: 60,
        marginLeft:25,

    }

    
});

/*
{/* <TouchableOpacity>
                <Button  onPress={() => Alert.alert('Link to view tickets')} title="View My Tickets" color="#AB2FCD" accessibilityLabel="View Tickets" />
            </TouchableOpacity>  */