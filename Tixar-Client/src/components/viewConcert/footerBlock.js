import { Text, View } from 'react-native';

export default function FooterBlock() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignSelf: 'center',
            marginBottom: '5%',
        }}>
            <Text style={{
                color: '#8F8F8F',
                fontFamily: 'Lato-Regular',
                fontSize: 12,
            }}> TIXAR
            </Text>
        </View>
    )
}