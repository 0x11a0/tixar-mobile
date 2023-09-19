import { View, Text, Animated, StyleSheet, Dimensions } from 'react-native';
import { useState, useEffect, useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { interpolate } from 'react-native-reanimated';

export default AnimationPage = () => {
    const insets = useSafeAreaInsets();
    const length = Dimensions.get('window').width / 8;
    const duration = 700;

    const arrow = ' >';

    const firstArrowOpacity = useRef(new Animated.Value(0)).current;
    const secondArrowOpacity = useRef(new Animated.Value(0)).current;
    const thirdArrowOpacity = useRef(new Animated.Value(0)).current;

    const animateArrows = () => {
        Animated.sequence([
            Animated.timing(firstArrowOpacity, {
                toValue: 1,
                duration: duration / 2,
                useNativeDriver: true,
            }),
            Animated.timing(secondArrowOpacity, {
                toValue: 1,
                duration: duration / 2,
                useNativeDriver: true,
            }),
            Animated.timing(thirdArrowOpacity, {
                toValue: 1,
                duration: duration / 2,
                useNativeDriver: true,
            }),
        ]).start(() => {
            firstArrowOpacity.setValue(0);
            secondArrowOpacity.setValue(0);
            thirdArrowOpacity.setValue(0);
            animateArrows();
        });
    }



    const [topLeftzIndex, setTopLeftzIndex] = useState(0);
    const [topRightzIndex, setTopRightzIndex] = useState(1);
    const [bottomRightzIndex, setBottomRightzIndex] = useState(2);
    const [bottomLeftzIndex, setBottomLeftzIndex] = useState(3);

    const topRightOpacity = useRef(new Animated.Value(0)).current;
    const bottomRightOpacity = useRef(new Animated.Value(0)).current;
    const bottomLeftOpacity = useRef(new Animated.Value(0)).current;
    const topLeftOpacity = useRef(new Animated.Value(0)).current;

    const firstAnimation = useRef(new Animated.Value(-1)).current;
    const secondAnimation = useRef(new Animated.Value(-1)).current;
    const thirdAnimation = useRef(new Animated.Value(-1)).current;
    const fourthAnimation = useRef(new Animated.Value(1)).current;
    const fifthAnimation = useRef(new Animated.Value(1)).current;
    const sixthAnimation = useRef(new Animated.Value(1)).current;
    const seventhAnimation = useRef(new Animated.Value(1)).current;

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
        }).start(animate1);
    }

    const animate1 = () => {
        Animated.sequence([
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
            ]),
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
            ])
        ]).start(animate2);
    }

    const animate2 = () => {
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
            animate3();
        });
    }
    const animate3 = () => {
        Animated.sequence([
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
            ]),
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
            ]),
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
            ])
        ]).start(animate4);
    }

    const animate4 = () => {
        Animated.parallel([
            Animated.timing(seventhAnimation, {
                toValue: -1,
                duration: duration,
                useNativeDriver: true,
            }),
            // Animated.timing(bottomLeftOpacity, {
            //     toValue: 0,
            //     duration: duration,
            //     useNativeDriver: true,
            // }),
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
            topLeftOpacity.setValue(1);
            bottomLeftOpacity.setValue(0);
            animate1();
        });
    }

    useEffect(() => {
        animate0();
        animateArrows();
    }, []);

    return (
        <View style={{
            flex: 1,
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
                        start={[0, 0]} end={[1, 0]} />
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
                        start={[0, 0]} end={[1, 0]} />
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
                        start={[0, 0]} end={[1, 0]} />
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
                        start={[0, 0]} end={[1, 0]} />
                </Animated.View>

            </View>

            <View style={{ height: 20 }} />
            <View style={{
                flexDirection: 'row',

            }}>
                <Text style={styles.text}>
                    Loading
                </Text>
                <Animated.View style={{
                    opacity: firstArrowOpacity,
                }}>
                    <Text style={styles.text}>
                        {arrow}
                    </Text>
                </Animated.View >
                <Animated.View style={{
                    // backgroundColor: 'green',
                    opacity: secondArrowOpacity,
                }}>
                    <Text style={styles.text}>
                        {arrow}
                    </Text>
                </Animated.View>
                <Animated.View style={{
                    // backgroundColor: 'blue',
                    opacity: thirdArrowOpacity,
                }}>
                    <Text style={styles.text}>
                        {arrow}
                    </Text>
                </Animated.View>
            </View>
        </View>
    );


}



const styles = StyleSheet.create({
    text: {
        fontFamily: 'Lato-Bold',
        fontSize: 30,
        lineHeight: 30,
        // width: Dimensions.get('window').width / 2,
        // backgroundColor: 'green',
    },
    coolBox: {
        height: Dimensions.get('window').width / 8,
        width: Dimensions.get('window').width / 8,
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