import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button/Button";
import theme from "../../theme";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Home</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.typography.fontSize.large,
    color: theme.colors.text,
    marginBottom: theme.spacing.lg,
  },
});

export default HomeScreen;
