import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { ServicePackage } from "../constants/data";
import { packages } from "../constants/data";
import { colors, styles } from "../constants/styles";

// ===================================================================
// HALAMAN TITIP SEKARANG (route: "/titip")
// ===================================================================
export default function Titip() {
    const router = useRouter();

    // ===== [KRITERIA 1] useState =====
    const [selectedId, setSelectedId] = useState<string>("2");
    // summary = teks ringkasan pilihan
    const [summary, setSummary] = useState<string>("");

    // ===== [KRITERIA 1] useEffect =====
    // Dependency [selectedId] = dijalankan setiap kali selectedId berubah.
    // Alurnya: tekan paket -> selectedId berubah -> layar render ulang
    //          -> useEffect jalan -> summary diperbarui.
    useEffect(() => {
        const selected = packages.find((item) => item.id === selectedId);
        if (selected) {
            setSummary(`${selected.name} - ${selected.price}`);
        }
    }, [selectedId]);

    // [KRITERIA 2] canGoBack() + back() + replace() (sama seperti halaman detail)
    const handleBack = () => {
        if (router.canGoBack()) {
            router.back();
        } else {
            router.replace("/");
        }
    };

    // Membuat 1 pilihan paket dari 1 data paket
    const renderPackageOption = (item: ServicePackage) => {
        const isSelected = item.id === selectedId;
        return (
            <Pressable
                key={item.id}
                onPress={() => setSelectedId(item.id)}
                // INLINE STYLE: tampilan berubah jika paket sedang dipilih
                style={[
                    styles.packageCard,
                    isSelected && {
                        borderColor: colors.primary,
                        borderWidth: 2,
                        backgroundColor: colors.primarySoft,
                    },
                ]}
            >
                <View style={styles.optionRow}>
                    <Ionicons
                        name={isSelected ? "radio-button-on" : "radio-button-off"}
                        size={22}
                        color={colors.primary}
                    />
                    <View style={styles.optionInfo}>
                        <Text style={styles.packageName}>{item.name}</Text>
                        <Text style={styles.packageDesc}>{item.description}</Text>
                    </View>
                    <Text style={styles.packagePrice}>{item.price}</Text>
                </View>
            </Pressable>
        );
    };

    return (
        <SafeAreaView style={styles.safeArea} edges={["left", "right", "bottom"]}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.sectionTitle}>Pilih paket penitipan</Text>
                {packages.map(renderPackageOption)}

                {/* Ringkasan: isinya berasal dari state summary */}
                <View style={styles.summaryBox}>
                    <Text style={styles.summaryLabel}>Pilihan kamu</Text>
                    <Text style={styles.summaryValue}>{summary}</Text>
                </View>

                <Pressable style={styles.primaryButton} onPress={handleBack}>
                    <Text style={styles.primaryButtonText}>Konfirmasi Titip</Text>
                </Pressable>

                {/* [KRITERIA 2] router.back() langsung */}
                <Pressable style={styles.linkButton} onPress={() => router.back()}>
                    <Text style={styles.linkButtonText}>Batal</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}