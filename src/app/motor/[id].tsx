import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { motors } from "../../constants/data";
import { colors, styles } from "../../constants/styles";

// ===================================================================
// HALAMAN DETAIL MOTOR (route dinamis: "/motor/1", "/motor/2", ...)
// Nama file [id].tsx = bagian [id] bisa diisi nilai apa saja.
// ===================================================================
export default function MotorDetail() {
    const router = useRouter();

    // Mengambil nilai id dari URL (misal "/motor/1" -> id = "1")
    const { id } = useLocalSearchParams<{ id: string }>();

    // Mencari data motor yang id-nya sama dengan id dari URL
    const motor = motors.find((item) => item.id === id);

    // [KRITERIA 1] useState: pengingat bisa dinyalakan atau dimatikan
    const [isReminderOn, setIsReminderOn] = useState<boolean>(false);

    // [KRITERIA 2] canGoBack() + back() + replace()
    // Jika ada halaman sebelumnya -> kembali.
    // Jika tidak ada (misalnya halaman dibuka langsung dari URL) -> ke Beranda.
    const handleBack = () => {
        if (router.canGoBack()) {
            router.back();
        } else {
            router.replace("/");
        }
    };

    // Jika id tidak ditemukan di data
    if (!motor) {
        return (
            <SafeAreaView style={styles.safeArea} edges={["left", "right", "bottom"]}>
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>Motor tidak ditemukan</Text>
                    <Pressable style={styles.secondaryButton} onPress={handleBack}>
                        <Text style={styles.secondaryButtonText}>Kembali</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        );
    }

    // Daftar baris informasi (array of objects) untuk ditampilkan dengan .map()
    const infoRows = [
        { label: "Plat nomor", value: motor.plate },
        { label: "Lokasi", value: motor.location },
        { label: "Status", value: motor.status },
        { label: "Jam masuk", value: motor.since ? motor.since : "-" },
    ];

    return (
        <SafeAreaView style={styles.safeArea} edges={["left", "right", "bottom"]}>
            <View style={styles.content}>
                <View style={styles.detailHeader}>
                    <View style={styles.detailIcon}>
                        <MaterialCommunityIcons
                            name="motorbike"
                            size={40}
                            color={colors.primary}
                        />
                    </View>
                    <Text style={styles.detailName}>{motor.name}</Text>
                </View>

                <View style={styles.detailCard}>
                    {infoRows.map((row) => (
                        <View key={row.label} style={styles.infoRow}>
                            <Text style={styles.infoLabel}>{row.label}</Text>
                            <Text style={styles.infoValue}>{row.value}</Text>
                        </View>
                    ))}
                </View>

                {/* Tombol mengubah state -> teks dan warna ikut berubah */}
                <Pressable
                    style={isReminderOn ? styles.primaryButton : styles.secondaryButton}
                    onPress={() => setIsReminderOn(!isReminderOn)}
                >
                    <Text
                        style={
                            isReminderOn ? styles.primaryButtonText : styles.secondaryButtonText
                        }
                    >
                        {isReminderOn ? "Pengingat: Aktif" : "Pengingat: Mati"}
                    </Text>
                </Pressable>

                <Pressable style={styles.linkButton} onPress={handleBack}>
                    <Text style={styles.linkButtonText}>Kembali</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}