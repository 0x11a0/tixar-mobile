import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FooterBlock from '../../components/viewConcert/footerBlock';
import NextButton from '../../components/viewConcert/nextButton';

export default ViewConcertPage = ({route, navigation}) => {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#F2F2F2',
            alignItems: 'center',
            justifyContent: 'flex-start',
            // paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <ScrollView style={{ width: '100%', }}
                contentContainerStyle={styles.container}>
                <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/background3x.png')}
                    style={styles.topImage} />

                <View style={{ height: 14 }} />

                <Text style={styles.venueText}>
                    National Singapore Stadium
                </Text>

                <View style={{ height: 15 }} />

                <Text style={styles.concertTitle}>
                    Music of the Spheres
                </Text>

                <View style={{ height: 24 }} />

                <Text style={styles.ticketCategoryDescription}>
                    Description of the performance and things to look out for or point out.
                </Text>

                <View style={{ height: 22 }} />

                <Image source={require('../../assets/images/concertLayout.png')}
                    style={styles.layoutImage} />

                <View style={{ height: 17 }} />

                <Text style={styles.ticketCategoryText}>
                    Ticket Categories
                </Text>

                <View style={{ height: 16 }} />

                <Text style={styles.ticketCategoryDescription}>
                    Lorem ipsum dolor sit amet consectetur.
                    Elementum mauris turpis non eu eget vitae tincidunt nunc.
                    Nibh at viverra mollis viverra aenean.
                    Sollicitudin arcu consequat viverra nisi morbi aenean placerat eget.
                </Text>

                <View style={{ height: 32 }} />
                <NextButton buttonText={"Check Availbility"}
                    onPressFunction={() => {
                        navigation.navigate('concertCategoryPage');
                    }} />
                <View style={{ height: 20 }} />
                <FooterBlock />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // width: '90%',
        // backgroundColor: 'blue',
        paddingHorizontal: 20,
    },
    topImage: {
        marginTop: 15,
        height: 257,
        width: '100%',
        borderRadius: 15,
    },
    venueText: {
        fontSize: 17,
        color: '#67748E',
        fontFamily: 'Lato-Regular',
        paddingHorizontal: 5,
        lineHeight: 20,
    },
    concertTitle: {
        fontSize: 26,
        color: '#252F40',
        fontFamily: 'Lato-Bold',
        paddingHorizontal: 5,
        lineHeight: 27,
    },
    ticketCategoryDescription: {
        fontSize: 17,
        color: '#252F40',
        fontFamily: 'Lato-Regular',
        paddingHorizontal: 5,
        lineHeight: 26,
    },
    layoutImage: {
        // backgroundColor: 'green',
        width: '90%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    ticketCategoryText: {
        fontSize: 26,
        color: '#252F40',
        fontFamily: 'Lato-Bold',
        paddingHorizontal: '5%',
        // backgroundColor: 'orange',
        lineHeight: 27,
    },
    ticketCategoryDescription: {
        fontSize: 17,
        color: '#252F40',
        fontFamily: 'Lato-Regular',
        paddingHorizontal: '5%',
        lineHeight: 26,
    }
});

