import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";

export const CalculationsContext = createContext();
export const CalculationsContextProvider = ({ children }) => {
  const [firstValue, setFirstValue] = useState("0");
  const [actionButtonSelected, setActionButtonSelected] = useState(null);
  const [actionButtonJustClicked, setActionButtonJustClicked] = useState(false);
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState(null);
  const [currentlyFirstValue, setCurrentlyFirstValue] = useState(true);

  // handle clicking on number
  const handleNumberClick = (number) => {
    if (currentlyFirstValue === true) {
      addToFirstValue(number);
    } else if (currentlyFirstValue === false) {
      setActionButtonJustClicked((prevState) => false);
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
  };
  const addToSecondValue = (number) => {
    const numberAsString = number.toString();
    setSecondValue((prevState) => prevState + numberAsString);
  };
  // handle clear
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
  };
  const valueToShowCurrently = () => {
    if (secondValue !== "" && result === null) return secondValue;
    if (secondValue === "" && result === null) return firstValue;
    if (result !== null) return result;
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
      }}
    >
      {children}
    </CalculationsContext.Provider>
  );
};;;;;;;;;
