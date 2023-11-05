import { React, useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import ClubsCard from "../../components/new/userFanclub";
import { AuthContext, ColorContext } from "../../../context";
import SearchField from "../../components/browseConcert/searchField";

export default ViewAllClubsPage = ({ route, navigation }) => {
    const { token } = useContext(AuthContext);
    const { colors } = useContext(ColorContext);
    const [clubs, setClubs] = useState([]);
    const [allClubs, setAllClubs] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [profiles, setProfiles] = useState([]);
    const [allProfiles, setAllProfiles] = useState([]);
    const [updating, setIsUpdating] = useState(false);

    const getClubs = () => {
        fetch("http://vf.tixar.sg:3001/api/clubs", {
            method: "GET",
            credentials: "include",
            headers: { Authorization: 'Bearer ' + token },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setClubs(data);
                setAllClubs(data);
            }).then(() => setIsLoading(false))
            .catch((error) => {
                console.error("error at clubs " + error);
            });
    };

    const getProfiles = () => {
        fetch('http://vf.tixar.sg:3001/api/profiles', {
            method: "GET",
            credentials: "include",
            headers: { Authorization: 'Bearer ' + token },
        }).then(response => response.json())
            .then(data => {
                setProfiles(data.map(profile => profile.club._id));
                setAllProfiles(data);
            }).then(() => getClubs())
            .catch(error => console.log("error at profiles" + error));
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            getProfiles();
        });
    }, [navigation]);

    useEffect(() => {
        if (isLoading){
            return;
        } else if (searchText === ''){
            setClubs(allClubs);
            return;
        }
        let query = searchText.toLowerCase();
        setClubs(allClubs.filter(club => club.name.toLowerCase().includes(query)));
    }, [searchText]);

    if (isLoading){
        return (
            <View style={{ flex: 1, backgroundColor: colors.background }}>

            <SearchField searchText={searchText}
            setSearchText={setSearchText} />

            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
        <SearchField searchText={searchText}
        setSearchText={setSearchText} />
        <FlatList 
        data={clubs}
        keyExtractor={item => item._id}
        renderItem={({item}) => {
            return (
                <View>
                <View style={{height: 5}}/>
                <ClubsCard
                clubId={item._id}
                onPressFunction={() => {
                    if (!isLoading){
                        navigation.navigate("viewClubPage", {
                            clubName: item.name,
                            artistDescription: item.description,
                            key: item._id,
                            imageUrl: item.imageUrl,
                            points: profiles.includes(item._id) ? allProfiles.filter(x => x.club._id === item._id)[0].points : null
                        });
                    }
                }}
                setIsLoading={setIsLoading}
                isMember={profiles.includes(item._id)}
                positiveFunction={() => console.log("pos")}
                negativeFunction={() => console.log("neg")}
                clubName={item.name}
                fanNumber={item.members.length}
                codesActive={item.codes.length}
                imageUrl={item.imageUrl} />
                </View>
            );
        }}

        />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 16,
    },
});
