import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, styles } from "../constants/styles";
import { motors, packages, quickActions } from "../constants/data";
import type { Motor, QuickAction, ServicePackage } from "../constants/data";

// ===================================================================
// HALAMAN BERANDA (route: "/")
// ===================================================================
export default function Index() {
  // router = object dari expo-router untuk berpindah halaman
  const router = useRouter();

  // ===== [KRITERIA 1] useState =====
  // greeting = nilai sekarang, setGreeting = fungsi untuk mengubahnya.
  // Setiap setGreeting dipanggil, layar otomatis di-render ulang.
  const [greeting, setGreeting] = useState<string>("Selamat datang");

  // ===== [KRITERIA 1] useEffect =====
  // Dependency [] kosong = dijalankan SEKALI saat halaman pertama kali tampil.
  // Di sini dipakai untuk mengatur sapaan sesuai jam.
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 11) {
      setGreeting("Selamat pagi");
    } else if (hour < 15) {
      setGreeting("Selamat siang");
    } else if (hour < 18) {
      setGreeting("Selamat sore");
    } else {
      setGreeting("Selamat malam");
    }
  }, []);

  // ===== CUSTOM FUNCTION =====
  // Dipanggil saat tombol aksi cepat ditekan
  const handleQuickAction = (action: QuickAction) => {
    if (action.label === "Titip Sekarang") {
      // [KRITERIA 2] router.push() = buka halaman baru di atas tumpukan
      router.push("/titip");
    }
  };

  // Membuat 1 kartu motor dari 1 data motor
  const renderMotorCard = (motor: Motor) => {
    return (
      <Pressable
        key={motor.id}
        style={styles.motorCard}
        // [KRITERIA 2] router.push() dengan parameter dinamis (id motor)
        // Hasilnya membuka file app/motor/[id].tsx
        onPress={() =>
          router.push({ pathname: "/motor/[id]", params: { id: motor.id } })
        }
      >
        <View style={styles.motorIcon}>
          <MaterialCommunityIcons
            name="motorbike"
            size={26}
            color={colors.primary}
          />
        </View>
        <View style={styles.motorInfo}>
          <Text style={styles.motorName}>{motor.name}</Text>
          <Text style={styles.motorDetail}>
            {motor.plate} - {motor.location}
          </Text>
        </View>
        {/* INLINE STYLE: warna titik bergantung pada status motor */}
        <View
          style={[
            styles.statusDot,
            { backgroundColor: motor.status === "dititip" ? "green" : "gray" },
          ]}
        />
      </Pressable>
    );
  };

  // Membuat 1 tombol aksi cepat dari 1 data aksi
  const renderQuickAction = (action: QuickAction) => {
    return (
      <Pressable
        key={action.id}
        style={styles.actionButton}
        onPress={() => handleQuickAction(action)}
      >
        <Ionicons name={action.icon} size={28} color={colors.primary} />
        <Text style={styles.actionLabel}>{action.label}</Text>
      </Pressable>
    );
  };

  // Membuat 1 kartu paket dari 1 data paket
  const renderPackageCard = (item: ServicePackage) => {
    return (
      <View
        key={item.id}
        style={[styles.packageCard, item.popular && styles.packageCardPopular]}
      >
        {item.popular && <Text style={styles.popularTag}>Paling dipilih</Text>}
        <View style={styles.packageHeader}>
          <Text style={styles.packageName}>{item.name}</Text>
          <Text style={styles.packagePrice}>{item.price}</Text>
        </View>
        <Text style={styles.packageDesc}>{item.description}</Text>
      </View>
    );
  };

  return (
    // edges tanpa "top" karena header Stack sudah mengatur jarak atas
    <SafeAreaView style={styles.safeArea} edges={["left", "right", "bottom"]}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header sapaan: teks greeting berasal dari state */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>{greeting}</Text>
            <Text style={styles.userName}>Halo, Raihan</Text>
          </View>
          <View style={styles.avatar}>
            <Ionicons name="person" size={22} color={colors.primary} />
          </View>
        </View>

        {/* Status penitipan aktif (data statis) */}
        <View style={styles.statusCard}>
          <View style={styles.statusTop}>
            <Text style={styles.statusTitle}>Penitipan aktif</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusBadgeText}>Aman</Text>
            </View>
          </View>
          <Text style={styles.statusPlate}>N 1234 AB</Text>
          <Text style={styles.statusLocation}>
            Pos Parkir Stasiun Malang, masuk 08.15
          </Text>
        </View>

        {/* Loop .map(): 1 data motor menjadi 1 kartu */}
        <Text style={styles.sectionTitle}>Motor saya</Text>
        {motors.map(renderMotorCard)}

        {/* Aksi cepat */}
        <View style={styles.actionRow}>{quickActions.map(renderQuickAction)}</View>

        {/* Paket layanan */}
        <Text style={styles.sectionTitle}>Paket layanan</Text>
        {packages.map(renderPackageCard)}

        <Text style={styles.tambahan}>Muhamad Raihan Naja - 202410370110504</Text>
      </ScrollView>
    </SafeAreaView>
  );
}