import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  SafeAreaView,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import CheckCircleButton from "../../../components/CheckCircleButton";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

export default function MemoEdit() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [memo, setMemo] = useState("");

  useEffect(() => {
    const fetchMemo = async () => {
      try {
        if (auth.currentUser && id) {
          const ref = doc(
            db,
            `users/${auth.currentUser.uid}/memos`,
            id as string
          );
          const docSnap = await getDoc(ref);
          if (docSnap.exists()) {
            setMemo(docSnap.data().content);
          } else {
            console.error("No such document!");
          }
        }
      } catch (error) {
        console.error("Error fetching memo:", error);
      }
    };
    fetchMemo();
  }, []);

  const handlePress = async () => {
    try {
      if (!auth.currentUser || !id) {
        console.error("ユーザーが認証されていません。");
        return;
      }
      const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id as string);
      await setDoc(
        ref,
        {
          content: memo,
          updateAt: serverTimestamp(),
        },
        { merge: true }
      ); // mergeオプションを使用して部分更新
      router.back();
    } catch (error) {
      console.error("メモの作成中に予期しないエラーが発生しました:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 64}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            value={memo}
            onChangeText={(e) => setMemo(e)}
            multiline
            autoFocus
          />
        </View>
        <View>
          <CheckCircleButton onPress={handlePress} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  keyboardView: {
    flex: 1,
    justifyContent: "space-between",
  },
  inputContainer: {
    flex: 1,
  },
  inputText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
});
