import { View, Image, Text, Pressable, StyleSheet } from 'react-native'

export default ConcertBlock = ({ concertName, venueName, dateText, imageBackground,
    artistName, artistDescription, artistIcon, onPressFunction }) => {
    return (
        <Pressable style={styles.container}
            onPress={() => {
                onPressFunction
                    ? onPressFunction()
                    : console.log(concertName + ' pressed');
            }}>
            <Image source={imageBackground}
                style={styles.imageBackground} />
            <View style={{ paddingHorizontal: 15, }}>
                <View style={{ height: 20 }} />

                <Text style={styles.title}>
                    {concertName}
                </Text>

                <View style={{ height: 30 }} />

                <Text style={styles.subtitle}>
                    {venueName}
                </Text>

                <View style={{ height: 7 }} />

                <Text style={styles.subtitle}>
                    {dateText}
                </Text>

                <View style={{ height: 45 }} />

                <View style={styles.artistBlock}>
                    <Image source={artistIcon}
                        style={styles.artistIcon} />
                    <View style={styles.artistTextContainer}>
                        <Text style={styles.artistName}>
                            {artistName}
                        </Text>
                        <View style={{ height: 5, }} />
                        <Text style={styles.artistDescription}>
                            {artistDescription}
                        </Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        height: 240,
        borderRadius: 20,
        marginVertical: 13,
        paddingVertical: 15,
        overflow: 'hidden',
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 25,
        color: 'white',
    },
    subtitle: {
        fontFamily: 'Lato-Regular',
        fontSize: 15,
        color: 'white',
    },
    artistIcon: {
        height: 45,
        width: 45,
        resizeMode: 'contain',
        borderRadius: 6,
    },
    imageBackground: {
        height: 240,
        width: '100%',
        position: 'absolute',
        alignSelf: 'center',
        resizeMode: 'stretch',
    },
    artistBlock: {
        flexDirection: 'row'
    },
    artistTextContainer: {
        paddingHorizontal: 15,
    },
    artistName: {
        fontFamily: 'Lato-Bold',
        color: 'white',
    },
    artistDescription: {
        fontFamily: 'Lato-Regular',
        color: 'white',
    }
});