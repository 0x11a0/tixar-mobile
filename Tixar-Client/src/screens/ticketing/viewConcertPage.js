import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FooterBlock from '../../components/viewConcert/footerBlock';
import { ColorContext } from "../../../context";
import { useContext } from "react";
import Button from '../../components/newApp/button';


export default ViewConcertPage = ({route, navigation}) => {

    const {colors} = useContext(ColorContext);
    const insets = useSafeAreaInsets();
    const styles = StyleSheet.create({

        // main container
        container: {
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            backgroundColor: colors.background,
            paddingHorizontal: 20,
        },

        // images
        topImage: {
            height: 257,
            width: '100%',
            borderRadius: 15,
            marginVertical: 20,
        },

        layoutImage: {
            width: '100%',
            borderRadius: 15,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginVertical: 20,
            backgroundColor: colors.primary,
        },

        // text
        venueText: {
            fontSize: 17,
            color: colors.textPrimary,
            fontFamily: 'Lato-Regular',
            lineHeight: 20,
            marginBottom: 15,
        },
        concertTitle: {
            fontSize: 26,
            color: colors.textPrimary,
            fontFamily: 'Lato-Bold',
            lineHeight: 27,
            marginBottom: 15,
        },
        ticketCategoryTitle: {
            fontSize: 26,
            color: colors.textPrimary,
            fontFamily: 'Lato-Bold',
            lineHeight: 27,
            marginBottom: 15,
            // backgroundColor: 'orange'
        },
        ticketCategoryDescription: {
            fontSize: 15,
            color: colors.textPrimary,
            fontFamily: 'Lato-Regular',
            lineHeight: 27,
            marginBottom: 15,
        },

        //button container
        buttonContainer: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
            // backgroundColor: 'red',
        },
    });

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.background,
            alignItems: 'center',
            justifyContent: 'flex-start',
            // paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <ScrollView style={{ width: '100%', }}
                contentContainerStyle={styles.container}>

                {/* Top Image from DB */}
                <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/background3x.png')} 
                    style={styles.topImage} />

                {/* Venue from DB */}
                <Text style={styles.venueText}>
                    National Singapore Stadium 
                </Text>

                {/* Concert Title from DB */}
                <Text style={styles.concertTitle}>
                    Music of the Spheres
                </Text>

                {/* Description from DB */}
                <Text style={styles.ticketCategoryDescription}>
                    Description of the performance and things to look out for or point out.
                </Text>

                {/* Concert Category Image from DB */}
                <Image source={require('../../assets/images/concertLayout.png')}
                    style={styles.layoutImage} />

                {/* Ticket Category Title */}
                <Text style={styles.ticketCategoryTitle}>
                    Ticket Categories
                </Text>

                {/* Ticket Category Description from DB */}
                <Text style={styles.ticketCategoryDescription}>
                    Lorem ipsum dolor sit amet consectetur.
                    Elementum mauris turpis non eu eget vitae tincidunt nunc.
                    Nibh at viverra mollis viverra aenean.
                    Sollicitudin arcu consequat viverra nisi morbi aenean placerat eget.
                </Text>

                {/* Ticket Category Button */}
                <View style={styles.buttonContainer}>
                    <Button buttonText={"Check Availbility"}
                        onPressFunction={() => {
                            navigation.navigate('concertCategoryPage');
                        }} 
                        enableCondition={true} //change to enable condition based on account verified fan status and access
                    />
                </View>
                
                

                <View style={{ height: 20 }} />

                <FooterBlock />
            </ScrollView>
        </SafeAreaView>
    );
}



