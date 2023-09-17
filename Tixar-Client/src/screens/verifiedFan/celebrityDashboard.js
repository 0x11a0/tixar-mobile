import { React, useState } from 'react';
import { FlatList, View, Text, StyleSheet, ScrollView, Pressable, Image, SafeAreaViewBase, SafeAreaView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ArtistBlock from '../../components/verifiedFans/artistBlock';
import StatisticBox from '../../components/verifiedFans/statisticBox';
import ConcertBox from '../../components/verifiedFans/concertBox'; 

export default CelebrityDashboard = ({navigation}) => {

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#F8F9FA",
            }}>
                
            <GenerateButton/>
            
            <View style={{
                flex: 1,
                width: '90%',
                alignItems: 'center',
                alignSelf: 'center',
            }}>
            <StatisticBox
                artistName={'Taylor'}
                monthlyInteractions={40123}
                newFans={16452}
                totalFans={131239543}
                artistIcon={require('../../assets/taylorswifticon.png')}/>

            <View style={{flexDirection: 'row',}}>
                <ConcertBox
                    artistName={'Taylor'}
                    monthlyInteractions={40123}
                    newFans={16452}
                    totalFans={131239543}
                    artistIcon={require('../../assets/taylorswifticon.png')}/>
            </View>
            {/* <View>
                <Text style={styles.footerText}>TIXAR</Text>
            </View> */}

            </View>
        </SafeAreaView>
    );
}

const GenerateButton = ({navigation}) => {
    return (
        <LinearGradient colors={['#EBEFF4', '#CED4DA']}
            style={styles.generateBackground}
            start={[0, 0]} end = {[1, 0]}>
            <Pressable style = {styles.generateButton}
                onPress={() => {
                    console.log('Navigating to generation page');
                    navigation.navigate('GenerationPage');
                }}>
                <Text style = {styles.generateText}>Generate a Fan Code.</Text>
            </Pressable>     
        </LinearGradient>           
    )
}

const styles = StyleSheet.create({

        // generate button
        generateBackground: {
            width: '86%',
            height: 50,
            borderRadius: 8,
            marginTop: 15,
            alignSelf: 'center',
        },
        generateButton: {
            width: '100%',
            height: 50,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
        },
        generateText: {
            fontSize: 15,
            fontFamily: 'Lato-Bold',
            color: '#3A416F',
        },

    // footer
    footerText: {
        bottom: 15,
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        position: 'absolute',
        alignSelf:'center',
    },
});