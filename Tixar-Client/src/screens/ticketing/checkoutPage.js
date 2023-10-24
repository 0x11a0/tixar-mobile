import { View, StyleSheet, SafeAreaView, ScrollView, Pressable} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FooterBlock from '../../components/viewConcert/footerBlock';
import CheckoutBlock from '../../components/viewConcert/checkoutBlock';
import { ColorContext } from "../../../context";
import { useContext } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default CheckoutPage = ({navigation}) => {
    const insets = useSafeAreaInsets();
    const {colors} = useContext(ColorContext);

    const styles = StyleSheet.create({
        scrollContainer: {
            flex: 1,
            width: '100%',
            // backgroundColor: 'blue',
        },

        Container: {
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 20,
            // backgroundColor: 'red',
        },

        paymentContainer: {
            width: '100%',
            height: 100,
            flexDirection: 'row',
            marginTop: 20,
            // backgroundColor: 'green',
        },

        paymentMode: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'black',
            // backgroundColor: 'yellow',
        },

        ewalletContainer: {
            width: 85,
            height: 62,
            backgroundColor: colors.accent,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
        },
       
        subtitle: {
            fontSize: 16,
            fontFamily: 'Lato-Bold',
            color: '#252F40',
            paddingVertical: '5%',
        },
    
    });

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.background,
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.Container}>

                    <CheckoutBlock />

                    <View style={styles.paymentContainer}>

                        {/* visa */}
                        <Pressable 
                        style={styles.paymentMode}
                        onPress={() => navigation.navigate("browseConcertPage")}>
                            <FontAwesome name="cc-visa" size={70} color={colors.accent} />
                        </Pressable>

                        {/* master */}
                        <Pressable 
                        style={styles.paymentMode}
                        onPress={() => navigation.navigate("browseConcertPage")}>
                            <FontAwesome name="cc-mastercard" size={70} color={colors.accent} />
                        </Pressable>

                        {/* eWallet */}
                        <Pressable 
                        style={styles.paymentMode}
                        onPress={() => navigation.navigate("browseConcertPage")}>
                            <View style={styles.ewalletContainer}>
                                <Entypo name="wallet" size={55} color={colors.background}/>
                            </View>
                        </Pressable>

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}



