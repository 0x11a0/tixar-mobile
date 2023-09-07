import { Image, Text, Pressable, View, StyleSheet } from 'react-native';

export default FilerButton = ({ buttonText, imageSource, isFocused, onPressFunction }) => {
    return (
        <Pressable style={styles.container}
            onPress={() => {
                isFocused ? console.log('no effect') : onPressFunction();
            }}>

            <Image source={imageSource}
                style={styles.buttonIcon} />

            <View style={{ width: 10 }} />

            <Text style={{
                fontFamily: isFocused ? 'Lato-Bold' : 'Lato-Regular',
                fontSize: 17,
                color: isFocused ? '#252F40' : '#67748E',
            }}>
                {buttonText}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '27%'
    },
    buttonIcon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },
});