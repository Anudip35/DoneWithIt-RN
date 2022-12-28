import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 7,
    margin: 5,
    width: 102,
    //height: 20,
  },
  text: {
    color: colors.white,
    fontSize: 13,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
