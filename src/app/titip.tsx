import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { ServicePackage } from "../constants/data";
import { packages } from "../constants/data";
import { colors, styles } from "../constants/styles";

// HALAMAN TITIP SEKARANG (route: "/titip")
export default function Titip() {
    const router = useRouter();
    const [selectedId, setSelectedId] = useState<string>("2");
    const [summary, setSummary] = useState<string>("");

    useEffect(() => {
        const selected = packages.find((item) => item.id === selectedId);
        if (selected) {
            setSummary(`${selected.name} - ${selected.price}`);
        }
    }, [selectedId]);

    const handleBack = () => {
        if (router.canGoBack()) {
            router.back();
        } else {
            router.replace("/");
        }
    };

    const renderPackageOption = (item: ServicePackage) => {
        const isSelected = item.id === selectedId;
        return (
            <Pressable
                key={item.id}
                onPress={() => setSelectedId(item.id)}
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

                <View style={styles.summaryBox}>
                    <Text style={styles.summaryLabel}>Pilihan kamu</Text>
                    <Text style={styles.summaryValue}>{summary}</Text>
                </View>

                <Pressable style={styles.primaryButton} onPress={handleBack}>
                    <Text style={styles.primaryButtonText}>Konfirmasi Titip</Text>
                </Pressable>

                <Pressable style={styles.linkButton} onPress={() => router.back()}>
                    <Text style={styles.linkButtonText}>Batal</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}