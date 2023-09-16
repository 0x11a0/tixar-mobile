import { View, Animated, Text, Dimensions } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';




export default ProgressCircle = ({ rotateRightPercent, rotateLeftPercent, circleOpacity, code, textOpacity }) => {

    const circleRadius = Dimensions.get('window').width / 4;
    const circleCircumference = Dimensions.get('window').width / 2;

    const rotateRightInter = rotateRightPercent.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    const rotateLeftInter = rotateLeftPercent.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });


    return (
        <View style={{
            height: circleCircumference,
            width: circleCircumference,
            borderRadius: circleRadius,
            backgroundColor: '#D9D9D9',
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            {/* Outer gradient circle, full circle */}
            <LinearGradient style={{
                height: circleCircumference,
                width: circleCircumference,
                borderRadius: circleRadius,
                zIndex: 1,
            }}
                colors={['#FF0080', '#7928CA']}
                start={[0, 0]} end={[1, 1]}
            />

            {/* Left grey semicircle */}
            <View style={{
                height: circleCircumference,
                width: circleRadius,
                alignSelf: 'flex-start',
                zIndex: 3,
                overflow: 'hidden',
                position: 'absolute',
            }}>
                <Animated.View style={{
                    height: circleCircumference,
                    width: circleRadius,
                    borderRadius: circleCircumference,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    backgroundColor: '#D9D9D9',
                    alignSelf: 'flex-start',
                    zIndex: 4,
                    position: 'absolute',
                    opacity: circleOpacity,
                    transform: [
                        { translateX: circleRadius / 2 },
                        { rotate: rotateLeftInter },
                        { translateX: -circleRadius / 2 },
                    ]
                }} />
            </View>

            <View style={{
                height: circleCircumference,
                width: circleRadius,
                alignSelf: 'flex-end',
                zIndex: 3,
                overflow: 'hidden',
                position: 'absolute',
            }}>
                {/* Right grey semicircle */}
                <Animated.View style={{
                    height: circleCircumference,
                    width: circleRadius,
                    borderRadius: circleCircumference,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    alignSelf: 'flex-end',
                    backgroundColor: '#D9D9D9',
                    zIndex: 4,
                    position: 'absolute',
                    opacity: circleOpacity,
                    transform: [
                        { translateX: -circleRadius / 2 },
                        { rotate: rotateRightInter },
                        { translateX: circleRadius / 2 },
                    ]
                }} />
            </View>

            {/* Inner white circle */}
            <View style={{
                height: '90%',
                width: '90%',
                borderRadius: circleRadius,
                backgroundColor: 'white',
                zIndex: 4,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
            }} >
                <Animated.View style={{
                    opacity: textOpacity,
                }}>
                    <Text style={{
                        fontFamily: 'Lato-Bold',
                        fontSize: circleRadius / 3 * 0.8,

                    }}>
                        {code}
                    </Text>
                </Animated.View>
            </View>

        </View >
    );
}