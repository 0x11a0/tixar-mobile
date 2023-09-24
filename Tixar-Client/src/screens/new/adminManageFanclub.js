import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import FanclubCard from '../../components/new/fanclubCard';
import NextButton from '../../components/new/nextButton';
import ManageFanclubCard from '../../components/new/manageFanclubCard';
import manageFanclubMiniCard from '../../components/new/manageFanclubMiniCard';
import ManageFanclubMiniCard from '../../components/new/manageFanclubMiniCard';

export default ManageFanClub = ({ route, navigation }) => {
    let club = route.params.club;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
            <View style={styles.container}>

                <ManageFanclubCard
                    clubName={club.name}
                    imageUrl={club.imageUrl}
                    description={club.description}
                />

                <View style={styles.miniCardContainer}>
                    <ManageFanclubMiniCard
                        // navigationDestination={'NotificationsPage'} //place holder page, change to fans page
                        onPressFunction={() => {
                            console.log(club);
                            navigation.navigate('adminFansPage', {
                                clubId: club._id,
                                members: club.members
                            });
                        }}
                        title={'Fan Count'}
                        textDisplay={club.members.length}
                    />

                    <ManageFanclubMiniCard
                        // navigationDestination={'adminCodesPage'} //place holder page, change to codes page
                        onPressFunction={() => {
                            navigation.navigate('adminCodesPage', {
                                clubId: club._id,
                                codes: club.codes
                            });
                        }}
                        title={'Active Codes'}
                        textDisplay={club.codes.length}
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
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
