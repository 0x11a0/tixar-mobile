import React, { useState } from 'react';
import { View, Transform, ScaleTransform, Switch, StyleSheet } from 'react-native';

const ToggleSlider = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const scaleTransform = {
    transform: [{ scale: 0.8}]
  }
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#E9ECEF", true: "#3A416F" }}
        thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
        ios_backgroundColor="#E9ECEF"
        onValueChange={toggleSwitch}
        value={isEnabled}
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
