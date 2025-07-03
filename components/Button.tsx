import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Button({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.submit}>
      <Text style={styles.submitText}>submit</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  submit: {
    margin: 10,
    paddingVertical: 8,
    width: 100,
    borderRadius: 4,
    backgroundColor: "#4F98D8",
  },
  submitText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 32,
    color: "#ffffff",
    textAlign: "center",
  },
});
