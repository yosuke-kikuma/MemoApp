import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function MemoList() {
  return (
    <Link href="./MemoDetail" asChild>
      <TouchableOpacity style={styles.listContainer}>
        <View>
          <Text style={styles.listItemTitle}>買い物リスト</Text>
          <Text style={styles.listItemDate}>2022年6月7日 11:00</Text>
        </View>
        <TouchableOpacity>
          <Feather
            style={styles.listDeleteButton}
            name="delete"
            size={32}
            color="#B0B0B0"
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
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
  },
});
