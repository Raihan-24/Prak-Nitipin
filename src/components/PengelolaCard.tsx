import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { colors, styles } from "../constants/styles";
import type { Pengelola } from "../types/pengelola";

interface PengelolaCardProps {
  pengelola: Pengelola;
}

export default function PengelolaCard({ pengelola }: PengelolaCardProps) {
  return (
    <View style={styles.motorCard}>
      <View style={styles.motorIcon}>
        <Ionicons name="business" size={24} color={colors.primary} />
      </View>
      <View style={styles.motorInfo}>
        <Text style={styles.motorName}>{pengelola.company.name}</Text>
        <Text style={styles.motorDetail}>Pengelola: {pengelola.name}</Text>
        <Text style={styles.motorDetail}>Kota: {pengelola.address.city}</Text>
        <Text style={styles.motorDetail}>Telp: {pengelola.phone}</Text>
      </View>
    </View>
  );
}
