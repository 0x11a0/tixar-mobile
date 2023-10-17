// import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text, StyleSheet } from "react-native";

export default Button = ({ buttonText, enableCondition, onPressFunction }) => {
    return (
        // <LinearGradient colors={enableCondition ?
        //     ['#FF0080', '#7928CA']
        //     : ['#E8ECEF', '#E8ECEF']}
        //     style={styles.container}
        //     start={[0, 0]} end={[1, 0]}>

            <Pressable 
                style={styles.button}
                backgroundColor={enableCondition ? 'white' : 'grey'}
                onPress={enableCondition
                    ? (() => { onPressFunction(); })
                    : (() => { console.log('button disabled') })} >

                <Text style={{
                    fontSize: 15,
                    fontFamily: 'Lato-Bold',
                    color: enableCondition ? 'green' : 'red',
                }}>
                    {buttonText}
                </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    button: {
        borderRadius: 25,
        width: 300,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});