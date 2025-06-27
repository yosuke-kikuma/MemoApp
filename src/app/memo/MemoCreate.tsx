
import { StyleSheet, View, KeyboardAvoidingView, TextInput } from "react-native";
import Header from "../../../components/Header";
import CheckCircleButton from "../../../components/CheckCircleButton";

export default function MemoCreate() {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText} value="" multiline />
      </View>
      <CheckCircleButton />
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
