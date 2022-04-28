import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../consts";

const DarkGreyButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.textInside}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DarkGreyButton;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: COLORS.darkgrey,
    alignItems: "center",
    justifyContent: "center",
  },
  textInside: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: "500",
  },
});
