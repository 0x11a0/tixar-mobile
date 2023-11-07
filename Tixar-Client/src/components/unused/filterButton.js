import { Text, Pressable } from 'react-native';

export default FilterButton = ({ buttonText, isFocused, onPressFunction, isLeft }) => {
    return (
        <Pressable style={{
            flexDirection: 'row',
            flex: 1,
            //backgroundColor: 'red',
            justifyContent: 'center',
            borderLeftWidth: isLeft ? 0 : 0.5,
            borderRightWidth: isLeft ? 0.5 : 0,
            borderColor: '#BAB8CE,'
        }}
            onPress={() => {
                isFocused ? console.log('no effect') : onPressFunction();
            }}>

            <Text style={{
                fontFamily: isFocused ? 'Lato-Bold' : 'Lato-Regular',
                fontSize: 17,
                color: isFocused ? '#252F40' : '#67748E',
                textDecorationLine: isFocused ? 'underline' : null,
                //backgroundColor: 'red',
            }}>
                {buttonText}
            </Text>

        </Pressable>
    );
}