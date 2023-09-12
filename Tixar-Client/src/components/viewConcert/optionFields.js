import { Pressable, Text, StyleSheet, Image, View } from "react-native";

export default OptionField = ({
  optionText,
  icon,
  onPressFunction,
}) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        onPressFunction();
      }}
    >
      <Image source={icon} style={styles.icon}/>

      <View style={{ width: "5%" }} />

      <Text style={styles.optionText}>{optionText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "#D2D6DA",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: "5%",
    // backgroundColor: 'blue',
  },
  optionText: {
    fontFamily: "Lato-Regular",
    color: "#9398A0",
    fontSize: 17,
    // backgroundColor: 'green',
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    tintColor: "#252F40",
    // backgroundColor: 'red',
  },
});
