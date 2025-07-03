import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function LogOutButton() {
  return (
    <TouchableOpacity >
      <Text style={styles.Text}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 12,
    lineHeight: 24,
    color: "#ffffff",
  },
});
