import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";

export const CalculationsContext = createContext();
export const CalculationsContextProvider = ({ children }) => {
  const [firstValue, setFirstValue] = useState("0");
  const [actionButtonSelected, setActionButtonSelected] = useState(null);
  const [actionButtonJustClicked, setActionButtonJustClicked] = useState(false);
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState("");

  const addToFirstValue = (number) => {
    const numberAsString = number.toString();
    console.log(number);
    if (firstValue === "0") {
      setFirstValue((prevState) => numberAsString);
    } else {
      setFirstValue((prevState) => [...prevState, numberAsString]);
    }
  };

  const clearAll = () => {
    setFirstValue("0");
    setActionButtonSelected(null);
    setActionButtonJustClicked(false);
    setSecondValue("");
  };

  const setupActionButton = (sign) => {
    setActionButtonSelected((prevState) => sign);
    setActionButtonJustClicked(true);
  };
  return (
    <CalculationsContext.Provider
      value={{
        firstValue,
        actionButtonSelected,
        actionButtonJustClicked,
        secondValue,
        result,
        addToFirstValue,
        clearAll,
        setupActionButton,
      }}
    >
      {children}
    </CalculationsContext.Provider>
  );
};
