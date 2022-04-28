import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useContext } from "react";
import { COLORS } from "./consts";
import GreyButton from "./src/components/GreyButton";
import OrangeButton from "./src/components/OrangeButton";
import DarkGreyButton from "./src/components/DarkGreyButton";
import LongDarkGreyButton from "./src/components/LongDarkGreyButton";
import { CalculationsContext } from "./src/context/CalculationsContext";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const CalculatorScreen = () => {
  const {
    firstValue,
    actionButtonSelected,
    actionButtonJustClicked,
    secondValue,
    result,
    addToFirstValue,
    clearAll,
    setupActionButton,
  } = useContext(CalculationsContext);
  // Check to see if the passed sign is the one currently held in the actionButtonSelected State, important to highlight the button with chosen equation
  const isThisEquationChosen = (check) => {
    if (actionButtonSelected === check) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.inputTextStyle} numberOfLines={1}>
        {firstValue}
      </Text>
      {/* First row */}
      <View style={styles.row}>
        <GreyButton text="AC" onPress={() => clearAll()} />
        <GreyButton text="±" />
        <GreyButton text="%" />
        <OrangeButton
          text="÷"
          onPress={() => setupActionButton("÷")}
          // A check to see if the button to choose equation has just been presed. If so, check if it is this button.
          isSelected={
            actionButtonJustClicked === true
              ? isThisEquationChosen("÷")
                ? true
                : false
              : false
          }
        />
      </View>
      <View style={styles.row}>
        <DarkGreyButton text="7" onPress={() => addToFirstValue(7)} />
        <DarkGreyButton text="8" onPress={() => addToFirstValue(8)} />
        <DarkGreyButton text="9" onPress={() => addToFirstValue(9)} />
        <OrangeButton
          text="×"
          onPress={() => setupActionButton("×")}
          // A check to see if the button to choose equation has just been presed. If so, check if it is this button.
          isSelected={
            actionButtonJustClicked === true
              ? isThisEquationChosen("×")
                ? true
                : false
              : false
          }
        />
      </View>
      <View style={styles.row}>
        <DarkGreyButton text="4" onPress={() => addToFirstValue(4)} />
        <DarkGreyButton text="5" onPress={() => addToFirstValue(5)} />
        <DarkGreyButton text="6" onPress={() => addToFirstValue(6)} />
        <OrangeButton
          text="-"
          onPress={() => setupActionButton("-")}
          // A check to see if the button to choose equation has just been presed. If so, check if it is this button.
          isSelected={
            actionButtonJustClicked === true
              ? isThisEquationChosen("-")
                ? true
                : false
              : false
          }
        />
      </View>
      <View style={styles.row}>
        <DarkGreyButton text="1" onPress={() => addToFirstValue(1)} />
        <DarkGreyButton text="2" onPress={() => addToFirstValue(2)} />
        <DarkGreyButton text="3" onPress={() => addToFirstValue(3)} />
        <OrangeButton
          text="+"
          onPress={() => setupActionButton("+")}
          // A check to see if the button to choose equation has just been presed. If so, check if it is this button.
          isSelected={
            actionButtonJustClicked === true
              ? isThisEquationChosen("+")
                ? true
                : false
              : false
          }
        />
      </View>
      <View style={styles.row}>
        <LongDarkGreyButton text="0" onPress={() => addToFirstValue(0)} />
        <DarkGreyButton text="," onPress={() => addToFirstValue(".")} />
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
    fontSize: 70,
    fontWeight: "400",
    marginHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 100,
  },
});
