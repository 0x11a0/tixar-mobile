import { React } from "react";
import {
  StyleSheet,
  Image,
  Pressable,

} from "react-native";

export default BackButton = ({ navigation }) => {
  return (

      <Pressable
        //on press function
        onPress={() => {
          console.log("returning to login page");
          navigation.goBack();
        }}
      >
        <Image
          style={styles.backIcon}
          source={require("../../assets/backArrowBlack.png")}
        />
      </Pressable>

  );
};

styles = StyleSheet.create({
  backIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
