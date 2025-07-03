import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#4F98D8",
        },
        headerTitle: "Memo App",
        headerTintColor: "#ffffff",
        headerBackTitle: "Back",
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="memo/MemoCreate" />
      <Stack.Screen name="memo/MemoDetail" />
      <Stack.Screen name="memo/MemoEdit" />
      <Stack.Screen name="memo/Home" />
    </Stack>
  );
}
