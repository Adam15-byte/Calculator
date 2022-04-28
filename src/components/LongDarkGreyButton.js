import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../consts";

const LongDarkGreyButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftSideContainer}>
          <Text style={styles.textInside}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LongDarkGreyButton;

const styles = StyleSheet.create({
  container: {
    width: 172,
    height: 80,
    borderRadius: 50,
    backgroundColor: COLORS.darkgrey,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  textInside: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: "500",
  },
  leftSideContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.darkgrey,
    justifyContent: "center",
    alignItems: "center",
  },
});
