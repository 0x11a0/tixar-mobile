import { View, Image, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default CheckoutBlock = ({ ticketName, image, }) => {
    const insets = useSafeAreaInsets();


    return (
        < View style={{
            height: 165,
            width: '90%',
            backgroundColor: 'white',
            borderRadius: 14,
            paddingHorizontal: 15,
            paddingVertical: 15,
        }}>
            <View style={{
                flexDirection: 'row',
                paddingBottom: 10,
                backgroundColor: 'cyan',
            }}>
                <View style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                    backgroundColor: 'blue',
                }}>
                    <Image source={require('../../assets/soft-ui-pro-react-native-v1.1.1/gle3x.png')}
                        style={{
                            height: 85,
                            width: 85,
                            resizeMode: 'contain',
                            backgroundColor: 'red',
                            // paddingHorizontal: 10,
                            // paddingVertical: 10,
                        }} />
                </View>
                <View style={{
                    backgroundColor: 'green',
                    flex: 1,
                    paddingHorizontal: 10,

                }}>
                    <Text style={{
                        fontFamily: 'Lato-Bold',
                        fontSize: 16,
                        marginVertical: 5,
                    }}>
                        Coldplay Ticket
                    </Text>
                    <Text style={{
                        fontFamily: 'Lato-Regular',
                        fontSize: 12,
                        marginVertical: 15,
                        color: '#67748E',
                    }}>
                        It's a cold concert
                    </Text>
                    <Text style={{
                        fontFamily: 'Lato-Bold',
                        fontSize: 12,
                        color: '#17AD37'
                    }}>
                        IN STOCK
                    </Text>
                </View>
            </View>
            <View>
                <Text>
                    Hi
                </Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    // container: 
});