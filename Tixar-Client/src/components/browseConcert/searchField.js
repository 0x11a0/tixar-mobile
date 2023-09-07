import { useState } from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';


export default SearchField = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/search3x.png')}
                style={{
                    height: 20,
                    width: 20,
                }} />
            <TextInput style={styles.searchFieldText}
                onChangeText={(searchText) => { setSearchText(searchText) }}
                onEndEditing={() => {
                    console.log('search text => "' + searchText + '"');
                }}
                value={ searchText }
                placeholder={"Search"}
            />
        </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 12,
        marginHorizontal: 15,
        borderRadius: 15,
        borderColor: '#D2D6DA',
        borderWidth: 1,
        backgroundColor: 'white',
    },
    searchFieldText: {
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        paddingBottom: 4,
        paddingHorizontal: 10,
    }
});