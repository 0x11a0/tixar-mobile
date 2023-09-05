import { React } from 'react';
import { ImageBackground, View, Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput } from 'react-native';

export default LoadingScreen = ({ navigation, onLayout }) => {
    return (
        <SafeAreaView style={styles.container} onLayout={onLayout}>
            <View style={styles.viewPic} >
                <Image source={require('../assets/soft-ui-pro-react-native-v1.1.1/background3x.png')}
                />
            </View>
            <View style={styles.viewTitle}>
                <Text style={styles.title}>
                    TIXAR
                </Text>
            </View>
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
        fontSize: 35,
        fontFamily: 'Lato-Bold',
        color: 'white',
    },
    viewPic: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    viewTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 2,
    },

});