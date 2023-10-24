import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
} from "react-native";

import { React, useEffect, useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ColorContext } from "../../../context";
import { useContext } from "react";
import Button from '../../components/newApp/button';
import { AntDesign } from '@expo/vector-icons'
import FooterBlock from "../../components/viewConcert/footerBlock";
import OptionFields from "../../components/concertCategory/optionFields";
import DatePicker from "../../components/concertCategory/datePicker";


export default ConcertCategoryPage = ({ route, navigation }) => {
    const insets = useSafeAreaInsets();
    const { colors } = useContext(ColorContext);
    // STATE VARIABLES to store the text input from the user for quantity and category
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    
    const dates = [
        '1st January 2024', '2nd January 2024',
        '5th January 2024', '6th January 2024'
    ]

    const quantities = [
        '1', '2', '3', '4', '5'
    ]

    const categories = [
        'A', 'B', 'C', 'D'
    ]

    const [date, setDate] = useState('Date');
    const [quantity, setQuantity] = useState('Quantity');
    const [category, setCategory] = useState('Category');

    useEffect(() => {
        setIsButtonEnabled(date !== 'Date' && quantity !== 'Quantity' && category !== 'Category')
    }, [date, quantity, category]);

    const styles = StyleSheet.create({
        container: {
            justifyContent: "flex-start",
            alignItems: "flex-start",
            paddingHorizontal: 20,
            backgroundColor: colors.background,
        },
        layoutImage: {
            margin: 15,
            backgroundColor: colors.primary,
            width: "100%",
            borderRadius: 15,
            resizeMode: "contain",
            alignSelf: "center",
        },
        subtitle: {
            fontSize: 16,
            fontFamily: "Lato-Bold",
            color: colors.textPrimary,
            paddingVertical: 10,
        },
        buttonContainer: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
        },
    });

    return (

        // ensures that the content is not hidden by the phone's status bar or notches
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.background,
                alignItems: "center",
                justifyContent: "flex-start",
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}
        >

            {/* this library component ensures that the input will jump above the keyboard when typing */}
            <KeyboardAwareScrollView
                style={{ width: "100%" }}
                contentContainerStyle={styles.container}
                extraHeight={100} // Adjust this value as needed
                enableOnAndroid={true} // Set this to true for Android support
            >
                <View style={{ height: 17 }} />

                {/* image of the concert's category layout */}
                <Image
                    source={require("../../assets/images/concertLayout.png")}
                    style={styles.layoutImage}
                />

                <View style={{ height: 30 }} />

                {/* card that wraps all the input boxes */}
                <View
                    style={{
                        width: "100%",
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        zIndex: 1,
                        padding: 20,
                    }}
                >
                    {/* date picker that works on both iOS and Android */}
                    <Text style={styles.subtitle}>Date</Text>
                    {/* <View>
                        <DatePicker
                            icon={require("../../assets/soft-ui-pro-react-native-v1.1.1/calendar3x.png")}
                            minDate={new Date()}
                        // maxDate={new Date(2024, 0, 27)}
                        />
                    </View> */}

                    <OptionFields
                        optionText={date}
                        setOption={setDate}
                        antIconName='calendar'
                        options={dates}
                    />

                    {/* quantity selection */}
                    <Text style={styles.subtitle}>Quantity</Text>
                    {/* <OptionFields
                        optionText={"0"}
                        icon={require("../../assets/soft-ui-pro-react-native-v1.1.1/users3x.png")}
                        onPressFunction={() => {
                            console.log("quantity option clicked");
                        }}
                        onChangeTextFunction={(text) => {
                            handleQuantityChange(text);
                        }}
                        keyboardType={"numeric"}
                    /> */}
                    <OptionFields
                        optionText={quantity}
                        setOption={setQuantity}
                        materialIconName={'format-list-numbered'}
                        options={quantities}
                    />

                    {/* seat category selection */}
                    <Text style={styles.subtitle}>Seat Category</Text>
                    {/* <OptionFields
                        optionText={"Category 1"}
                        icon={require("../../assets/soft-ui-pro-react-native-v1.1.1/components3x.png")}
                        onPressFunction={() => {
                            console.log("category option clicked");
                        }}
                        onChangeTextFunction={(text) => {
                            handleCategoryChange(text);
                        }}
                        keyboardType={"numeric"}
                    /> */}
                    <OptionFields
                        optionText={category}
                        setOption={setCategory}
                        antIconName={'tag'}
                        options={categories}
                    />

                    {/* button that brings you to the purchase confirmation page */}

                    <View style={styles.buttonContainer}>
                        <Button buttonText={"BOOK NOW"}
                            onPressFunction={() => {
                                console.log("Book button clicked");
                            }}
                            enableCondition={isButtonEnabled} // condition to be set  when all fields are filled and available
                        />
                    </View>

                </View>

                <View style={{ height: 20 }} />

                <FooterBlock />

            </KeyboardAwareScrollView>

        </SafeAreaView>

    );
};


