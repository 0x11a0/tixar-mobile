import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import ActiveCodeCard from '../../components/new/activeCodeCard';

export default ManageActiveCodes = ({ navigation }) => { 

    return (
        <SafeAreaView style={styles.container}>

                <ScrollView>

                    {/* Your FanCards go here */}
                    <ActiveCodeCard
                        codeName={'12345678ABCDEF'}
                        expirationDate={'10/06/2024'}
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
