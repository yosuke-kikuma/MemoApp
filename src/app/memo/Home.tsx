import { StyleSheet, View } from "react-native";
import Header from "../../../components/Header";
import MemoList from "../../../components/MemoList";
import CreateCircleButton from "../../../components/CreateCircleButton";
export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <MemoList />
      <MemoList />
      <MemoList />
      <CreateCircleButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
