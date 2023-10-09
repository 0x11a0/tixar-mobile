import {useState} from 'react';
import { StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import ActiveCodeCard from '../../components/new/activeCodeCard';

export default ManageCodesPage = ({ route, navigation }) => {
    let { clubId, codes, token } = route.params;
    const [refresh, setRefresh] = useState(true);

    const deleteCode = (codeId) => {
        fetch("http://vf.tixar.sg/api/code/" + codeId, {
            method: "DELETE",
            credentials: "include",
            headers: { Authorization: token },
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Code deleted");
                    for (let i = 0; i < codes.length; i++) {
                        if (codes[i]._id === codeId) {
                            codes.splice(i, 1);
                            setRefresh(!refresh);
                            break;
                        }
                    }
                } else {
                    console.error("Problems deleting code");
                }
            }).catch((error) => {
                console.error(error);
            });
    };


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={codes}
                renderItem={({ item }) =>
                    <ActiveCodeCard
                        key={item._id}
                        codeName={item.code}
                        expirationDate={item.expires}
                        deleteFunction={() => {
                            ConfirmAlert({
                                title: 'Delete Code',
                                message: 'Action cannot be undone!',
                                positiveFunction: () => {
                                    deleteCode(item._id);
                                }
                            });
                        }}
                    />
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
