import { View, Image, Text, Pressable, StyleSheet } from 'react-native'

export default ArtistBlock = ({ artistName,
    monthlyInteractions, newFans, totalFans, artistIcon, onPressFunction }) => {
    return (
        <Pressable style={styles.container}
            onPress={() => {
                onPressFunction
                    ? onPressFunction()
                    : console.log(artistName + ' statistic box pressed');
            }}>

                <View style={styles.artistBlock}>

                    {/* ICON */}
                    <Image source={artistIcon}
                        style={styles.artistIcon} />

                    {/* TEXT CONTAINER */}
                    <View style={styles.artistTextContainer}>

                        {/* SPLITS INTO TITLE ROW AND DESCRIPTION ROW */}
                        <View style={{ flexDirection: 'column',}}>

                            {/* TITLE ROW, ARTIST NAME*/}
                            <View style={{ flexDirection: 'row'}}>
                                <Text style={styles.artistName}
                                    numberOfLines={1}>
                                    Welcome back, {artistName}
                                </Text>
                            </View>

                            <View style={{height: 3,}}/>

                            {/* FLAVOR TEXT ROW */}
                            <View style={{ flexDirection: 'row',}}>
                                <Text style={styles.flavorText}>
                                    Your statistics at a glance
                                </Text>
                            </View>

                            {/* BUFFER BETWEEN ROWS */}
                            <View style={{ height: 3, }} />

                            {/* DESCRIPTION ROW */}
                            <View style={{ flexDirection: 'row',}}>
                                <Text style={styles.artistDescription}
                                    numberOfLines={4}>
                                    Just this month, you've had:{'\n'}
                                    {monthlyInteractions.toLocaleString()} interactions{'\n'}
                                    {newFans.toLocaleString()} new fans{'\n'}
                                    {totalFans.toLocaleString()} total fans
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row',}}>
                                <Text style={styles.flavorText}>
                                    View more
                                </Text>
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