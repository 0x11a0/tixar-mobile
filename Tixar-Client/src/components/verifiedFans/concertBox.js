import { View, Image, Text, Pressable, StyleSheet } from 'react-native'

export default ConcertBlock = ({ artistName,
    monthlyInteractions, newFans, totalFans, artistIcon, onPressFunction }) => {
    return (
        <Pressable style={styles.container}
            onPress={() => {
                onPressFunction
                    ? onPressFunction()
                    : console.log(artistName + ' concerts pressed');
            }}>

                <View style={styles.concertBlock}>


                </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E0E4EA',
        height: 170,
        borderRadius: 20,
        paddingTop: 10,
        width: '100%',
        marginTop: 15,
    },
    artistIcon: {
        width: 130,
        height: 150,
        borderRadius: 17,
        marginLeft: 10,
        marginRight: 10,
    },
    artistBlock: {
        flexDirection: 'row',
    },
    artistTextContainer: {
        flexDirection: 'column',
        flex: 1,
    },
    artistName: {
        fontSize: 20,
        fontFamily: 'Lato-Bold',
        color: '#252F40',
        flex: 1,
    },
    flavorText: {
        fontSize: 15,
        fontFamily: 'Lato-Bold',
    },
    artistDescription: {
        fontFamily: 'Lato-Regular',
        color: '#252F40',
        marginRight: 15,
        lineHeight: 20,
    },
});