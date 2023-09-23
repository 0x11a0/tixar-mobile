import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import FanclubCard from '../../components/new/fanclubCard';
import NextButton from '../../components/new/nextButton';
import ManageFanclubCard from '../../components/new/manageFanclubCard';
import manageFanclubMiniCard from '../../components/new/manageFanclubMiniCard';
import ManageFanclubMiniCard from '../../components/new/manageFanclubMiniCard';

export default ManageFanClub = ({ navigation }) => { 

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
            <View style={styles.container}>

                <ManageFanclubCard
                    clubName={'Taylor Swift'}
                    description={'Taylor Swift Fanclub is the best fanclub in the world! blah blah blah blah blah hee hee hoo hoo hahh haah...I need more sleep.'}
                />

            <View style={styles.miniCardContainer}>
                <ManageFanclubMiniCard
                    navigationDestination={'NotificationsPage'} //place holder page, change to fans page
                    title={'Fan Count'}
                    textDisplay={'1000'}
                />

                <ManageFanclubMiniCard
                    navigationDestination={'NotificationsPage'} //place holder page, change to codes page
                    title={'Active Codes'}
                    textDisplay={'1234'}
                />
            </View>

                {/* Next Button */}
                <View style={styles.buttonContainer}>
                    <NextButton
                        buttonText={'Generate a Fan Code'}
                        onPressFunction={() => navigation.navigate('NotificationsPage')} //place holder destination, change to create new fanclub page
                        buttonHeight={50}
                    />
                </View>

            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 20,
    },
    miniCardContainer: {
        marginHorizontal: 20,
        // backgroundColor: 'red',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
