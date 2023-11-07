import { useState, useContext } from 'react';
import { View, Transform, ScaleTransform, Switch, StyleSheet } from 'react-native';
import { ColorContext } from '../../../context';

const ToggleSlider = ({ toggleValue, onToggle }) => {
    const { colors } = useContext(ColorContext);


    // const toggleSwitch = () => {
    //     setIsEnabled((previousState) => !previousState);
    // };

    const scaleTransform = {
        transform: [{ scale: 0.8 }]
    }
    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: "#E9ECEF", true: "#3A416F" }}
                thumbColor={toggleValue ? "#FFFFFF" : "#FFFFFF"}
                ios_backgroundColor="#E9ECEF"
                onValueChange={() => { onToggle() }}
                value={toggleValue}
                style={scaleTransform}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export default ToggleSlider;
