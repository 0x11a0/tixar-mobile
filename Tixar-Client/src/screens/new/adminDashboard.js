import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FanclubCard from '../../components/new/fanclubCard';
import NextButton from '../../components/new/nextButton';

export default AdminDashboard = ({ navigation }) => { 

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
            <View style={styles.container}>

                <ScrollView>
                    {/* Your FanclubCards go here */}
                    <FanclubCard 
                        navigationDestination={'NotificationsPage'} //place holder page, change to fanclub page
                        clubName={'Taylor Swift'}
                        fanNumber={'1000'}
                        codesActive={'100'}
                    />

                    {/* Add more FanclubCards as needed */}
                </ScrollView>

                {/* Next Button */}
                <View style={styles.buttonContainer}>
                    <NextButton
                        buttonText={'Create New Fanclub'}
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
        padding: 16,
    },
});
