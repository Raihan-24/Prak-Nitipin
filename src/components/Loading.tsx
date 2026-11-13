import { ActivityIndicator, Text, View } from "react-native";
import { colors, styles } from "../constants/styles";

// Props: data yang dikirim dari halaman ke komponen ini
interface LoadingProps {
  message?: string;
}

export default function Loading({ message = "Memuat data..." }: LoadingProps) {
  return (
    <View style={styles.centerBox}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.centerText}>{message}</Text>
    </View>
  );
}
