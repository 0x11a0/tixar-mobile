import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FooterBlock from '../../components/viewConcert/footerBlock';
import NextButton from '../../components/viewConcert/nextButton';
import OptionFields from '../login/optionFields';
import CheckoutBlock from '../../components/viewConcert/checkoutBlock';

export default ViewConcertPage = () => {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#F2F2F2',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <ScrollView style={{ width: '100%', }}
                contentContainerStyle={styles.container}>
                
                <CheckoutBlock />
                
                {/* <View style={{ height: 17 }} />
                <Image source={require('../../assets/images/concertLayout.png')}
                    style={styles.layoutImage} />

                <View style={{ height: 30 }} />

                <View style={{
                    width: '100%',

                    borderRadius: 20,
                    backgroundColor: 'white',
                    zIndex: 1,
                    paddingHorizontal: '5%',
                }}>
                    <Text style={styles.subtitle}>
                        Availibility
                    </Text>

                    <OptionFields optionText={"Select date"}
                        icon={require('../../assets/soft-ui-pro-react-native-v1.1.1/calendar3x.png')} />

                    <Text style={styles.subtitle}>
                        Quantity
                    </Text>

                    <OptionFields optionText={"01"}
                        icon={require('../../assets/soft-ui-pro-react-native-v1.1.1/users3x.png')} />

                    <Text style={styles.subtitle}>
                        Seat Category
                    </Text>

                    <OptionFields optionText={"Category 1"}
                        icon={require('../../assets/soft-ui-pro-react-native-v1.1.1/hotel3x.png')} />

                    <View style={{ height: 25 }} />

                    <NextButton buttonText={"BOOK NOW"}
                        onPressFunction={() => {
                            console.log('Check availibilty clicked');
                        }}
                        buttonHeight={50}
                    />

                    <View style={{ height: 20 }} />
                </View>





                <View style={{ height: 20 }} /> */}
                <FooterBlock />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        // width: '90%',
        // backgroundColor: 'blue',
        // paddingHorizontal: 20,
    },
    layoutImage: {
        // backgroundColor: 'green',
        width: '90%',
        resizeMode: 'contain',
        alignSelf: 'center',

    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Lato-Bold',
        color: '#252F40',
        paddingVertical: '5%',
    },

});

