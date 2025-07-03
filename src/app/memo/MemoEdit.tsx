import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import CheckCircleButton from "../../../components/CheckCircleButton";

export default function MemoEdit() {
  const router = useRouter();

  const handlePress = () => {
    router.push("./Home");
  };
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText} value="買い物リスト" multiline />
      </View>
      <CheckCircleButton onPress={handlePress} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  inputText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",
  },
});
