import { useContext } from 'react';
import { Image, Text, Pressable, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ColorContext } from '../../../context';

export default FilterButton = ({ buttonText, iconName, isFocused, onPressFunction, isLeft }) => {
    const { colors } = useContext(ColorContext);
    return (
        <Pressable style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            borderLeftWidth: isLeft ? 0 : 0.5,
            borderRightWidth: isLeft ? 0.5 : 0,
            borderColor: colors.textPrimary,
        }}
            onPress={() => {
                isFocused ? console.log('no effect') : onPressFunction();
            }}>

            <AntDesign name={iconName} size={20} color='white' />

            <View style={{ width: 10 }} />

            <Text style={{
                fontFamily: isFocused ? 'Lato-Bold' : 'Lato-Regular',
                fontSize: 17,
                color: isFocused ? colors.textPrimary : colors.textDisabled,
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
        borderColor: 'black',
        // borderRadius: 5,
    },
});