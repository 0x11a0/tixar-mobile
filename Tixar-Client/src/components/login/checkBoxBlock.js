import { View, Pressable, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default CheckBoxBlock = ({ text, boldedText, isChecked, setIsChecked }) => {

    return (
        <View style={styles.container}>
            <Pressable style={styles.button}
                onPress={() => { setIsChecked(!isChecked); }}>
                <LinearGradient colors={isChecked ?
                    ['#3A416F', '#141727']
                    : ['white', 'white']}
                    style={styles.gradient}
                    start={[0, 0]} end={[1, 0]}>
                    <Image source={isChecked ?
                        require('../../assets/images/checkmark.png')
                        : null}
                        style={styles.icon}
                    />
                </LinearGradient>
            </Pressable>
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.boldedText}>{boldedText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        width: '100%',
        marginLeft: '14%',
        // backgroundColor: 'blue',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradient: {
        height: 27,
        width: 27,
        borderRadius: 10,
        borderColor: '#D2D6DA',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boldedText: {
        marginTop: 4,
        left: 15,
        fontSize: 15,
        fontFamily: 'Lato-Bold',
        color: '#252F40',
    },
    text: {
        marginTop: 4,
        left: 15,
        fontSize: 15,
        fontFamily: 'Lato-Regular',
        color: '#252F40',
    },
    icon: {
        marginTop: 3,
        width: 22,
        height: 22,
        resizeMode: 'contain',
    }
});