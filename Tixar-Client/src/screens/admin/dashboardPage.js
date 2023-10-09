import { React, useState, useRef, useEffect } from "react";
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    FlatList,
    Text,
} from "react-native";
import FanclubCard from "../../components/new/fanclubCard";
import NextButton from "../../components/new/nextButton";

export default DashboardPage = ({ route, navigation }) => {
    const token = route.params.token;
    const [clubs, setClubs] = useState([]);
    const [codes, setCodes] = useState([]);
    const [refresh, setRefresh] = useState(true);

    const getCodes = () => {
        fetch("http://vf.tixar.sg/api/codes", {
            method: "GET",
            credentials: "include",
            headers: { Authorization: token },
        })
            .then((response) => response.json())
            .then((data) => setCodes(data))
            .catch((error) => console.error(error));
    };

    const getClubs = () => {
        fetch("http://vf.tixar.sg/api/clubs", {
            method: "GET",
            credentials: "include",
            headers: { Authorization: token },
        })
            .then((response) => response.json())
            .then((data) => {
                setClubs(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const deleteClub = (clubId) => {
        fetch("http://vf.tixar.sg/api/club/" + clubId, {
            method: "DELETE",
            credentials: "include",
            headers: { Authorization: token },
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Club deleted");
                    for (let i = 0; i < clubs.length; i++){
                        if (clubs[i]._id === clubId){
                            clubs.splice(i, 1);
                            setRefresh(!refresh);
                            break;
                        }
                    }
                } else {
                    console.error("Problems deleting club");
                }
            }).catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getCodes();
        getClubs();
    }, []);

    navigation.addListener('focus', () => {
        getCodes();
        getClubs();
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
            <View style={styles.container}>
                {/* Your FanclubCards go here */}
                <FlatList
                    data={clubs}
                    renderItem={({ item }) =>
                        <FanclubCard
                            key={item._id}
                            onPressFunction={() => {
                                navigation.navigate("adminClubPage", {
                                    clubId: item._id,
                                    token: token,
                                });
                            }}
                            clubName={item.name}
                            fanNumber={item.members.length}
                            codesActive={
                                codes.filter((entry) => entry.club._id === item._id).length
                            }
                            imageUrl={item.imageUrl}
                            deleteFunction={() => {
                                if (deleteClub(item._id)) {

                                }
                            }}
                        />
                    }
                    keyExtractor={item => item._id}
                    extraData={refresh}
                    ListEmptyComponent={() => {
                        <Text>Loading ...</Text>
                    }}
                />

                {/* Next Button */}
                <View style={styles.buttonContainer}>
                    <NextButton
                        buttonText={"Create New Fanclub"}
                        onPressFunction={() =>
                            navigation.navigate("createClubPage", { token: token })
                        } //place holder destination, change to create new fanclub page
                        buttonHeight={50}
                    />
                </View>
            </View>
        </SafeAreaView>
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
