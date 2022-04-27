import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { COLORS, SIZES } from "./consts";
import CalculatorScreen from "./CalculatorScreen";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
export default function App() {
  return (
    <View style={styles.container}>
      <CalculatorScreen />
    </View>
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
