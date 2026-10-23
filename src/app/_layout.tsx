import { Stack } from "expo-router";
import { colors } from "../constants/styles";

// ===================================================================
// [KRITERIA 3] _layout.tsx dan <Stack.Screen>
// _layout.tsx = pembungkus semua halaman di folder app/.
// <Stack> = navigator bertumpuk: halaman baru muncul di atas halaman lama.
// <Stack.Screen name="..."> = pengaturan satu halaman.
//   name  = nama file halaman (tanpa .tsx)
//   options.title = judul yang tampil di header
// ===================================================================
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: { fontWeight: "bold" },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "NITIPIN" }} />
      <Stack.Screen name="motor/[id]" options={{ title: "Detail Motor" }} />
      <Stack.Screen name="titip" options={{ title: "Titip Sekarang" }} />
    </Stack>
  );
}