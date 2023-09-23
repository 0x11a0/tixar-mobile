import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import FanCard from '../../components/new/manageFansCard';

export default ManageFans = ({ navigation }) => { 

    return (
        <SafeAreaView style={styles.container}>

                <ScrollView>

                    {/* Your FanCards go here */}
                    <FanCard
                        fanName={'John Doe'}
                        fanPoints={'1000'}
                    />
                
                </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2' 
    },
});
