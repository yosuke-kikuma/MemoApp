import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Link } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { auth, db } from "../src/firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";
import { Memo } from "../types/memo"; // Assuming you have a Memo type defined

export default function MemoList({ memo }: { memo: Memo }) {
  const dateString = memo.createdAt
    ? memo.createdAt.toDate().toLocaleDateString("ja-JP")
    : "日付不明";

  const handlePress = () => {
    if (!auth.currentUser) {
      console.error("ユーザーが認証されていません。");
      Alert.alert("エラー", "ユーザーが認証されていません。");
      return;
    }

    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, memo.id);

    Alert.alert("メモの削除", "このメモを削除しますか？", [
      {
        text: "キャンセル",
        style: "cancel",
      },
      {
        text: "削除",
        style: "destructive",
        onPress: async () => {
          try {
            await deleteDoc(ref);
            console.log("メモが正常に削除されました");
          } catch (error) {
            console.error("メモの削除中にエラーが発生しました:", error);
            Alert.alert(
              "エラー",
              "メモの削除に失敗しました。もう一度お試しください。"
            );
          }
        },
      },
    ]);
  };

  return (
    <Link
      href={{
        pathname: "./MemoDetail",
        params: { id: memo.id }, // ✅ 正しい：IDを渡している
      }}
      asChild
    >
      {/* タッチ可能なコンテナ */}
      <TouchableOpacity style={styles.listContainer}>
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={styles.listItemTitle}>
            {memo.content}
          </Text>
          <Text style={styles.listItemDate}>{dateString}</Text>
        </View>
        <TouchableOpacity onPress={handlePress}>
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
