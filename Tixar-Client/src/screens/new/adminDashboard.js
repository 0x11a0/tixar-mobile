import { React, useState, useRef, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, FlatList, Text } from 'react-native';
import FanclubCard from '../../components/new/fanclubCard';
import NextButton from '../../components/new/nextButton';

export default AdminDashboard = ({ route, navigation }) => {
    const [clubs, setClubs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [codes, setCodes] = useState([]);
	const getCodes = () => {
		fetch('http://vf.tixar.sg/api/codes', {
			method: 'GET',
			credentials: 'include',
			headers: { 'Authorization':  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGZlYjU2ZmYwYmE1NjMxYzY1NTQ1MCIsInR5cGUiOiJhZG1pbiIsInBob25lIjoiNjU5NzMxMTUzMCIsIm5hbWUiOiJTVyBPcCIsImlhdCI6MTY5NTYwMDUxOCwiZXhwIjoxNjk2MjA1MzE4fQ.TZmGbZf1P7S1XkQewcBc83CnyrfgWiE2pu1LgiJFRK8'}	
			
		}).then(response => response.json())
		.then(data => setCodes(data)).catch(error => console.error(error));
	}

    const getClubs = () => {
          fetch('http://vf.tixar.sg/api/clubs', {
            method: 'GET',
            credentials: 'include',
            headers: { 'Authorization':  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGZlYjU2ZmYwYmE1NjMxYzY1NTQ1MCIsInR5cGUiOiJhZG1pbiIsInBob25lIjoiNjU5NzMxMTUzMCIsIm5hbWUiOiJTVyBPcCIsImlhdCI6MTY5NTYwMDUxOCwiZXhwIjoxNjk2MjA1MzE4fQ.TZmGbZf1P7S1XkQewcBc83CnyrfgWiE2pu1LgiJFRK8'}
        }).then(response => response.json())
            .then((data) => {
				console.log(data);
                setClubs(data);
				setIsLoading(false);

            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
		getCodes();
		getClubs();
    }, []);
	
	if (isLoading) {
		return (
			<SafeAreaView style={{
				flex: 1,
				backgroundColor: '#F2F2F2',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<Text>Loading ...</Text>
			</SafeAreaView>
		);
	}


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
                                    navigation.navigate('adminClubPage', {
										clubId: club._id,
										token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGZlYjU2ZmYwYmE1NjMxYzY1NTQ1MCIsInR5cGUiOiJhZG1pbiIsInBob25lIjoiNjU5NzMxMTUzMCIsIm5hbWUiOiJTVyBPcCIsImlhdCI6MTY5NTYwMDUxOCwiZXhwIjoxNjk2MjA1MzE4fQ.TZmGbZf1P7S1XkQewcBc83CnyrfgWiE2pu1LgiJFRK8'
                                    })
                                }}
                                clubName={club.name}
                                fanNumber={club.members.length}
                                codesActive={codes.filter((entry) => entry.club._id === club._id).length}
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
