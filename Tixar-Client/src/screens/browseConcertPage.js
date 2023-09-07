import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import SearchField from '../components/browseConcert/searchField';
import FilterButton from '../components/browseConcert/filterButton';
import ConcertBlock from '../components/viewConcert/concertBlock';


export default BrowseConcertPage = ({ route, navigation }) => {
    console.log(route.name);
    // useEffect(() => {
    //     navigation.setOptions({
            
    //     });
    // }, [navigation]);


    const [isNearbyFocused, setIsNearbyFocused] = useState(true);
    const [isTrendingFocused, setIsTrendingFocused] = useState(false);

    const handleNearbyPress = () => {
        setIsNearbyFocused(true);
        setIsTrendingFocused(false);
        console.log('display nearby');
    }

    const handleTrendingPress = () => {
        setIsNearbyFocused(false);
        setIsTrendingFocused(true);
        console.log('display trending');
    }

    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: 'white',
                paddingBottom: 13,
            }}>
                <SearchField />

                <View style={{ height: 16 }} />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <FilterButton buttonText={'Nearby'}
                        imageSource={require('../assets/soft-ui-pro-react-native-v1.1.1/location3x.png')}
                        isFocused={isNearbyFocused}
                        onPressFunction={handleNearbyPress} />


                    <View style={{ width: '5%' }} />

                    <Text style={{
                        fontFamily: 'Lato-Regular',
                        fontSize: 32,
                        marginBottom: 8,
                        color: '#8392AB',
                    }}>
                        |
                    </Text>

                    <View style={{ width: '5%' }} />

                    <FilterButton buttonText={'Trending'}
                        imageSource={require('../assets/soft-ui-pro-react-native-v1.1.1/location3x.png')}
                        isFocused={isTrendingFocused}
                        onPressFunction={handleTrendingPress} />

                </View>




            </View>
            <ScrollView style={styles.scrollView}>
                <ConcertBlock concertName={'Music of the Spheres'}
                    venueName={'National Singapore Stadium'}
                    dateText={'23, 24, 26, 27 January 2024'}
                    artistName={'Coldplay'}
                    artistDescription={'Lorem ipsum dolor sit amet consectetur'}
                    artistIcon={require('../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png')}
                    imageBackground={require('../assets/soft-ui-pro-react-native-v1.1.1/background3x.png')}
                    onPressFunction={() => { navigation.navigate('viewConcertPage'); }}
                />

                <ConcertBlock concertName={'The Eras Tour'}
                    venueName={'National Singapore Stadium'}
                    dateText={'2, 3, 4, 6, 7 March 2024'}
                    artistName={'Taylor Swift'}
                    artistDescription={'Lorem ipsum dolor sit amet consectetur'}
                    artistIcon={require('../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png')}
                    imageBackground={require('../assets/soft-ui-pro-react-native-v1.1.1/background3x.png')}
                />

                <ConcertBlock concertName={'The Eras Tour 2.0'}
                    venueName={'National Singapore Stadium'}
                    dateText={'2, 3, 4, 6, 7 March 2024'}
                    artistName={'Taylor Swift'}
                    artistDescription={'Lorem ipsum dolor sit amet consectetur'}
                    artistIcon={require('../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png')}
                    imageBackground={require('../assets/soft-ui-pro-react-native-v1.1.1/background3x.png')}
                />

            </ScrollView>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    scrollView: {
        backgroundColor: '#F2F2F2',
        // paddingVertical: 10,
        paddingHorizontal: 15,
    }

});