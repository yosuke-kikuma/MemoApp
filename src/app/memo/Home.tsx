import { StyleSheet, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useRouter, useNavigation } from "expo-router";
import LogOutButton from "../../../components/LogOutButton";
import MemoList from "../../../components/MemoList";
import CreateCircleButton from "../../../components/CreateCircleButton";
import { auth, db } from "../../firebaseConfig"; // Firebaseのauthとdbインスタンスをインポート
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { Memo } from "../../../types/memo"; // Memo型をインポート
export default function Home() {
  const [memos, setMemos] = useState<Memo[]>([]);
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    if (!auth.currentUser) {
      console.error("ユーザーが認証されていません。");
      return;
    }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
    const q = query(ref, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const memoList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Memo[]; // 型アサーションを使用してMemo型に変換
      console.log(memoList);
      setMemos(memoList);
    });
    // クリーンアップ関数
    return () => unsubscribe();
  }, []);

  const handlePress = () => {
    router.push("./MemoCreate");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={({ item }) => <MemoList memo={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }} // スクロール可能な領域を確保
      />
      <CreateCircleButton onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
