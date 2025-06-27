import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function CheckCircleButton() {
  return (
    <View style={styles.Container}>
      <Feather name="check" size={40} color="#ffffff" />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    position: "absolute",
    bottom: 40,
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
});
