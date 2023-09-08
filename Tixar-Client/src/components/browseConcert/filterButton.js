import { Image, Text, Pressable, View, StyleSheet } from 'react-native';

export default FilterButton = ({ buttonText, imageSource, isFocused, onPressFunction, isLeft }) => {
    return (
        <Pressable style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            borderLeftWidth: isLeft ? 0 : 0.5,
            borderRightWidth: isLeft ? 0.5 : 0,
            }}
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
    buttonIcon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },
});