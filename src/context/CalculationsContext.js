import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState, useEffect, useCallback } from "react";

export const CalculationsContext = createContext();
export const CalculationsContextProvider = ({ children }) => {
  const [firstValue, setFirstValue] = useState("0");
  const [actionButtonSelected, setActionButtonSelected] = useState(null);
  const [actionButtonJustClicked, setActionButtonJustClicked] = useState(false);
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState(null);
  const [currentlyFirstValue, setCurrentlyFirstValue] = useState(true);
  const [modifySecondValue, setModifySecondValue] = useState(false);

  // Console Log the values handled
  useEffect(() => {
    console.log("modifySecondValue is: " + modifySecondValue);
  }, [modifySecondValue]);
  useEffect(() => {
    console.log("secondValue is: " + secondValue);
  }, [secondValue]);
  useEffect(() => {
    console.log("result is: " + result);
  }, [result]);

  // handle clicking on number, and decide if it should be added to first or the second value
  const handleNumberClick = useCallback(
    (number) => {
      if (currentlyFirstValue === true) {
        addToFirstValue(number);
      } else if (currentlyFirstValue === false && result === null) {
        setActionButtonJustClicked((prevState) => false);
        addToSecondValue(number);
      } else if (
        currentlyFirstValue === false &&
        result !== null &&
        modifySecondValue === true
      ) {
        if (secondValue !== "" && actionButtonJustClicked === true) {
          setSecondValue("");
        }
        setActionButtonJustClicked((prevState) => false);
        addToSecondValue(number);
      }
    },
    [firstValue, secondValue, actionButtonJustClicked]
  );
  const addToFirstValue = useCallback(
    (number) => {
      const numberAsString = number.toString();
      if (firstValue === "0") {
        setFirstValue((prevState) => numberAsString);
      } else {
        setFirstValue((prevState) => prevState + numberAsString);
      }
    },
    [firstValue]
  );
  const addToSecondValue = useCallback(
    (number) => {
      const numberAsString = number.toString();
      setSecondValue((prevState) => prevState + numberAsString);
    },
    [secondValue]
  );

  // handle AC All Clear
  const clearAll = useCallback(() => {
    setFirstValue("0");
    setActionButtonSelected(null);
    setActionButtonJustClicked(false);
    setSecondValue("");
    setCurrentlyFirstValue(true);
    setResult(null);
    setModifySecondValue(false);
  }, [
    firstValue,
    secondValue,
    actionButtonJustClicked,
    actionButtonSelected,
    currentlyFirstValue,
    result,
    modifySecondValue,
  ]);

  // handle clicking on action buttons
  const setupActionButton = (sign) => {
    if (result === null) {
      setActionButtonSelected((prevState) => sign);
      setCurrentlyFirstValue((prevState) => false);
      setActionButtonJustClicked((prevState) => true);
    }
    if (result !== null) {
      // set ModifySecondValue to Allow modification of second value, after the initiall result got obtained
      setModifySecondValue((prevState) => true);
      setActionButtonSelected((prevState) => sign);
      setActionButtonJustClicked((prevState) => true);
    }
  };

  // handle equation sign
  const getResult = () => {
    setModifySecondValue((prevState) => false);
    const firstValueToFloat = parseFloat(firstValue);
    const secondValueToFloat = parseFloat(secondValue);
    if (firstValue === "0" || secondValue === "") return;

    //Repeat the calculation with previous value if result is already present
    if (result !== null) {
      if (actionButtonSelected === "+") {
        setResult(result + secondValueToFloat);
      }
      if (actionButtonSelected === "-") {
        setResult(result - secondValueToFloat);
      }
      if (actionButtonSelected === "×") {
        setResult(result * secondValueToFloat);
      }
      if (actionButtonSelected === "÷") {
        setResult(result / secondValueToFloat);
      }
      //IF there is no "result" currently, perform the operation on first and second value states.
    } else if (result === null) {
      if (actionButtonSelected === "+") {
        setResult(firstValueToFloat + secondValueToFloat);
      }
      if (actionButtonSelected === "-") {
        setResult(firstValueToFloat - secondValueToFloat);
      }
      if (actionButtonSelected === "×") {
        setResult(firstValueToFloat * secondValueToFloat);
      }
      if (actionButtonSelected === "÷") {
        setResult(firstValueToFloat / secondValueToFloat);
      }
    }
  };

  const valueToShowCurrently = () => {
    if (secondValue !== "" && result === null) return secondValue;
    if (secondValue === "" && result === null) return firstValue;
    if (result !== null && modifySecondValue === false) return result;
    if (result !== null && modifySecondValue === true) return secondValue;
  };
  // Handle calculating percentages of the currently displayed value
  const calculatePercentage = useCallback(() => {
    const currentValue = valueToShowCurrently();
    if (currentValue === firstValue) {
      setFirstValue((prevState) => (currentValue * 0.01).toString());
    }
    if (currentValue === secondValue) {
      setSecondValue((prevState) => (currentValue * 0.01).toString());
    }
    if (currentValue === result) {
      setResult((prevState) => currentValue * 0.01);
    }
  }, [firstValue, secondValue, result]);

  // Handle changing the + - signs
  const changeSignOfCurrentValue = useCallback(() => {
    const currentValue = valueToShowCurrently();
    if (currentValue === firstValue) {
      if (currentValue.charAt(0) !== "-") {
        setFirstValue((prevState) => "-" + prevState);
      } else if (currentValue.charAt(0) === "-") {
        setFirstValue((prevState) => prevState.replace("-", ""));
      }
    }
    if (currentValue === secondValue) {
      if (currentValue.charAt(0) !== "-") {
        setSecondValue((prevState) => "-" + prevState);
      } else if (currentValue.charAt(0) === "-") {
        setSecondValue((prevState) => prevState.replace("-", ""));
      }
    }
    if (currentValue === result) {
      setResult((prevState) => prevState * -1);
    }
  }, [firstValue, secondValue, result]);

  return (
    <CalculationsContext.Provider
      value={{
        firstValue,
        actionButtonSelected,
        actionButtonJustClicked,
        secondValue,
        result,
        clearAll,
        setupActionButton,
        valueToShowCurrently,
        handleNumberClick,
        getResult,
        calculatePercentage,
        changeSignOfCurrentValue,
      }}
    >
      {children}
    </CalculationsContext.Provider>
  );
};
