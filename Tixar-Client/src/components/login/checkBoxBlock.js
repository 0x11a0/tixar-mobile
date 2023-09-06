import { View, Pressable, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default CheckBoxBlock = ({ isChecked, setIsChecked }) => {

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

            <Text style={styles.text}>I am not a robot.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradient: {
        height: 32,
        width: 32,
        borderRadius: 10,
        borderColor: '#D2D6DA',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginTop: 4,
        left: 17,
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        color: '#252F40',
    },
    icon: {
        marginTop: 3,
        width: 26,
        height: 26,
        resizeMode: 'contain',
    }
});