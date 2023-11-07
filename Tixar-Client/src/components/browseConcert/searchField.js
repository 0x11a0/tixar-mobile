import { useState, useContext } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ColorContext } from '../../../context';

export default SearchField = ({ searchText, setSearchText, onBlurFunction }) => {
    const { colors } = useContext(ColorContext);
    const [focusedText, setFocused] = useState(false);
    const [currentText, setCurrentText] = useState(searchText);
    return (
        <View style={[styles.container, { backgroundColor: colors.secondary }]}>
            <AntDesign name='search1' size={20} color={focusedText ? colors.textAccent : colors.textPrimary} />

            <TextInput style={[styles.searchFieldText, { color: focusedText ? colors.textAccent : colors.textPrimary }]}
                onChangeText={setCurrentText}
                onEndEditing={() => {
                    setSearchText(currentText);
                    console.log(currentText);
                }}
                value={currentText}
                placeholder={"Search"}
                placeholderTextColor={focusedText ? colors.textAccent : colors.textPrimary}
                onFocus={() => { setFocused(true) }}
                onBlur={() => { setFocused(false) }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 12,
        marginHorizontal: 15,
        borderRadius: 15,
    },
    searchFieldText: {
        alignSelf: 'center',
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        paddingLeft: 10,
        paddingRight: 15,
    }
});
