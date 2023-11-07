// color palatte for global use
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
        primary: '#ffffff',
        secondary: '#818181',
        background: '#CCCCCC',
        accent: '#bf94f7',


        // Text
        textPrimary: '#000000',
        textAccent: '#161618',
        textDisabled: '#CCCCCC',

        // Button
        buttonDisabled: '#818181',
        buttonEnabled: '#bf94f7'
    }
};


// import { ColorContext } from "../../../context";
// import { useState, useEffect, useContext } from "react";


// const {colors} = useContext(ColorContext);