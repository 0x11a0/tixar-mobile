import {React, useState, useEffect} from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import FanclubCard from '../../components/new/fanclubCard';
import NextButton from '../../components/new/nextButton';
import ManageFanclubCard from '../../components/new/manageFanclubCard';
import manageFanclubMiniCard from '../../components/new/manageFanclubMiniCard';
import ManageFanclubMiniCard from '../../components/new/manageFanclubMiniCard';

export default ManageFanClub = ({ route, navigation }) => {
    let clubId = route.params.clubId;
	const [club, setClub] = useState();
	const [isLoading, setIsLoading] = useState(true);

	const [codes, setCodes] = useState([]);

	const getCodes = () => {
		fetch('http://vf.tixar.sg/api/codes', {
			method: 'GET',
			credentials: 'include',
			headers: { 'Authorization':  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGZlYjU2ZmYwYmE1NjMxYzY1NTQ1MCIsInR5cGUiOiJhZG1pbiIsInBob25lIjoiNjU5NzMxMTUzMCIsIm5hbWUiOiJTVyBPcCIsImlhdCI6MTY5NTYwMDUxOCwiZXhwIjoxNjk2MjA1MzE4fQ.TZmGbZf1P7S1XkQewcBc83CnyrfgWiE2pu1LgiJFRK8'}	
			
		}).then(response => response.json())
		.then(data => setCodes(data.filter(entry => entry.club._id === clubId))).catch(error => console.error(error));
	}

	const getClub = () => {
         fetch('http://vf.tixar.sg/api/club/' + clubId, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Authorization':  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGZlYjU2ZmYwYmE1NjMxYzY1NTQ1MCIsInR5cGUiOiJhZG1pbiIsInBob25lIjoiNjU5NzMxMTUzMCIsIm5hbWUiOiJTVyBPcCIsImlhdCI6MTY5NTYwMDUxOCwiZXhwIjoxNjk2MjA1MzE4fQ.TZmGbZf1P7S1XkQewcBc83CnyrfgWiE2pu1LgiJFRK8'}	
        }).then(response => response.json())
            .then((data) => {
				setClub(data);				
            })
            .catch(error => {
                console.error(error);
            }).then(() => {
				console.log('club is ' + club);
				setIsLoading(false);});
	}


	useEffect(() => {
		getCodes();
        getClub();
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

                <ManageFanclubCard
                    clubName={club.name}
                    imageUrl={club.imageUrl}
                    description={club.description}
                />

                <View style={styles.miniCardContainer}>
                    <ManageFanclubMiniCard
                        // navigationDestination={'NotificationsPage'} //place holder page, change to fans page
                        onPressFunction={() => {
                            navigation.navigate('adminFansPage', {
								token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGZlYjU2ZmYwYmE1NjMxYzY1NTQ1MCIsInR5cGUiOiJhZG1pbiIsInBob25lIjoiNjU5NzMxMTUzMCIsIm5hbWUiOiJTVyBPcCIsImlhdCI6MTY5NTYwMDUxOCwiZXhwIjoxNjk2MjA1MzE4fQ.TZmGbZf1P7S1XkQewcBc83CnyrfgWiE2pu1LgiJFRK8',
                                
								clubId: clubId,
                            });
                        }}
                        title={'Fan Count'}
                        textDisplay={club.members.length}
                    />

                    <ManageFanclubMiniCard
                        // navigationDestination={'adminCodesPage'} //place holder page, change to codes page
                        onPressFunction={() => {
                            navigation.navigate('adminCodesPage', {
                                clubId: club._id,
                                codes: codes
                            });
                        }}
                        title={'Active Codes'}
                        textDisplay={codes.length}
                    />
                </View>

                {/* Next Button */}
                <View style={styles.buttonContainer}>
                    <NextButton
                        buttonText={'Generate a Fan Code'}
                        onPressFunction={() => navigation.navigate('generateCodePage', {
							token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGZlYjU2ZmYwYmE1NjMxYzY1NTQ1MCIsInR5cGUiOiJhZG1pbiIsInBob25lIjoiNjU5NzMxMTUzMCIsIm5hbWUiOiJTVyBPcCIsImlhdCI6MTY5NTYwMDUxOCwiZXhwIjoxNjk2MjA1MzE4fQ.TZmGbZf1P7S1XkQewcBc83CnyrfgWiE2pu1LgiJFRK8',
							name: club.name,
							clubId: club._id

						})} //place holder destination, change to create new fanclub page
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
        marginTop: 20,
    },
    miniCardContainer: {
        marginHorizontal: 20,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
