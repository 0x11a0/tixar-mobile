import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import FooterBlock from '../../components/viewConcert/footerBlock';
import NextButton from '../../components/vf/nextButton';
import ProgressCircle from '../../components/vf/progressCircle';
import * as Clipboard from 'expo-clipboard';

export default GenerateFanCodePages = () => {
    const code = 'AFUHE12';
    const [isAnimating, setIsAnimating] = useState(false);
    const [rotateRightPercent, setRotateRightPercent] = useState(new Animated.Value(0));
    const [circleOpacity, setCircleOpacity] = useState(new Animated.Value(1));
    const [rotateLeftPercent, setRotateLeftPercent] = useState(new Animated.Value(0));
    const [textOpacity, setTextOpacity] = useState(new Animated.Value(0));
    const rotateRight = () => {
        Animated.timing(rotateRightPercent, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => {
            rotateLeft();
        });
    };
    const rotateLeft = () => {
        Animated.timing(rotateLeftPercent, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => {
            setCircleOpacity(new Animated.Value(0));
            textFadeIn();
            Clipboard.setStringAsync(code);
            setRotateLeftPercent(new Animated.Value(0));
            setRotateRightPercent(new Animated.Value(0));
            setIsAnimating(false);
        });
    };

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
            setIsAnimating(true);
            rotateRight();
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
                <Text style={styles.title}>Generate Fan Code</Text>

                <ProgressCircle
                    rotateRightPercent={rotateRightPercent}
                    rotateLeftPercent={rotateLeftPercent}
                    circleOpacity={circleOpacity}
                    textOpacity={textOpacity}
                    code={code}
                />
            </View>

            <View style={{ height: 20 }} />

            <NextButton buttonText={'Generate Code'}
                onPressFunction={() => {
                    if (!isAnimating) {
                        textFadeOut();
                        console.log('code copied to clipboard');
                    } else {
                        console.log('button disabled');
                    }
                }
                }
                buttonHeight={50}
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
        height: '55%',
        width: '100%',
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
});