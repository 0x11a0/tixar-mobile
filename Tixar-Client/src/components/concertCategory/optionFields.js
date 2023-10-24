import React, { useRef } from "react";
import { Pressable, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, FlatList } from "react-native";
import { ColorContext } from "../../../context";
import { useContext, useState } from "react";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default OptionField = ({
  options,
  optionText,
  setOption,
  antIconName,
  materialIconName,
  
}) => {
  const { colors } = useContext(ColorContext);

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      height: 50,
      backgroundColor: colors.secondary,
      // borderRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: visible ? 0 : 10,
      borderBottomRightRadius: visible ? 0 : 10,
      alignItems: "center",
      justifyContent: "flex-start",
      paddingHorizontal: "5%",
    },
    optionText: {
      fontFamily: "Lato-Regular",
      // color: visible ? '#252F40' : colors.textPrimary,
      // color: active ? 'black' : colors.textDisabled,
      fontSize: 17,
      lineHeight: 20,
    },
  });

  const original = optionText.slice();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Pressable
        style={styles.container}
        onPress={() => {
          setVisible(!visible);
        }}>
        {antIconName && <AntDesign name={antIconName} size={20} color={active ? colors.textPrimary : colors.textDisabled} />}
        {materialIconName && <MaterialIcons name={materialIconName} size={20} color={active ? colors.textPrimary : colors.textDisabled} />}
        <View style={{ width: "5%" }} />
        <Text style={[styles.optionText, { color: active ? colors.textPrimary : colors.textDisabled }]}>
          {optionText}
        </Text>
      </Pressable>
      {visible &&
        options.map((item, index) => {

          return (
            <View>
              <Pressable
                key={index}
                style={{
                  backgroundColor: colors.secondary,
                  height: optionText === item ? 0 : 50,
                  // borderRadius: 10,
                  marginHorizontal: 10,
                  borderWidth: optionText === item ? 0 : 1,
                  // borderBottomWidth: 1,
                  paddingHorizontal: '10%',
                  justifyContent: 'center',
                  alignItems: 'center'
                  // width: '40%'
                }}
                onPress={() => {
                  setVisible(!visible);
                  setOption(item);
                  setActive(true);
                }}>
                <Text style={[styles.optionText, { color: optionText === item ? 'black' : colors.textDisabled }]}>{item}</Text>
              </Pressable>

            </View>
          );
        })
        // <FlatList data={options}
        //   keyExtractor={(item, index) => index}
        //   renderItem={item => {
        //     <Pressable
        //       onPress={() => {
        //         setVisible(!visible);
        //       }}>
        //       <Text>{item}</Text>
        //     </Pressable>
        //   }}
        //   style={{ backgroundColor: 'white', height: 50, }}
        // />
      }
    </View>
  );
};


