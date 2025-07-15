import { Redirect } from "expo-router";
import { auth } from "../firebaseConfig"; // Import the auth instance
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function Index() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // クリーンアップ関数
    return () => unsubscribe();
  }, []);

  // ローディング中
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // 認証状態に基づくリダイレクト
  if (user) {
    return <Redirect href="./memo/Home" />;
  } else {
    return <Redirect href="./auth/Login" />;
  }
}
