import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    Pressable,
  } from "react-native";
  import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

  import SearchField from '../../components/browseConcert/searchField';
  import TicketCard from '../../components/userTickets/ticketCard';
  import FilterButton from '../../components/userTickets/filterButton';

  import { ColorContext } from "../../../context";
  import { useContext } from "react"; 

  
  export default TicketsPage = ({ route, navigation }) => {

    const {colors} = useContext(ColorContext);

    // Function to handle the press event of the first ticket
    const firstTicketPress = () => {
        // console.log("first ticket pressed");
        navigation.navigate("viewConcertPage"); //change this to haris's view ticket page
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-start',
            backgroundColor: colors.background,
        },
    
        searchContainer: {
            backgroundColor: colors.background,
            marginVertical: 20,
        },
        ticketContainer: {
            flex: 1, //grow and take up the space of the parent container
            justifyContent: 'flex-start',
            flexDirection: 'column',
            backgroundColor: colors.background,
        }
    });
  
    return (

        // container to contain all the elements
        <View style={styles.container}>

            {/* container for search bar and filter button */}
            <View style={styles.searchContainer}>
                
                {/* search field imported from browseConcert components */}
                <SearchField />
                
            </View>        

            {/* container for the ticket cards */}
            <View style={styles.ticketContainer}>

                {/* first concert ticket*/}
                <TicketCard 
                    concertName={'Coldplay Concert'}
                    concertCategory={'Category: 1'}
                    concertReference={'Reference No. 123456789'}
                    onPress={() => {firstTicketPress()}}
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
  
