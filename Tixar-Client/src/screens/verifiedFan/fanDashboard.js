import { React, useState } from 'react';
import { FlatList, View, Text, StyleSheet, ScrollView, Pressable, Image, SafeAreaViewBase, SafeAreaView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ArtistBlock from '../../components/verifiedFans/artistBlock';

const Artists = [
    /* pass in 1. Artist Name
                2. Artist Description
                3. Artist Icon
                4. Points
                5. On press go to which page */
    {
        id: '1',
        artistName: 'The Weeknd',
        points: 100,
        artistDescription: 'Abel Makkonen Tesfaye (Amharic: አበል መኮነን ተስፋዬ; born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer.[2][3] He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.[4][5] His accolades include 4 Grammy Awards, 20 Billboard Music Awards, 22 Juno Awards, 6 American Music Awards, 2 MTV Video Music Awards, a Latin Grammy Award, and nominations for an Academy Award and a Primetime Emmy Award.',
        artistIcon: require('../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png'),
    },
    {
        id: '2',
        artistName: '2',
        points: 100,
        artistDescription: 'Abel Makkonen Tesfaye (Amharic: አበል መኮነን ተስፋዬ; born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer.[2][3] He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.[4][5] His accolades include 4 Grammy Awards, 20 Billboard Music Awards, 22 Juno Awards, 6 American Music Awards, 2 MTV Video Music Awards, a Latin Grammy Award, and nominations for an Academy Award and a Primetime Emmy Award.',
        artistIcon: require('../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png'),
    },
    {
        id: '3',
        artistName: 'Guy with very long name',
        points: 100,
        artistDescription: 'Abel Makkonen Tesfaye (Amharic: አበል መኮነን ተስፋዬ; born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer.[2][3] He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.[4][5] His accolades include 4 Grammy Awards, 20 Billboard Music Awards, 22 Juno Awards, 6 American Music Awards, 2 MTV Video Music Awards, a Latin Grammy Award, and nominations for an Academy Award and a Primetime Emmy Award.',
        artistIcon: require('../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png'),
    },
    {
        id: '4',
        artistName: 'The 4',
        points: 100,
        artistDescription: 'Abel Makkonen Tesfaye (Amharic: አበል መኮነን ተስፋዬ; born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer.[2][3] He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.[4][5] His accolades include 4 Grammy Awards, 20 Billboard Music Awards, 22 Juno Awards, 6 American Music Awards, 2 MTV Video Music Awards, a Latin Grammy Award, and nominations for an Academy Award and a Primetime Emmy Award.',
        artistIcon: require('../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png'),
    },
    {
        id: '5',
        artistName: 'The 5',
        points: 100,
        artistDescription: 'Abel Makkonen Tesfaye (Amharic: አበል መኮነን ተስፋዬ; born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer.[2][3] He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.[4][5] His accolades include 4 Grammy Awards, 20 Billboard Music Awards, 22 Juno Awards, 6 American Music Awards, 2 MTV Video Music Awards, a Latin Grammy Award, and nominations for an Academy Award and a Primetime Emmy Award.',
        artistIcon: require('../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png'),
    },
    {
        id: '6',
        artistName: 'The 6',
        points: 100,
        artistDescription: 'Abel Makkonen Tesfaye (Amharic: አበል መኮነን ተስፋዬ; born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer.[2][3] He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.[4][5] His accolades include 4 Grammy Awards, 20 Billboard Music Awards, 22 Juno Awards, 6 American Music Awards, 2 MTV Video Music Awards, a Latin Grammy Award, and nominations for an Academy Award and a Primetime Emmy Award.',
        artistIcon: require('../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png'),
    },
    {
        id: '7',
        artistName: 'The 7',
        points: 100,
        artistDescription: 'Abel Makkonen Tesfaye (Amharic: አበል መኮነን ተስፋዬ; born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer.[2][3] He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.[4][5] His accolades include 4 Grammy Awards, 20 Billboard Music Awards, 22 Juno Awards, 6 American Music Awards, 2 MTV Video Music Awards, a Latin Grammy Award, and nominations for an Academy Award and a Primetime Emmy Award.',
        artistIcon: require('../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png'),
    },
    {
        id: '8',
        artistName: 'The 8',
        points: 100,
        artistDescription: 'Abel Makkonen Tesfaye (Amharic: አበል መኮነን ተስፋዬ; born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer.[2][3] He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.[4][5] His accolades include 4 Grammy Awards, 20 Billboard Music Awards, 22 Juno Awards, 6 American Music Awards, 2 MTV Video Music Awards, a Latin Grammy Award, and nominations for an Academy Award and a Primetime Emmy Award.',
        artistIcon: require('../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png'),
    },
  ];
  
//   Flatlist stuff
  const Item = ({artistName, points, artistDescription, artistIcon}) => (
    <ArtistBlock artistName={artistName}
        points={points}
        artistDescription={artistDescription}                    
        artistIcon={artistIcon}
        // Can add the artist page here
        onPressFunction={() => {
                        console.log(artistName + ' pressed');
                        navigation.navigate('ArtistPage', {artistName: 'The Weeknd'});
                    }} />
  );

  const renderItem = ({item}) => (
    <Item artistName = {item.artistName}
        points={item.points}
        artistDescription={item.artistDescription}
        artistIcon={item.artistIcon}/>
    );

export default FanDashboard = ({navigation, }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#F8F9FA",
        }}>
            <View style={styles.container}>
                <RedeemButton navigation={navigation} />
            </View>

            <FlatList style={styles.list}
                data={Artists}
                renderItem={renderItem}
                keyExtractor={item => item.id}/>

            <View>
                <Text style={styles.footerText}>TIXAR</Text>
            </View>
        </SafeAreaView>
    );
}

const RedeemButton = ({navigation}) => {
    return (
        <LinearGradient colors={['#EBEFF4', '#CED4DA']}
            style={styles.redeemBackground}
            start={[0, 0]} end = {[1, 0]}>
            <Pressable style = {styles.redeemButton}
                onPress={() => {
                    console.log('Navigating to redemption page');
                    navigation.navigate('RedemptionPage');
                }}>
                <Text style = {styles.redeemText}>Have a code? Redeem it here.</Text>
            </Pressable>     
        </LinearGradient>           
    )
}

const styles = StyleSheet.create({
    // redeem button
    redeemBackground: {
        width: '86%',
        height: 50,
        borderRadius: 8,
        marginTop: 15,
        alignSelf: 'center',
    },
    redeemButton: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    redeemText: {
        fontSize: 15,
        fontFamily: 'Lato-Bold',
        color: '#3A416F',
    },

    // list
    list: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 40,
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