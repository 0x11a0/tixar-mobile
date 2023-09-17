import { View, Text, Animated, StyleSheet, Dimensions } from 'react-native';
import { useState, useEffect, useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { interpolate } from 'react-native-reanimated';

export default AnimationPage = () => {
    const insets = useSafeAreaInsets();
    const length = Dimensions.get('window').width / 4;
    const duration = 1000;
    // const firstInter2 = firstAnimation.interpolate({
    //     inputRange: [-1, 0, 1],
    //     outputRange: ['0deg', '30deg', '0deg'],
    // });

    const [topLeftzIndex, setTopLeftzIndex] = useState(0);
    const [topRightzIndex, setTopRightzIndex] = useState(1);
    const [bottomRightzIndex, setBottomRightzIndex] = useState(2);
    const [bottomLeftzIndex, setBottomLeftzIndex] = useState(3);

    const [topRightOpacity, setTopRightOpacity] = useState(new Animated.Value(0));
    const [bottomRightOpacity, setBottomRightOpacity] = useState(new Animated.Value(0));
    const [bottomLeftOpacity, setBottomLeftOpacity] = useState(new Animated.Value(0));
    const [topLeftOpacity, setTopLeftOpacity] = useState(new Animated.Value(0));

    // const [firstAnimation, setFirstAnimation] = useState(new Animated.Value(-1));
    const firstAnimation = useRef(new Animated.Value(-1)).current;
    const secondAnimation = useRef(new Animated.Value(-1)).current;
    const thirdAnimation = useRef(new Animated.Value(-1)).current;
    const fourthAnimation = useRef(new Animated.Value(1)).current;
    const fifthAnimation = useRef(new Animated.Value(1)).current;
    const sixthAnimation = useRef(new Animated.Value(1)).current;
    const seventhAnimation = useRef(new Animated.Value(1)).current;

    // const [secondAnimation, setSecondAnimation] = useState(new Animated.Value(-1));
    // const [thirdAnimation, setThirdAnimation] = useState(new Animated.Value(-1));
    // const [fourthAnimation, setFourthAnimation] = useState(new Animated.Value(1));
    // const [fifthAnimation, setFifthAnimation] = useState(new Animated.Value(1));
    // const [sixthAnimation, setSixthAnimation] = useState(new Animated.Value(1));
    // const [seventhAnimation, setSeventhAnimation] = useState(new Animated.Value(1));
    // const [eighthAnimation, setEighthAnimation] = useState(new Animated.Value(-1));

    const firstInter = firstAnimation.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['0deg', '-90deg', '0deg'],
    });
    const secondInter = secondAnimation.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['0deg', '90deg', '0deg'],
    });
    const thirdInter = thirdAnimation.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['0deg', '-90deg', '0deg'],
    });

    const fourthInter = fourthAnimation.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['0deg', '90deg', '0deg'],
    });
    const fifthInter = fifthAnimation.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['0deg', '-90deg', '0deg'],
    });
    const sixthInter = sixthAnimation.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['0deg', '90deg', '0deg'],
    });
    const seventhInter = seventhAnimation.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['0deg', '90deg', '0deg'],
    });

    const animate0 = () => {
        Animated.timing(topLeftOpacity, {
            toValue: 1,
            duration: duration,
            useNativeDriver: true,
        }).start(() => {
            animate1();
        });
    }

    const animate1 = () => {
        Animated.parallel([
            Animated.timing(firstAnimation, {
                toValue: 1,
                duration: duration,
                useNativeDriver: true,
            }),
            Animated.timing(topRightOpacity, {
                toValue: 1,
                duration: duration,
                useNativeDriver: true,
            }),
        ]).start(() => {
            animate2();
        });
    }

    const animate2 = () => {
        Animated.parallel([
            Animated.timing(secondAnimation, {
                toValue: 1,
                duration: duration,
                useNativeDriver: true,
            }),
            Animated.timing(bottomRightOpacity, {
                toValue: 1,
                duration: duration,
                useNativeDriver: true,
            }),
        ]).start(() => {
            animate3();
        });
    }
    const animate3 = () => {
        Animated.parallel([
            Animated.timing(thirdAnimation, {
                toValue: 1,
                duration: duration,
                useNativeDriver: true,
            }),
            Animated.timing(bottomLeftOpacity, {
                toValue: 1,
                duration: duration,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setTopLeftzIndex(3);
            setTopRightzIndex(2);
            setBottomRightzIndex(1);
            setBottomLeftzIndex(0);
            animate4();
        });
    }
    const animate4 = () => {
        Animated.parallel([
            Animated.timing(fourthAnimation, {
                toValue: -1,
                duration: duration,
                useNativeDriver: true,
            }),
            Animated.timing(topLeftOpacity, {
                toValue: 0,
                duration: duration,
                useNativeDriver: true,
            }),
        ]).start(() => {
            animate5();
        });
    }
    const animate5 = () => {
        Animated.parallel([
            Animated.timing(fifthAnimation, {
                toValue: -1,
                duration: duration,
                useNativeDriver: true,
            }),
            Animated.timing(topRightOpacity, {
                toValue: 0,
                duration: duration,
                useNativeDriver: true,
            }),
        ]).start(() => {
            animate6();
        });
    }
    const animate6 = () => {
        Animated.parallel([
            Animated.timing(sixthAnimation, {
                toValue: -1,
                duration: duration,
                useNativeDriver: true,
            }),
            Animated.timing(bottomRightOpacity, {
                toValue: 0,
                duration: duration,
                useNativeDriver: true,
            }),
        ]).start(() => {
            animate7();
        });
    }

    const animate7 = () => {
        Animated.parallel([
            Animated.timing(seventhAnimation, {
                toValue: -1,
                duration: duration,
                useNativeDriver: true,
            }),
            Animated.timing(bottomLeftOpacity, {
                toValue: 0,
                duration: duration,
                useNativeDriver: true,
            }),
        ]).start(() => {
            firstAnimation.setValue(-1);
            secondAnimation.setValue(-1);
            thirdAnimation.setValue(-1);
            fourthAnimation.setValue(1);
            fifthAnimation.setValue(1);
            sixthAnimation.setValue(1);
            seventhAnimation.setValue(1);
            setTopLeftzIndex(0);
            setTopRightzIndex(1);
            setBottomRightzIndex(2);
            setBottomLeftzIndex(3);
            // animate0();
        });
    }



    useEffect(() => {
        animate0();
    }, []);

    return (
        <View style={{
            flex: 1,
            // backgroundColor: 'red',
            marginTop: insets.top,
            paddingBottom: insets.bottom,
            paddingRight: insets.right,
            paddingLeft: insets.left,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{
                height: length * 2,
                width: length * 2,
            }}>
                {/* top left */}
                <Animated.View style={[styles.animatedView, {
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    opacity: topLeftOpacity,
                    zIndex: topLeftzIndex,
                    transform: [
                        { scaleX: fourthAnimation },
                        { rotateY: fourthInter },
                    ]
                }]}>
                    <LinearGradient colors={['#FF0080', '#7928CA']}
                        style={styles.coolBox}
                        start={[0, 1]} end={[1, 0]} />
                </Animated.View>

                {/* top right */}
                <Animated.View style={[styles.animatedView, {
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    opacity: topRightOpacity,
                    zIndex: topRightzIndex,
                    transform: [
                        { scaleX: firstAnimation },
                        { rotateY: firstInter },
                        { scaleY: fifthAnimation },
                        { rotateX: fifthInter },
                    ]

                }]}>
                    <LinearGradient colors={['#FF0080', '#7928CA']}
                        style={styles.coolBox}
                        start={[0, 1]} end={[1, 0]} />
                </Animated.View>

                {/* bottom right */}
                <Animated.View style={[styles.animatedView, {
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    opacity: bottomRightOpacity,
                    zIndex: bottomRightzIndex,
                    transform: [
                        { scaleY: secondAnimation },
                        { rotateX: secondInter },
                        { scaleX: sixthAnimation },
                        { rotateY: sixthInter },
                    ]

                }]}>
                    <LinearGradient colors={['#FF0080', '#7928CA']}
                        style={styles.coolBox}
                        start={[0, 1]} end={[1, 0]} />
                </Animated.View>

                {/* bottom left */}
                <Animated.View style={[styles.animatedView, {
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                    opacity: bottomLeftOpacity,
                    zIndex: bottomLeftzIndex,
                    transform: [
                        { scaleX: thirdAnimation },
                        { rotateY: thirdInter },
                        { scaleY: seventhAnimation },
                        { rotateX: seventhInter },
                    ]

                }]}>
                    <LinearGradient colors={['#FF0080', '#7928CA']}
                        style={styles.coolBox}
                        start={[0, 1]} end={[1, 0]} />
                </Animated.View>

            </View>

            <View style={{ height: 20 }} />
            <View style={{
                // backgroundColor: 'green'
            }}>
                <Text style={styles.text}>
                    Loading
                </Text>
            </View>
        </View>
    );

}



const styles = StyleSheet.create({
    text: {
        fontFamily: 'Lato-Bold',
        fontSize: 30,
    },
    coolBox: {
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        position: 'absolute',
        // borderTopWidth: 0,
        // borderRightWidth: 0,
        borderRadius: Dimensions.get('window').width / 64,
        // borderWidth: 1,
        // borderColor: 'black',
    },
    animatedView: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    }
});