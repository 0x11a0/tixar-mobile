import { React, useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import ArtistBlock from "../../components/verifiedFans/artistBlock";
import NextButton from "../../components/new/nextButton";
import { AuthContext, ColorContext } from "../../../context";
import SearchField from "../../components/browseConcert/searchField";
import { FlatList } from "react-native-gesture-handler";

export default FanDashboardPage = ({ route, navigation }) => {
    const [profiles, setProfiles] = useState([]);
    const [sortedProfiles, setSortedProfiles] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const { token } = useContext(AuthContext);
    const { colors } = useContext(ColorContext);
    const getProfiles = () => {
        fetch("http://vf.tixar.sg:3001/api/profiles", {
            method: "GET",
            credentials: "include",
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProfiles(data);
                setSortedProfiles(data);
            }).then(() => { setIsLoading(false); })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        navigation.addListener("focus", () => {
            console.log("reloaded");
            getProfiles();
        });
    }, [navigation]);

    useEffect(() => {
        if (isLoading){
            return;
        } else if (searchText === ''){
            setSortedProfiles(profiles);
            return;
        }
        let query = searchText.toLowerCase();
        setSortedProfiles(profiles.filter(profile => profile.club.name.toLowerCase().includes(query)));
    }, [searchText]);



    if (isLoading){
        return(
            <View style={{ flex: 1, paddingBottom: 20, backgroundColor: colors.background}} >
            
            <SearchField searchText={searchText}
            setSearchText={setSearchText} />

            {/* <NextButton
            buttonText={"Redeem Fan Code Here!"}
            onPressFunction={() => {
                navigation.navigate("redemptionPage");
            }}
            style={{ marginTop: -20 }} // Adjust the marginTop value as needed
            /> */}

            </View>

        );
    }


    return (
        <View style={{ flex: 1, paddingBottom: 20, backgroundColor: colors.background}} >
        <SearchField searchText={searchText}
            setSearchText={setSearchText}
            onBlurFunction={() => {
                let query = searchText.toLowerCase;
                // setSortedProfiles(profiles.filter(profile => profile.clubName.contains(query)));
            }}
        />
        <FlatList 
        data={sortedProfiles}
        keyExtractor={item => item._id}
        renderItem={({item}) => {
            return(
                <ArtistBlock 
                key={item._id}
                points={item.points}
                clubName={item.club.name}
                artistDescription={item.club.description}
                artistIcon={item.club.imageUrl}
                onPressFunction={() => {
                    navigation.navigate('viewClubPage', {

                        clubName: item.club.name,
                        artistDescription: item.club.description,
                        key: item._id,
                        imageUrl: item.club.imageUrl,
                        points: item.points,

                    });

                }}

                />     
            );
        }} />  
        <NextButton
        buttonText={"Redeem Fan Code Here!"}
        onPressFunction={() => {
            navigation.navigate("redemptionPage");
        }}
        style={{ marginTop: -20 }} // Adjust the marginTop value as needed
        />
        </View>
    );
};

const styles = StyleSheet.create({
    flatListContainer: {
        height: "85%",
    },
});
