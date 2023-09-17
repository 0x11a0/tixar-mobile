import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    Pressable,
  } from "react-native";
  import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

  import SearchField from '../components/browseConcert/searchField';
  import TicketCard from '../components/userTickets/ticketCard';
  import FilterButton from '../components/userTickets/filterButton';
  
  export default userTicketsPage = ({ route, navigation }) => {
  
    return (

        // container to contain all the elements
        <View style={styles.container}>

            {/* container for search bar and filter button */}
            <View style={{
                // backgroundColor: 'red',
                paddingVertical: 5,
            }}>
                
                {/* search field imported from browseConcert components */}
                <SearchField />

                <View style={{ height: 16 }} />

                {/* filter button */}
                <FilterButton />
                
            </View>        

            {/* container for the ticket cards */}
            <View style={styles.ticketContainer}>

                {/* first concert ticket*/}
                <TicketCard 
                    concertName={'Coldplay Concert'}
                    concertCategory={'Category: 1'}
                    concertReference={'Reference No. 123456789'}
                />
                
                {/* second concert ticket*/}
                <TicketCard 
                    concertName={'Coldplay Concert'}
                    concertCategory={'Category: 1'}
                    concertReference={'Reference No. 123456789'}
                />
            </View>

        </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },

    ticketContainer: {
        flex: 1, //grow and take up the space of the parent container
        justifyContent: 'flex-start',
        flexDirection: 'column',
        // backgroundColor: 'blue',
    }
});