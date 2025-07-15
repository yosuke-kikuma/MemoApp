import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import Button from "../../../components/Button";
import { auth } from "../../firebaseConfig"; // Import the auth instance
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User created:", user);
      router.replace("./Login");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating user:", errorCode, errorMessage);
    }
  };

  return (
    <View style={styles.container}>
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
          onChangeText={(e) => setEmail(e)}
          value={email}
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
          onChangeText={(e) => setPassword(e)}
          value={password}
          secureTextEntry
        />
        <Button onPress={handleSubmit} />
        <View style={styles.description}>
          <Text style={styles.descriptionText}>Already Registered?</Text>
          <Link href="./Login" asChild replace>
            <TouchableOpacity>
              <Text style={styles.descriptionLink}>log in here</Text>
            </TouchableOpacity>
          </Link>
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
