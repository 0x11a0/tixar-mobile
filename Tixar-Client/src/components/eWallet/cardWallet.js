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
                        <View style={{flexDirection: 'row',
                                    flex: 4}}>

                            <Text style={styles.eCardTitle}>Matthew Glock</Text>
                        </View>
                        <View style = {{flex: 6, flexDirection: 'column',
                                        justifyContent: 'flex-end'}}>
                            <Image source={require('../../assets/creditcardicon.png')}
                                style = {{height: 75, width: 100,}}/>
                        </View>
                    </View>
                    <View style={styles.profileContainer}>
                        <View style={{marginBottom: 20}}>
                            <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png')} style={styles.profilePicture}/>
                        </View>
                        <View style = {{justifyContent: 'flex-end', flex: 1}}>
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
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    nameContainer: {
        flex: 1.5,
        zIndex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    nameContainerDetails: {
        backgroundColor: 'purple'
    },
    profileContainer: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'column',
        zIndex: 2,
    },
    headerImage: {
        width: '85%',
        height: '100%',
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
        height: 80,
        width: 80,
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