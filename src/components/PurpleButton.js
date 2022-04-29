import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../consts";

const PurpleButton = ({ text, onPress, isSelected }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View
        style={[
          styles.container,
          { backgroundColor: isSelected ? COLORS.white : COLORS.purple },
        ]}
      >
        <Text
          style={[
            styles.textInside,
            { color: isSelected ? COLORS.purple : COLORS.white },
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PurpleButton;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: COLORS.purple,
    alignItems: "center",
    justifyContent: "center",
  },
  textInside: {
    fontSize: 40,
    fontWeight: "500",
  },
});
