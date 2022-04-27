import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { COLORS } from "../../consts";

const GreyButton = ({ text }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => console.log("grey button clicked")}
    >
      <View style={styles.container}>
        <Text style={styles.textInside}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GreyButton;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: COLORS.lightgrey,
    alignItems: "center",
    justifyContent: "center",
  },
  textInside: {
    color: COLORS.black,
    fontSize: 30,
    fontWeight: "500",
  },
});
