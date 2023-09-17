import { React, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput, FlatList , TouchableOpacity, Button, onPressLearnMore, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBlock from './headerBlockUserProfile';
const userEdit = ['Ewallet', 'Edit', 'Settings']


export default UserProfile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderBlock />
        
            <View style={ styles.translucentBox}>
                <Text style = {styles.email}>Email</Text>
                <Text style={styles.subtitle}>matthewglock@gmail.com</Text>
                <Text style = {styles.text}>Phone Number</Text>
                <Text style={styles.subtitle}>+ 65 9123 4567</Text>
                <TouchableOpacity style = {{marginTop:50}}>
                    <View style={buttonContainerStyle}>
                    <Button  onPress={() => Alert.alert('Link to view tickets')} title = "View My Tickets" accessibilityLabel="View Tickets"
                    color={Platform.OS === 'ios' ? "white" : "#AB2FCD"} />
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
        marginBottom:10,
        marginRight:'auto'

    }, 
      text: {
        marginTop: 20,
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        marginBottom:10,
        marginRight:'auto'

      }, 
      subtitle: {
        fontFamily: 'Lato-Regular',
        fontSize: 15,
        marginBottom:10,
        marginRight:'auto'

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

    viewTicketsButton:{
        marginTop:50,
        backgroundColor:'#B731D9',
        borderWidth: 5,
        borderColor: '#fff'
    },

});

