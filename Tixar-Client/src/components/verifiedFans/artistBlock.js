import { View, Image, Text, Pressable, StyleSheet } from 'react-native'

export default ArtistBlock = ({ artistName, points,
    artistDescription, artistIcon, onPressFunction }) => {
    return (
        <Pressable style={styles.container}
            onPress={() => {
                onPressFunction
                    ? onPressFunction()
                    : console.log(artistName + ' pressed');
            }}>

                <View style={styles.artistBlock}>

                    {/* ICON */}
                    <Image source={artistIcon}
                        style={styles.artistIcon} />

                    {/* TEXT CONTAINER */}
                    <View style={styles.artistTextContainer}>

                        {/* SPLITS INTO TITLE ROW AND DESCRIPTION ROW */}
                        <View style={{ flexDirection: 'column', }}>

                            {/* TITLE ROW, SPLITS INTO ARTIST NAME AND POINTS */}
                            <View style={{ flexDirection: 'row',}}>
                                <Text style={styles.artistName}
                                    numberOfLines={1}>
                                    {artistName}
                                </Text>

                                <Text style={styles.pointText}>
                                    Your points: {points}
                                </Text>
                            </View>

                            {/* BUFFER BETWEEN ROWS */}
                            <View style={{ height: 5, }} />

                            {/* DESCRIPTION ROW */}
                            <View style={{ flexDirection: 'row',}}>
                                <Text style={styles.artistDescription}
                                    numberOfLines={2}>
                                    {artistDescription}
                                </Text>
                                <View style={styles.iconBox}>
                                    <Image style = {styles.favoriteIcon}
                                        source={require('../../assets/favoriteiconfilled.png')} />
                                </View>
                            </View>

                        </View>

                    </View>
                </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E0E4EA',
        height: 80,
        borderRadius: 20,
        paddingTop: 5,
        width: '100%',
        marginTop: 15,
    },
    artistIcon: {
        width: 70,
        height: 70,
        borderRadius: 17,
        marginLeft: 5,
        marginRight: 10,
    },
    artistBlock: {
        flexDirection: 'row',
    },
    artistTextContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
    },
    artistName: {
        fontSize: 15,
        fontFamily: 'Lato-Bold',
        color: '#252F40',
        flex: 1,
    },
    pointText: {
        fontSize: 15,
        fontFamily: 'Lato-Bold',
        color: '#252F40',
        alignSelf: 'flex-end',
        textAlign: 'right',
        marginRight: 15,
        flex: 1,
    },
    artistDescription: {
        fontFamily: 'Lato-Regular',
        color: '#252F40',
        width: '80%',
        flex: 8,
        marginRight: 15,
    },
    iconBox: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    favoriteIcon: {
        width: 15,
        height: 15,
        marginRight: 15,
    },
});