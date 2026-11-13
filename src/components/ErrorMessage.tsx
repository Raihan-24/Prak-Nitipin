import { Pressable, Text, View } from "react-native";
import { styles } from "../constants/styles";

interface ErrorMessageProps {
  message: string;
  onRetry: () => void; // fungsi yang dijalankan saat tombol Coba lagi ditekan
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <View style={styles.errorBox}>
      <Text style={styles.errorTitle}>Gagal memuat data</Text>
      <Text style={styles.errorText}>{message}</Text>
      <Pressable
        style={[styles.primaryButton, { marginTop: 16, paddingHorizontal: 24 }]}
        onPress={onRetry}
      >
        <Text style={styles.primaryButtonText}>Coba lagi</Text>
      </Pressable>
    </View>
  );
}
