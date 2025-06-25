import { StyleSheet, Text, View } from "react-native";

export default function EditCircleButton() {
  return (
    <View style={styles.createMemoButtonContainer}>
      <Text style={styles.createMemoButton}>+</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  createMemoButtonContainer: {
    position: "absolute",
    top: 160,
    right: 40,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#4F98D8",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 8,
  },
  createMemoButton: {
    flex: 1,
    fontSize: 36,
    color: "#ffffff",
  },
});
