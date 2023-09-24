import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import FanCard from '../../components/new/manageFansCard';

export default ManageFans = ({ route, navigation }) => {
    let { clubId, members } = route.params;
    console.log(members);
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>
                {/* Your FanCards go here */}
                {members.map((member) => {
                    return (
                        <FanCard
                            key={member}
                            fanName={member}
                            fanPoints={'1000'}
                        />
                    );
                })}
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
