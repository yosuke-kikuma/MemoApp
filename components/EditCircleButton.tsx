import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
  onPress?: () => void;
};
export default function EditCircleButton({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Container}>
      <Feather name="edit" size={40} color="#ffffff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    position: "absolute",
    top: 60,
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
