import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1C1018",
        },
        headerTintColor: "#DFF8EB",
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="agendamento" options={{ title: "Agendamento" }} />
    </Stack>
  );
}
