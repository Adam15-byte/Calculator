import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "./consts";
import GreyButton from "./src/components/GreyButton";
import OrangeButton from "./src/components/OrangeButton";
import DarkGreyButton from "./src/components/DarkGreyButton";
import LongDarkGreyButton from "./src/components/LongDarkGreyButton";

const CalculatorScreen = () => {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.inputTextStyle}>1,984</Text>
      {/* First row */}
      <View style={styles.row}>
        <GreyButton text="C" />
        <GreyButton text="§" />
        <GreyButton text="%" />
        <OrangeButton text="~" />
      </View>
      <View style={styles.row}>
        <DarkGreyButton text="7" />
        <DarkGreyButton text="8" />
        <DarkGreyButton text="9" />
        <OrangeButton text="X" />
      </View>
      <View style={styles.row}>
        <DarkGreyButton text="4" />
        <DarkGreyButton text="5" />
        <DarkGreyButton text="6" />
        <OrangeButton text="-" />
      </View>
      <View style={styles.row}>
        <DarkGreyButton text="1" />
        <DarkGreyButton text="2" />
        <DarkGreyButton text="3" />
        <OrangeButton text="+" />
      </View>
      <View style={styles.row}>
        <LongDarkGreyButton text="0" />
        <DarkGreyButton text="." />
        <OrangeButton text="=" />
      </View>
    </View>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  displayContainer: {
    flex: 1,
    width: "90%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingBottom: 60,
  },
  inputTextStyle: {
    color: COLORS.white,
    fontSize: 90,
    fontWeight: "400",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 100,
  },
});
