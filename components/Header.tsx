import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>MemoApp</Text>
        <Text style={styles.headerLogout}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4F98D8",
    height: 104,
    justifyContent: "flex-end",
  },
  headerContainer: {
    alignItems: "center",
    position: "relative",
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "bold",
  },
  headerLogout: {
    position: "absolute",
    right: 16,
    bottom: 16,
    color: "#ffffff",
    opacity: 0.8,
  },
});
