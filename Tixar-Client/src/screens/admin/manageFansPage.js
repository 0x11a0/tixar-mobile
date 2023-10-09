import { React, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, FlatList, Text, View, Animated } from 'react-native';
import FanCard from '../../components/new/manageFansCard';
import ConfirmAlert from '../../components/verifiedFans/confirmAlert'

export default ManageFansPage = ({ route, navigation }) => {
    const [members, setMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refresh, setRefresh] = useState(true);
    const getMembers = () => {
        fetch('http://vf.tixar.sg/api/club/' + route.params.clubId, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Authorization': route.params.token }
        }).then(response => response.json())
            .then((data) => {
                // console.log(data);
                // console.log(data.members);
                setMembers(data.members);
            })
            .catch(error => {
                console.error(error);
            }).then(() => {
                setIsLoading(false);
            });
    }

    const deleteMember = (memberId) => {
        fetch('http://vf.tixar.sg/api/profile/' + memberId, {
            method: 'DELETE',
            credentials: 'include',
            headers: { 'Authorization': route.params.token }
        }).then((response) => {
            if (response.ok) {
                console.log("Profile deleted");
                for (let i = 0; i < members.length; i++) {
                    if (members[i]._id === memberId) {
                        members.splice(i, 1);
                        setRefresh(!refresh);
                        break;
                    }
                }
            } else {
                console.error("Problems deleting code");
            }
        }).catch(error => {
            console.error(error);
        });
    }

    useEffect(() => {
        getMembers();
    }, []);

    navigation.addListener('focus', () => {
        getMembers();
    });

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
        <SafeAreaView style={styles.container}>
            {/* Your FanCards go here */}
            <FlatList
                data={members}
                renderItem={({ item }) =>
                    <View key={item._id}>
                        <FanCard
                            fanName={item.fanId.name}
                            fanPoints={item.points}
                            onPressFunction={() => {
                                ConfirmAlert({
                                    title: 'Delete profile',
                                    message: 'Action cannot be undone',
                                    positiveFunction: () => {
                                        deleteMember(item._id);
                                    }
                                });
                            }}
                        />
                        <View style={{ height: 10 }} />
                    </ View>
                }
                keyExtractor={item => item._id}
                extraData={refresh}
                ListEmptyComponent={() => {
                    <Text>Loading ...</Text>
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
});
