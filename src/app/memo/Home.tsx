import { StyleSheet, View } from "react-native";
import { useEffect } from "react";
import { useRouter, useNavigation } from "expo-router";
import LogOutButton from "../../../components/LogOutButton";
import MemoList from "../../../components/MemoList";
import CreateCircleButton from "../../../components/CreateCircleButton";
export default function Home() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  const handlePress = () => {
    router.push("./MemoCreate");
  };

  return (
    <View style={styles.container}>
      <MemoList />
      <MemoList />
      <MemoList />
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
