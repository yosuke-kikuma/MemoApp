import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { auth } from "../src/firebaseConfig"; // Firebaseのauthインスタンスをインポー
import { signOut } from "firebase/auth";

export default function LogOutButton() {
  const router = useRouter();

  const handlePress = async () => {
    try {
      await signOut(auth);
      router.replace("../auth/Login"); // ログアウト後にログイン画面へ遷移
    } catch (error) {
      console.error("ログアウトエラー:", error);
      // 実際のアプリではユーザーにエラーメッセージを表示すべき
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
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
