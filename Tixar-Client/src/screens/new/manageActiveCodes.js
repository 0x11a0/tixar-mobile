import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import ActiveCodeCard from '../../components/new/activeCodeCard';

export default ManageActiveCodes = ({ route, navigation }) => {
    let { clubId, codes } = route.params;
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>
                {/* Your FanCards go here */}
                {codes.map((code) => {
                    return (
                        <ActiveCodeCard
                            codeName={code.code}
                            expirationDate={code.expires}
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
