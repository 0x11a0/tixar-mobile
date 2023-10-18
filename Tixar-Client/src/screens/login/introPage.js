import { View, Text, Animated, StyleSheet, ImageBackground, Easing } from 'react-native';
import { useRef, useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default IntroPage = ({ isLoaded, route, navigation }) => {
    const insets = useSafeAreaInsets();
    const dotAnimX = useRef(new Animated.Value(0)).current;
    const dotAnimY = useRef(new Animated.Value(0)).current;
    const dotScale = useRef(new Animated.Value(1)).current;
    const [opacity, setOpacity] = useState(new Animated.Value(0));
    const [backOpacity, setBackOpacity] = useState(1);
    const quartDuration = 700;
    const startDuration = 475;

    const animate0 = () => {
        Animated.sequence([
            Animated.timing(opacity, {
                duration: quartDuration,
                toValue: 1,
                useNativeDriver: true,
            }),
            Animated.parallel([
                Animated.timing(dotAnimX, {
                    easing: Easing.quad,
                    duration: startDuration,
                    toValue: 124,
                    useNativeDriver: true,
                }),
                Animated.timing(dotAnimY, {
                    easing: Easing.out(Easing.quad),
                    duration: startDuration,
                    toValue: -40,
                    useNativeDriver: true,
                })
            ]),
            Animated.parallel([
                Animated.timing(dotAnimX, {
                    easing: Easing.out(Easing.quad),
                    duration: startDuration,
                    toValue: 183,
                    useNativeDriver: true,
                }),
                Animated.timing(dotAnimY, {
                    easing: Easing.quad,
                    duration: startDuration,
                    toValue: 13,
                    useNativeDriver: true,
                })
            ])

        ]).start(() => {
            animate1();
        })

    }

    const animate1 = () => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(dotAnimX, {
                    easing: Easing.quad,
                    duration: quartDuration,
                    toValue: 33,
                    useNativeDriver: true,
                }),
                Animated.timing(dotAnimY, {
                    easing: Easing.out(Easing.quad),
                    duration: quartDuration,
                    toValue: 83,
                    useNativeDriver: true,
                }),
            ]),
            Animated.parallel([
                Animated.timing(dotAnimX, {
                    easing: Easing.out(Easing.quad),
                    duration: quartDuration,
                    toValue: -117,
                    useNativeDriver: true,
                }),
                Animated.timing(dotAnimY, {
                    easing: Easing.quad,
                    duration: quartDuration,
                    toValue: 13,
                    useNativeDriver: true,
                }),
            ]),

        ]).start(() => {
            // isLoaded ? animate3() : animate2();
            animate3();
        });
    }

    // Loop if not done loading
    const animate2 = () => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(dotAnimX, {
                    easing: Easing.quad,
                    duration: quartDuration,
                    toValue: 33,
                    useNativeDriver: true,
                }),
                Animated.timing(dotAnimY, {
                    easing: Easing.out(Easing.quad),
                    duration: quartDuration,
                    toValue: -57,
                    useNativeDriver: true,
                }),
            ]),
            Animated.parallel([
                Animated.timing(dotAnimX, {
                    easing: Easing.out(Easing.quad),
                    duration: quartDuration,
                    toValue: 183,
                    useNativeDriver: true,
                }),
                Animated.timing(dotAnimY, {
                    easing: Easing.quad,
                    duration: quartDuration,
                    toValue: 13,
                    useNativeDriver: true,
                }),
            ])
        ]).start(() => {
            animate1();
        });
    }

    // Proceed to original position if done
    const animate3 = () => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(dotAnimX, {
                    easing: Easing.quad,
                    duration: startDuration,
                    toValue: -58,
                    useNativeDriver: true,
                }),
                Animated.timing(dotAnimY, {
                    easing: Easing.out(Easing.quad),
                    duration: startDuration,
                    toValue: -40,
                    useNativeDriver: true,
                })
            ]),
            Animated.parallel([
                Animated.timing(dotAnimX, {
                    easing: Easing.out(Easing.quad),
                    duration: startDuration,
                    toValue: 0,
                    useNativeDriver: true,
                }),
                Animated.timing(dotAnimY, {
                    easing: Easing.quad,
                    duration: startDuration,
                    toValue: 0,
                    useNativeDriver: true,
                })
            ])]).start(() => {
                bounce();
            });
    }

    const bounce = () => {
        Animated.sequence([
            Animated.timing(dotAnimY, {
                easing: Easing.cubic,
                useNativeDriver: true,
                duration: 150,
                toValue: 5,
            }),
            Animated.timing(dotAnimY, {
                easing: Easing.out(Easing.cubic),
                useNativeDriver: true,
                duration: 150,
                toValue: -5,
            }),
            Animated.timing(dotAnimY, {
                easing: Easing.cubic,
                useNativeDriver: true,
                duration: 150,
                toValue: 5,
            }),
            Animated.timing(dotAnimY, {
                easing: Easing.out(Easing.cubic),
                useNativeDriver: true,
                duration: 150,
                toValue: -5,
            }),

            Animated.timing(dotScale, {
                easing: Easing.quad,
                useNativeDriver: true,
                duration: 400,
                toValue: 300,
            }),
            // Animated.timing(opacity, {
            //     easing: Easing.out(Easing.quad),
            //     useNativeDriver: true,
            //     duration: 300,
            //     toValue: 0,
            // }),
        ]).start(() => {
            setOpacity(new Animated.Value(0));
            setBackOpacity(0);
            // navigation.navigate('loginPage');
        });
    };

    useEffect(() => {
        sleep(500).then(() => animate0());
    }, []);

    return (
        <ImageBackground source={require('../../assets/images/blue.png')} style={{
            flex: 1,
            paddingTop: insets.top,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            paddingBottom: insets.bottom,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: backOpacity,
        }}>
            <Animated.View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                opacity: opacity
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',

                }}>
                    <Text style={styles.text}>t</Text>
                    <Text style={[styles.text, {
                        transform: [
                            { translateY: 23 },
                            { scaleY: 0.6 },
                            { translateY: -23 },
                        ]
                    }]}>i</Text>
                    <Text style={styles.text}>xar</Text>
                </View>

                <Animated.View style={{
                    height: 8,
                    width: 8,
                    borderRadius: 4,
                    backgroundColor: 'white',
                    position: 'absolute',
                    zIndex: 1,
                    // opacity: opacity,
                    transform: [
                        { translateX: -38.5 },
                        { translateY: -13 },
                        { translateX: dotAnimX },
                        { translateY: dotAnimY },
                        { scaleX: dotScale },
                        { scaleY: dotScale }
                    ]
                }} />

                <Animated.View style={{
                    height: 140,
                    width: 300,
                    borderRadius: 150,
                    position: 'absolute',

                    zIndex: 2,
                }} />
            </Animated.View>

        </ImageBackground >
    );
}

async function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

const styles = StyleSheet.create({
    text: {
        textTransform: 'uppercase',
        fontSize: 54,
        color: 'white',
    }

});
