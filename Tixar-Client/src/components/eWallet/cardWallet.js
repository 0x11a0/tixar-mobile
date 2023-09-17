import { React } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { creditcardicon } from '../../assets/creditcardicon.png';


export default cardWallet = ({navigation}) => {

    return (
            <View style={styles.container}>
                <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/background3x.png')}
                style={styles.headerImage} />
                <View style={styles.overlayContainer}>
                    <View style={styles.nameContainer}>
                        <View>
                            <Text style={styles.eCardTitle}>Matthew Glock</Text>
                        </View>
                        <View style = {{}}>
                            <Image source={require('../../assets/creditcardicon.png')}
                                style = {styles.profilePicture}/>
                        </View>
                    </View>
                    <View style={styles.profileContainer}>
                        <View>
                            <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png')} style={styles.profilePicture}/>
                        </View>
                        <View style = {{justifyContent: 'flex-end'}}>
                            <Text style={styles.balanceText}>Balance</Text>
                            <Text style={styles.balanceAmount}>$1000.88</Text>
                        </View>
                    </View>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        zIndex: 1,
    },
    overlayContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 2,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: '15%'
    },
    nameContainer: {
        flex: 1.5,
        zIndex: 2,
        flexDirection: 'column',
    },
    profileContainer: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'column',
        zIndex: 2,
    },
    headerImage: {
        width: 274,
        height: 161,
        borderRadius: 8,
        resizeMode: 'cover',
        zIndex: 1,
    },
    eCardTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 28,
        color: 'white'
    },
    profilePicture: {
        height: 60,
        width: 60,
        resizeMode: 'cover',
        borderRadius: 15
    },
    balanceText: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: 'white',
        textAlign: 'right',
    },
    balanceAmount: {
        fontFamily: 'Lato-Regular',
        fontSize: 22,
        color: 'white'
    }
});