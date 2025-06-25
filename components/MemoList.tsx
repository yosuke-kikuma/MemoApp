import { StyleSheet, Text, View } from "react-native";

export default function MemoList() {
  return (
    <View>
      <View style={styles.listContainer}>
        <View>
          <Text style={styles.listItemTitle}>買い物リスト</Text>
          <Text style={styles.listItemDate}>2022年6月7日 11:00</Text>
        </View>
        <View>
          <Text style={styles.listDeleteButton}>x</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#ffffff",
  },
  listItemTitle: {
    marginLeft: 16,
    fontSize: 16,
    color: "#333333",
  },
  listItemDate: {
    marginLeft: 16,
    fontSize: 12,
    color: "#666666",
  },
  listDeleteButton: {
    marginRight: 16,
    fontSize: 30,
    color: "#ff0000",
  },
});
