import { useState, useEffect, useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Pressable,
    Image,
} from "react-native";
import { ColorContext } from "../../../context";
import { StatusBar } from "expo-status-bar";

import SearchField from "../../components/browseConcert/searchField";
import FilterButton from "../../components/browseConcert/filterButton";
import ConcertBlock from "../../components/viewConcert/concertBlock";

export default BrowseConcertPage = ({ route, navigation }) => {
    const {colors} = useContext(ColorContext);
    const [isNearbyFocused, setIsNearbyFocused] = useState(true);
    const [isTrendingFocused, setIsTrendingFocused] = useState(false);
    const [searchText, setSearchText] = useState('');
    const artistIcon = require("../../assets/soft-ui-pro-react-native-v1.1.1/avatar23x.png");
    const imageBackground = require("../../assets/soft-ui-pro-react-native-v1.1.1/background3x.png");

    const handleNearbyPress = () => {
        setIsNearbyFocused(true);
        setIsTrendingFocused(false);
        console.log("display nearby");
    };

    const handleTrendingPress = () => {
        setIsNearbyFocused(false);
        setIsTrendingFocused(true);
        console.log("display trending");
    };

    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: colors.background,
                paddingBottom: 13,
            }}
            >
                <SearchField searchText={searchText} setSearchText={setSearchText} />

                <View style={{ height: 16 }} />

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 5,
                    borderTopWidth: 0.5,
                    borderColor: colors.textPrimary,
                    paddingTop: 10,
                }}
                >
                    <View style={styles.rowBox}>
                        <FilterButton
                            buttonText={"Nearby"}
                            iconName='enviromento'
                            isFocused={isNearbyFocused}
                            onPressFunction={handleNearbyPress}
                            isLeft={true}
                        />
                    </View>

                    <View style={styles.rowBox}>
                        <FilterButton
                            buttonText={"Trending"}
                            iconName='linechart'
                            isFocused={isTrendingFocused}
                            onPressFunction={handleTrendingPress}
                            isLeft={false}
                        />
                    </View>

                </View>
            </View>
            <ScrollView style={[styles.scrollView, { backgroundColor: colors.background }]}>
                <ConcertBlock
                    concertName={"Music of the Spheres"}
                    venueName={"National Singapore Stadium"}
                    dateText={"23, 24, 26, 27 January 2024"}
                    artistName={"Coldplay"}
                    artistDescription={"Lorem ipsum dolor sit amet consectetur"}
                    artistIcon={artistIcon}
                    imageBackground={imageBackground}
                    onPressFunction={() => {
                        navigation.navigate("viewConcertPage");
                    }}
                />

                <ConcertBlock
                    concertName={"The Eras Tour"}
                    venueName={"National Singapore Stadium"}
                    dateText={"2, 3, 4, 6, 7 March 2024"}
                    artistName={"Taylor Swift"}
                    artistDescription={"Lorem ipsum dolor sit amet consectetur"}
                    artistIcon={artistIcon}
                    imageBackground={imageBackground}
                />

                <ConcertBlock
                    concertName={"The Eras Tour 2.0"}
                    venueName={"National Singapore Stadium"}
                    dateText={"2, 3, 4, 6, 7 March 2024"}
                    artistName={"Taylor Swift"}
                    artistDescription={"Lorem ipsum dolor sit amet consectetur"}
                    artistIcon={artistIcon}
                    imageBackground={imageBackground}
                />
            </ScrollView>
            <StatusBar style="light" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
    },
    scrollView: {
        paddingHorizontal: 15,
    },
    rowBox: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
    },
});
