import { React, useState, useRef, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import FanclubCard from '../../components/new/fanclubCard';
import NextButton from '../../components/new/nextButton';


export default AdminDashboard = ({ route, navigation }) => {
    const [clubs, setClubs] = useState([]);

    const getClubs = () => {
        fetch('http://vf.tixar.sg/api/clubs', {
            method: 'GET',
            credentials: 'include',
            headers: { 'Authorization': route.params.token }
        }).then(response => response.json())
            .then((data) => {
                setClubs(data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        getClubs();
        console.log(clubs);
    }, []);



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
            <View style={styles.container}>
                <ScrollView>
                    {/* Your FanclubCards go here */}
                    {clubs.map((club) => {
                        return (
                            <FanclubCard
                                key={club._id}
                                onPressFunction={() => {
                                    console.log(club);
                                    navigation.navigate('adminClubPage', {
                                        club: club
                                    })
                                }}
                                clubName={club.name}
                                fanNumber={club.members.length}
                                codesActive={club.codes.length}
                                imageUrl={club.imageUrl}
                            />
                        );
                    })}

                </ScrollView>

                {/* Next Button */}
                <View style={styles.buttonContainer}>
                    <NextButton
                        buttonText={'Create New Fanclub'}
                        onPressFunction={() => navigation.navigate('createClubPage')} //place holder destination, change to create new fanclub page
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
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 16,
    },
});
