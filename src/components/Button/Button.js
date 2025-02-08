import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import theme from "../../theme";

const Button = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.medium,
    alignItems: "center",
  },
  text: {
    color: theme.colors.background,
    fontSize: theme.typography.fontSize.medium,
    fontWeight: "600",
  },
});

export default Button;
