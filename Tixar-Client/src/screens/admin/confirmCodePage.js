import { View, Text, StyleSheet, Animated, Easing, Dimensions } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import FooterBlock from '../../components/viewConcert/footerBlock';
import NextButton from '../../components/vf/nextButton';
import ProgressCircle from '../../components/vf/progressCircle';
import * as Clipboard from 'expo-clipboard';

export default ConfirmCodePage = ({ route, navigation }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [rotateRightPercent, setRotateRightPercent] = useState(new Animated.Value(0));
    const [circleOpacity, setCircleOpacity] = useState(new Animated.Value(1));
    const [rotateLeftPercent, setRotateLeftPercent] = useState(new Animated.Value(0));
    const textOpacity = useRef(new Animated.Value(0)).current;
    const rotateCircle = () => {
        Animated.sequence([
            Animated.timing(rotateRightPercent, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            Animated.timing(rotateLeftPercent, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ]).start(() => {
            setCircleOpacity(new Animated.Value(0));
            textFadeIn();
            Clipboard.setStringAsync(route.params.code);
            setRotateLeftPercent(new Animated.Value(0));
            setRotateRightPercent(new Animated.Value(0));
            setIsAnimating(false);
            navigation.pop(2);
        }
        )
    };

    const generateCode = () => {
        const body = {
            code: route.params.code,
            club: route.params.clubId,
            value: route.params.points,
            expires: route.params.expiryDate,
            status: 'active'
        }
        console.log(JSON.stringify(body));
        fetch('http://vf.tixar.sg/api/code', {
            method: 'POST',
            credentials: 'include',
            headers: {
               "Content-Type": "application/json",
                Authorization: route.params.token
            },
            body: JSON.stringify(body),
        }).then((response) => {
            if (response.ok) {
                console.log('success');
            } else {
                console.log("Error code: " + response.status);
            }
        }).catch(error => console.error(error));
    }

    const textFadeIn = () => {
        Animated.timing(textOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }

    const textFadeOut = () => {
        Animated.timing(textOpacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            rotateCircle();
        });
    }

    useEffect(() => {
        Animated.timing(circleOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [circleOpacity]);

    return (
        <View style={styles.container}>

            <View style={styles.upperBlock}>
                <Text style={styles.title}>Confirm code details</Text>
                <View style={{ height: 20 }} />
                <ProgressCircle
                    rotateRightPercent={rotateRightPercent}
                    rotateLeftPercent={rotateLeftPercent}
                    circleOpacity={circleOpacity}
                    textOpacity={textOpacity}
                    code={'Success'}
                />
                <View style={{ height: 20 }} />
                <View style={styles.fieldBox}>
                    <Text style={styles.fieldText}>
                        {route.params.code}</Text>
                </View>
                <View style={{ height: 20 }} />
                <View style={styles.fieldBox}>
                    <Text style={styles.fieldText}>
                        {route.params.points}</Text>
                </View>
                <View style={{ height: 20 }} />
                <View style={styles.fieldBox}>
                    <Text style={styles.fieldText}>
                        {route.params.expiryDate}</Text>
                </View>
            </View>

            <View style={{ height: 20 }} />

            <NextButton buttonText={'Confirm'}
                onPressFunction={() => {
                    setIsAnimating(true);
                    generateCode();
                    textFadeOut();

                }
                }
                enableCondition={true}
            />
            <FooterBlock />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        paddingVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    upperBlock: {
        // height: '80%',
        width: '100%',
        justifyContent: 'flex-start',
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
    },
    fieldBox: {
        height: 56,
        width: Dimensions.get('window').width * 0.70,
        borderRadius: 10,
        borderColor: '#D2D6DA',
        borderWidth: 1,
        justifyContent: 'center',
    },
    fieldText: {
        left: '5%',
        fontSize: 18,
        fontFamily: 'Lato-Regular',
        color: '#8F8F8F',
        paddingRight: 35,
    },
});
