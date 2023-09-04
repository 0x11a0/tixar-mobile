import { React } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput } from 'react-native';

export default LoadingScreen = ({ onLayout }) => {
    return (
        <SafeAreaView style={styles.container} onLayout={onLayout}>
            {/* <Text style={styles.title}>
                hi
            </Text> */}
            <View styles={styles.viewPic}>
                <Image source={require('../assets/soft-ui-pro-react-native-v1.1.1/background3x.png')}></Image>
            </View>
            <View styles={styles.viewTitle}>
                <Text>
                    TIXAR
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 35,
        fontFamily: 'Lato-Bold',
        color: 'black',
        marginTop: 40,
    },
    viewPic: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    viewTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
    },
    headerImage: {
        // width: '92%',
        // height: 225,
        borderRadius: 22,
        resizeMode: 'contain',
        position: 'absolute',
    },
});