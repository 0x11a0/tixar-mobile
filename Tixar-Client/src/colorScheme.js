// color palatte for global use
//import { colors } from '../../../colors';

export default ColorScheme = {

    // all cards should be primary colour
    // all textinput should be secondary color

    dark: {
        // General
        primary: '#212124',
        secondary: '#818181',
        background: '#161618',
        accent: '#bf94f7',


        // Text
        textPrimary: '#ffffff',
        textSecondary: 'white',
        textAccent: '#000000',
        textDisabled: '#CCCCCC',
        

        // Button
        buttonDisabled: '#818181',
        buttonEnabled: '#bf94f7'
    },
    light: {
        // General
        primary: '#818181',
        secondary: '#212124',
        background: '#bf94f7',
        accent: '#161618',


        // Text
        textPrimary: '#ffffff',
        textAccent: '#000000',
        textDisabled: '#CCCCCC',

        // Button
        buttonDisabled: '#818181',
        buttonEnabled: '#bf94f7'
    }
};


// import { ColorContext } from "../../../context";
// import { useState, useEffect, useContext } from "react";


// const {colors} = useContext(ColorContext);