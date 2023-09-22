import { React, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FanclubCard from '../../components/new/fanclubCard'; // Note the capital "F"

export default AdminDashboard = ({ navigation }) => { 

    return (

        <View style={styles.cardContainer}>

            <FanclubCard 
                navigationDestination={'NotificationsPage'}
                clubName={'Taylor Swift'}
                fanNumber={'1000'}
                codesActive={'100'}
            />

            
        </View>
 
    );
};

const styles = StyleSheet.create({

    cardContainer: {
        flex: 1, //grow and take up the space of the parent container
        justifyContent: 'flex-start',
        flexDirection: 'column',
        // backgroundColor: 'red',
    }
});
