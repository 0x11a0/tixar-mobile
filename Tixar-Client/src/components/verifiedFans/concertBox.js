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
                    <Image source={artistIcon} style={styles.artistIcon}/>


                </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E0E4EA',
        height: 250,
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        width: '48%',
        marginTop: 15,
    },
    concertBlock: {
        flexDirection: 'column',
        flex: 1,
        width: '90%',
        alignSelf: 'center',
    },
    artistIcon: {
        width: '100%',
        height: '45%',
        borderRadius: 16,
        alignSelf: 'center',
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