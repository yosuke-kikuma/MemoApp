import {
  SafeAreaView,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import CheckCircleButton from "../../../components/CheckCircleButton";
import { db, auth } from "../../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function MemoCreate() {
  const [text, setText] = useState("");
  const router = useRouter();

  const handlePress = async () => {
    try {
      if (!auth.currentUser) {
        console.error("ユーザーが認証されていません。");
        return;
      }
      const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
      await addDoc(ref, {
        content: text,
        createdAt: serverTimestamp(),
      });
      router.push("./Home");
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
            onChangeText={(e) => setText(e)}
            value={text}
            multiline
            autoFocus
            placeholder="メモを入力してください..."
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
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",
    textAlignVertical: "top",
  },
});
