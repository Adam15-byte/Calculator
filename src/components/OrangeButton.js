import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { COLORS } from "../../consts";

const OrangeButton = ({ text }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => console.log("orange button clicked")}
    >
      <View style={styles.container}>
        <Text style={styles.textInside}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OrangeButton;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: COLORS.orange,
    alignItems: "center",
    justifyContent: "center",
  },
  textInside: {
    color: COLORS.white,
    fontSize: 40,
    fontWeight: "500",
  },
});
