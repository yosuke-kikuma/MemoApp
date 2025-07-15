import { StyleSheet, ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import EditCircleButton from "../../../components/EditCircleButton";
import { auth, db } from "../../firebaseConfig"; // Firebaseのauthとdbインスタンスをインポート
import { onSnapshot, doc } from "firebase/firestore";
import { Memo } from "../../../types/memo"; // Assuming you have a Memo type defined

export default function MemoDetail() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [memo, setMemo] = useState<Memo | null>(null);

  console.log(id);

  useEffect(() => {
    if (auth.currentUser) {
      const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id as string);
      const unsubscribe = onSnapshot(ref, (doc) => {
        if (doc.exists()) {
          setMemo({ id: doc.id, ...doc.data() } as Memo);
        } else {
          console.error("No such document!");
        }
      });
      return () => unsubscribe();
    }
  }, []);

  const handlePress = () => {
    router.push({
      pathname: "./MemoEdit",
      params: { id: memo?.id }, // ✅ 正しい：IDを渡している
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.listItemContainer}>
        <Text style={styles.listItemTitle} numberOfLines={1}>
          {memo?.content}
        </Text>
        <Text style={styles.listItemDate}>
          {memo?.createdAt?.toDate().toLocaleDateString("ja-JP")}
        </Text>
      </View>
      <ScrollView style={styles.memoContainer}>
        <Text style={styles.memoText}>{memo?.content}</Text>
      </ScrollView>
      <EditCircleButton onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItemContainer: {
    justifyContent: "center",
    height: 104,
    backgroundColor: "#4F98D8",
  },
  listItemTitle: {
    marginLeft: 16,
    fontSize: 16,
    color: "#ffffff",
  },
  listItemDate: {
    marginLeft: 16,
    fontSize: 12,
    color: "#ffffff",
  },
  memoContainer: {
    paddingHorizontal: 27,
  },
  memoText: {
    paddingVertical: 32,
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",
  },
});
