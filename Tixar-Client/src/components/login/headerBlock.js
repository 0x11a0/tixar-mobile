import { React } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default HeaderBlock = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.backButton}
                onPress={() => {
                    navigation.pop();
                }}>
                <Image source={require('../../assets/images/backArrow3x.png')}
                    style={styles.buttonIcon} />
                <Text style={styles.buttonText}>{"Back"}</Text>
            </Pressable>

            <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/background3x.png')}
                style={styles.headerImage} />

            <Text style={styles.title}>TIXAR</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        zIndex: 1,
    },
    title: {
        fontSize: 35,
        fontFamily: 'Lato-Bold',
        color: 'white',
        marginTop: 40,
        zIndex: 2,
    },
    headerImage: {
        width: '92%',
        height: 225,
        borderRadius: 22,
        resizeMode: 'cover',
        position: 'absolute',
        zIndex: 1,
    },
    backButton: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'absolute',
        zIndex: 2,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 17,
        fontFamily: 'Lato-Regular',
        color: 'white',
        zIndex: 2,
        paddingBottom: 5,
        marginLeft: 12,
    },
    buttonIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
    },
});