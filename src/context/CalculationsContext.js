import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState, useEffect } from "react";

export const CalculationsContext = createContext();
export const CalculationsContextProvider = ({ children }) => {
  const [firstValue, setFirstValue] = useState("0");
  const [actionButtonSelected, setActionButtonSelected] = useState(null);
  const [actionButtonJustClicked, setActionButtonJustClicked] = useState(false);
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState(null);
  const [currentlyFirstValue, setCurrentlyFirstValue] = useState(true);

  useEffect(() => {
    console.log("firstValue is: " + firstValue);
  }, [firstValue]);
  useEffect(() => {
    console.log("secondValue is: " + secondValue);
  }, [secondValue]);
  useEffect(() => {
    console.log("result is: " + result);
  }, [result]);

  // handle clicking on number
  const handleNumberClick = (number) => {
    if (currentlyFirstValue === true) {
      addToFirstValue(number);
    } else if (currentlyFirstValue === false && result === null) {
      setActionButtonJustClicked((prevState) => false);
      addToSecondValue(number);
    } else if (currentlyFirstValue === false && result !== null) {
      setSecondValue("");
      addToSecondValue(number);
    }
  };
  const addToFirstValue = (number) => {
    const numberAsString = number.toString();
    if (firstValue === "0") {
      setFirstValue((prevState) => numberAsString);
    } else {
      setFirstValue((prevState) => prevState + numberAsString);
    }
    valueToShowCurrently("first");
  };
  const addToSecondValue = (number) => {
    const numberAsString = number.toString();
    setSecondValue((prevState) => prevState + numberAsString);
    valueToShowCurrently("second");
  };

  // handle AC All Clear
  const clearAll = () => {
    setFirstValue("0");
    setActionButtonSelected(null);
    setActionButtonJustClicked(false);
    setSecondValue("");
    setCurrentlyFirstValue(true);
    setResult(null);
  };

  // handle clicking on action buttons
  const setupActionButton = (sign) => {
    setActionButtonSelected((prevState) => sign);
    setCurrentlyFirstValue((prevState) => false);
    setActionButtonJustClicked((prevState) => true);
  };

  // handle equation sign
  const getResult = () => {
    const firstValueToInt = parseFloat(firstValue);
    const secondValueToInt = parseFloat(secondValue);
    if (firstValue === "0" || secondValue === null) return;

    //Repeat the calculation with previous value if result is already present
    if (result !== null) {
      if (actionButtonSelected === "+") {
        setResult(result + secondValueToInt);
      }

      if (actionButtonSelected === "-") {
        setResult(result - secondValueToInt);
      }
      if (actionButtonSelected === "×") {
        setResult(result * secondValueToInt);
      }
      if (actionButtonSelected === "÷") {
        setResult(result / secondValueToInt);
      }
      //IF there is no "result" currently, perform the operation on first and second value states.
    } else if (result === null) {
      if (actionButtonSelected === "+") {
        setResult(firstValueToInt + secondValueToInt);
      }
      if (actionButtonSelected === "-") {
        setResult(firstValueToInt - secondValueToInt);
      }
      if (actionButtonSelected === "×") {
        setResult(firstValueToInt * secondValueToInt);
      }
      if (actionButtonSelected === "÷") {
        setResult(firstValueToInt / secondValueToInt);
      }
    }
    valueToShowCurrently("result");
  };
  const valueToShowCurrently = () => {
    if (secondValue !== "" && result === null) return secondValue;
    if (secondValue === "" && result === null) return firstValue;

    if (result !== null) return result;
  };
  // Handle calculating percentages of the currently displayed value
  const calculatePercentage = () => {
    const currentValue = valueToShowCurrently();
    if (currentValue === firstValue) {
      setFirstValue((prevState) => currentValue * 0.01);
    }
    if (currentValue === secondValue) {
      setSecondValue((prevState) => currentValue * 0.01);
    }
    if (currentValue === result) {
      setResult((prevState) => currentValue * 0.01);
    }
  };

  // Handle changing the + - signs
  const changeSignOfCurrentValue = () => {
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
      if (currentValue.charAt(0) !== "-") {
        setResult((prevState) => "-" + prevState);
      } else if (currentValue.charAt(0) === "-") {
        setResult((prevState) => prevState.replace("-", ""));
      }
    }
  };

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
};;;;;;;;;;;;
