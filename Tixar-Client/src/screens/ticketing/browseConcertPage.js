import { useState, useEffect, useContext, useRef } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    Animated,
} from "react-native";
import { ColorContext } from "../../../context";
import { StatusBar } from "expo-status-bar";

import SearchField from "../../components/browseConcert/searchField";
import ConcertBlock from "../../components/viewConcert/concertBlock";
import { AuthContext } from "../../../context";
import { FlatList } from "react-native-gesture-handler";

export default BrowseConcertPage = ({ route, navigation }) => {
    const { colors } = useContext(ColorContext);
    const { token } = useContext(AuthContext);
    const [searchText, setSearchText] = useState("");
    const [concerts, setConcerts] = useState([]);
    const [allConcerts, setAllConcerts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getProfiles = async () => {
        let profileData;
        await fetch('http://vf.tixar.sg:3001/api/profiles', {
            method: "GET",
            credentials: "include",
            headers: { Authorization: 'Bearer ' + token },
        }).then(response => response.json())
            .then(data => {
                profileData = data.map(profile => profile.club.name.toLowerCase());
            }).catch(error => console.log("error at profiles" + error));

        await fetch("http://rt.tixar.sg:3000/api/event", {
            method: "GET",
            credentials: "include",
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((data) => {
                setAllConcerts(data);
                console.log(profileData);
                setConcerts(data.sort((e1, e2) => {
                    let x = profileData.includes(e1.artistName.toLowerCase());
                    let y = profileData.includes(e2.artistName.toLowerCase());
                    if (x && y){
                        return e1.artistName.localeCompare(e2.artistName);
                    } else if (x){
                        return -1;
                    } else if (y){
                        return 1;
                    }
                    return e1.artistName.localeCompare(e2.artistName);
                }));
            }).then(() => {
                setIsLoading(false);
                })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        const navFunc = navigation.addListener("focus", async () => {
            setIsLoading(true);
            await getProfiles();
        });
        return navFunc;
    }, [navigation]);


    useEffect(() => {
        if (isLoading){
            return;
        } else if (searchText === ''){
            setConcerts(allConcerts);
            return;
        }
        let query = searchText.toLowerCase();
        setConcerts(allConcerts.filter(concert => concert.name.toLowerCase().includes(query)
            || concert.artistName.toLowerCase().includes(query)));
    }, [searchText]);
   
    const duration = 300;
    const animate1 = useRef(new Animated.Value(0)).current;
    const animate2 = useRef(new Animated.Value(0)).current;
    const animate3 = useRef(new Animated.Value(0)).current;

    const loadingAnimation = () => {
        Animated.sequence([
            Animated.timing(animate1, {
                toValue: 1,
                duration: duration,
                useNativeDriver: true,
            }),
            Animated.timing(animate2, {
                toValue: 1,
                duration: duration,
                useNativeDriver: true,
            }),
            Animated.timing(animate3, {
                toValue: 1,
                duration: duration,
                useNativeDriver: true,
            }),
        ]).start( () => {
            animate1.setValue(0);
            animate2.setValue(0);
            animate3.setValue(0);
            loadingAnimation();
        });
    }

    if (isLoading){
        return (
            <View style={{ flex: 1, backgroundColor: colors.background }}>

            <SearchField searchText={searchText}
            setSearchText={setSearchText} />
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: colors.textSecondary}}>Loading</Text>

            <Text style={{color: colors.textSecondary}}> .</Text>
            <Text style={{color: colors.textSecondary}}> .</Text>
            <Text style={{color: colors.textSecondary}}> .</Text>

            </View>
            </View>
        );
    }

    return (
        <View style={[styles.container, {backgroundColor: colors.background}]}>
        <View
        style={{
            backgroundColor: colors.background,
                paddingBottom: 13,
        }}
        >
        <SearchField searchText={searchText} setSearchText={setSearchText} />
        </View>

        <View style={[styles.contentContainer, {backgroundColor: colors.background}]}>
        <FlatList 
            data={concerts}
            keyExtractor={item => item._id}
            renderItem={({item}) => {

            const session = item.sessions[0];
            const venueName = session.venue;
            const startDate = session.start;
            const endDate = session.end;

            //function to format dates
            function formatDate(dateString) {
                const dateObject = new Date(dateString);
                const day = dateObject.getUTCDate();
                const month = dateObject.toLocaleString("default", {
                    month: "long",
                });
                const year = dateObject.getUTCFullYear();
                return `${day} ${month} ${year}`;
            }

            const formattedStartDate = formatDate(startDate);
            const formattedEndDate = formatDate(endDate);

                return (
                <ConcertBlock
                key={item._id}
                concertName={item.name}
                venueName={venueName}
                startDate={formattedStartDate}
                endDate={formattedEndDate}
                artistName={item.artistName}
                artistDescription={"Lorem ipsum dolor sit amet consectetur"}
                artistImage={item.artistImage}
                imageBackground={item.concertImage}
                onPressFunction={() => {
                    if (item._id) {
                        console.log("Switching to concert page, \n" + item._id);
                        navigation.navigate("viewConcertPage", {
                            concert: item,
                        });
                    } else {
                        console.log("concert._id is undefined");
                    }
                }}
                / >
                ); 


            }}
        />

        <ScrollView style={{backgroundColor: colors.background}}>
        
        </ScrollView>
        </View>

        {/*      
            </ScrollView> */}
        <StatusBar style="light" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
    },
    contentContainer: {
        flex: 1,
        width: "100%",
    },
    rowBox: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
    },
});
