import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import FooterBlock from '../components/viewConcert/footerBlock';

export default AnimationPage = () => {

    return (
        <View style={styles.container}>

            <View style={styles.upperBlock}>
                <Text style={styles.title}>Generate Fan Code</Text>

                <View style={{
                    height: '50%',
                    width: '50%',
                    borderRadius: Dimensions.get('window').width / 2,
                    backgroundColor: '#D9D9D9',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    {/* <View style={{
                        height: '100%',
                        width: '50%',
                        borderRadius: Dimensions.get('window').width / 2,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        backgroundColor: 'white',
                        zIndex: 2,
                        alignSelf: 'flex-end',
                        position: 'absolute'
                    }} /> */}

                    <View style={{
                        height: '90%',
                        width: '90%',
                        borderRadius: Dimensions.get('window').width / 2,
                        backgroundColor: 'white',
                        zIndex: 3,
                        position: 'absolute'
                    }} />

                    <LinearGradient style={{
                        height: '100%',
                        width: '50%',
                        borderRadius: Dimensions.get('window').width / 2,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        backgroundColor: 'white',
                        zIndex: 1,
                        position: 'absolute',
                        overflow: 'hidden',
                        transform: [
                            { translateX: (Dimensions.get('window').width / 8) },
                            { rotate: '0deg' }]
                    }}
                        colors={['#FF0080', '#7928CA']}
                        start={[0, 0]} end={[1, 1]}
                    />

                </View>
            </View>

            <FooterBlock />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        paddingTop: 20,
        alignItems: 'center',
    },
    upperBlock: {
        height: '50%',
        width: '90%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        paddingVertical: '5%',
        paddingHorizontal: '5%',
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: '#252F40',
        height: '25%',
    },
    circleView: {

    },
});