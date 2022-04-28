import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../consts";

const OrangeButton = ({ text, onPress, isSelected }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View
        style={[
          styles.container,
          { backgroundColor: isSelected ? COLORS.white : COLORS.orange },
        ]}
      >
        <Text
          style={[
            styles.textInside,
            { color: isSelected ? COLORS.orange : COLORS.white },
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
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
    fontSize: 40,
    fontWeight: "500",
  },
});
