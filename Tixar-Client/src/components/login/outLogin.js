import { Pressable, View, Image, StyleSheet, BackHandler } from 'react-native'

export default OutLogin = ({ imageIcon, onPressFunction }) => {
    return (
        <Pressable style={{
            height: 70,
            width: 70,
            backgroundColor: 'white',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#D2D6DA',
            marginHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
        }}
            onPress={() => {
                onPressFunction();
            }}
        >
            <Image source={imageIcon}
                style={{
                    height: 35,
                    width: 35,
                    resizeMode: 'contain',

                }} />
        </Pressable>
    );
}