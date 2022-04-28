import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { COLORS, SIZES } from "./consts";
import CalculatorScreen from "./CalculatorScreen";
import { CalculationsContextProvider } from "./src/context/CalculationsContext";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
export default function App() {
  return (
    <CalculationsContextProvider>
      <View style={styles.container}>
        <CalculatorScreen />
      </View>
    </CalculationsContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    backgroundColor: COLORS.black,
    alignItems: "center",
  },
});
