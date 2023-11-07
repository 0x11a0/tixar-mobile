import { React } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default HeaderBlock = ({
  name,
  walletOnPress,
  editOnPress,
  settingsOnPress,
}) => {
  return (
    <View style={styles.headerBox}>
      <Image
        source={require("../../assets/soft-ui-pro-react-native-v1.1.1/background3x.png")}
        style={styles.headerImage}
      />
      <Text style={styles.title}>TIXAR</Text>
      <Image
        source={require("../../assets/profilepicture.png")}
        style={styles.profileImage}
      />
      <Text style={styles.username}>{name}</Text>
      <Text style={styles.user}> User</Text>

      <View style={{ flexDirection: "row", top: 14 }} activeOpacity={0.5}>
        <Pressable
          onPress={() => {
            walletOnPress();
          }}
        >
          <View>
            <Image
              source={require("../../assets/wallet.png")}
              style={styles.walletStyle}
            />
          </View>
        </Pressable>

        <Pressable
          onPress={() => {
            editOnPress();
          }}
        >
          <View>
            <Image
              source={require("../../assets/edit.png")}
              style={styles.editStyle}
            />
          </View>
        </Pressable>

        <Pressable
          onPress={() => {
            settingsOnPress();
          }}
        >
          <View>
            <Image
              source={require("../../assets/settings.png")}
              style={styles.settingStyle}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBox: {
    position: "relative",
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 1,
  },
  title: {
    fontSize: 35,
    fontFamily: "Lato-Bold",
    color: "white",
    marginTop: 40,
  },
  headerImage: {
    marginTop: 30,
    width: "95%",
    height: 290,
    borderRadius: 22,
    resizeMode: "cover",
    position: "absolute",
  },
  profileImage: {
    flex: 0.55,
    width: 100,
    height: 90,
    resizeMode: "cover",
    marginTop: 8,
    marginBottom: 5,
  },
  username: {
    color: "white",
    fontFamily: "Lato-Bold",
    fontSize: 16,
    marginBottom: 5,
  },
  user: {
    color: "white",
    fontFamily: "Lato-Bold",
    fontSize: 14,
    marginBottom: 5,
  },
  editStyle: {
    width: 50,
    height: 50,
    marginLeft: 30,
  },
  walletStyle: {
    width: 50,
    height: 50,
  },
  settingStyle: {
    bottom: 2,
    width: 60,
    height: 60,
    marginLeft: 25,
  },
});
