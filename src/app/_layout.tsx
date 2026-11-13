import { Stack } from "expo-router";
import { colors } from "../constants/styles";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: { fontWeight: "bold" },
        headerShadowVisible: false,
        headerTransparent: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "NITIPIN" }} />
      <Stack.Screen name="motor/[id]" options={{ title: "Detail Motor" }} />
      <Stack.Screen name="titip" options={{ title: "Titip Sekarang" }} />
      <Stack.Screen name="pengelola" options={{ title: "Pengelola Parkir" }} />
    </Stack>
  );
}
