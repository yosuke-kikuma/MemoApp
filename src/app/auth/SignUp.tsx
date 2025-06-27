import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../../../components/Header";
import Button from "../../../components/Button";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Sign up</Text>
        <TextInput
          style={{
            margin: 10,
            paddingLeft: 8,
            height: 48,
            borderColor: "gray",
            borderWidth: 1,
            fontSize: 16,
          }}
          placeholder="Email"
          value="Email Address"
          keyboardType="email-address"
        />
        <TextInput
          style={{
            margin: 10,
            paddingLeft: 8,
            height: 48,
            borderColor: "gray",
            borderWidth: 1,
            fontSize: 16,
          }}
          placeholder="Password"
          value="Password"
          secureTextEntry
        />
        <Button />
        <View style={styles.description}>
          <Text style={styles.descriptionText}>Already Registered?</Text>
          <Text style={styles.descriptionLink}>log in</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#F0F4F8",
  },
  mainContainer: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 27,
    backgroundColor: "#F0F4F8",
  },
  title: {
    marginVertical: 20,
    marginLeft: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    flexDirection: "row",
    margin: 10,
    paddingVertical: 8,
  },
  descriptionText: {
    fontSize: 14,
  },
  descriptionLink: {
    marginLeft: 8,
    fontSize: 14,
    color: "#4F98D8",
  },
});
