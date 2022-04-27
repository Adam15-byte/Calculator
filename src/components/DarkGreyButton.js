import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { COLORS } from "../../consts";

const DarkGreyButton = ({ text }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => console.log("dark grey button clicked")}
    >
      <View style={styles.container}>
        <Text style={styles.textInside}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
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