import { React } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput } from 'react-native';

export default BrowseHome = ({ onLayout }) => {
    return (
        <SafeAreaView style={styles.container} onLayout={onLayout}>
            <View style={styles.headerView}>
                <Text style={styles.title}>
                    TIXAR
                </Text>
            </View>
            {/* <View >
                <Text style={styles.title}>
                    Temp
                </Text>
            </View> */}
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        // left: 1,
        fontSize: 35,
        fontFamily: 'Lato-Bold',
        color: 'black',
    },
    headerView: {
        // flex: 1,
        top: '10%',
        position: 'absolute',
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        backgroundColor: 'red',
    }


});