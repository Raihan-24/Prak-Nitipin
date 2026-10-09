import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, styles } from "../constants/styles";

/*
  RINGKASAN KRITERIA PENILAIAN (Demo Modul 1)
  1. Custom Function & Loop  -> renderMotorCard, renderPackageCard, renderQuickAction + .map()
  2. Type & Array of Objects -> interface Motor, ServicePackage, QuickAction + array motors, packages, quickActions
  3. Inline & External Styles -> External: ../constants/styles.ts | Inline: titik status di renderMotorCard
*/

// [KRITERIA 2] TYPE & INTERFACE
// Interface = cetakan/bentuk sebuah objek (properti apa saja yang wajib ada)

// Union type: status hanya boleh salah satu dari dua nilai ini
type MotorStatus = "dititip" | "diambil";

interface Motor {
  readonly id: string; // readonly = tidak bisa diubah setelah dibuat
  plate: string;
  name: string;
  location: string;
  status: MotorStatus;
}

interface ServicePackage {
  readonly id: string;
  name: string;
  price: string;
  description: string;
  popular?: boolean; // tanda "?" = opsional, boleh tidak diisi
}

interface QuickAction {
  readonly id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap; // nama ikon yang valid dari Ionicons
}

// ===================================================================
// [KRITERIA 2] ARRAY OF OBJECTS
// [ ... ] = array (daftar), { ... } = object (satu data)
// Tipe Motor[] artinya: array yang isinya harus mengikuti interface Motor
// ===================================================================
const motors: Motor[] = [
  {
    id: "1",
    plate: "N 1234 AB",
    name: "Honda Beat",
    location: "Pos Parkir Stasiun Malang",
    status: "dititip",
  },
  {
    id: "2",
    plate: "N 5678 CD",
    name: "Yamaha NMAX",
    location: "Pos Parkir Kampus UMM",
    status: "diambil",
  },
];

const quickActions: QuickAction[] = [
  { id: "1", label: "Titip Sekarang", icon: "add-circle" },
  { id: "2", label: "Riwayat", icon: "time" },
  { id: "3", label: "Bantuan", icon: "help-circle" },
];

const packages: ServicePackage[] = [
  {
    id: "1",
    name: "Harian",
    price: "Rp 5.000/hari",
    description: "Cocok untuk titip sehari saat bepergian.",
  },
  {
    id: "2",
    name: "Mingguan",
    price: "Rp 30.000/minggu",
    description: "Lebih hemat untuk titip beberapa hari.",
    popular: true,
  },
  {
    id: "3",
    name: "Bulanan",
    price: "Rp 100.000/bulan",
    description: "Pilihan terbaik untuk titip jangka panjang.",
  },
];

// ===================================================================
// [KRITERIA 1] CUSTOM FUNCTION
// Fungsi buatan sendiri (arrow function) dengan 1 parameter.
// Dipanggil sekali per data, hasilnya berupa komponen (kartu).
// ===================================================================

// Membuat 1 kartu motor dari 1 data motor
const renderMotorCard = (motor: Motor) => {
  return (
    <View key={motor.id} style={styles.motorCard}>
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

      {/* [KRITERIA 3] INLINE STYLE
          style={{ ... }} ditulis langsung di komponen.
          Dipakai karena warnanya bergantung pada data (status motor). */}
      <View
        style={[
          styles.statusDot,
          { backgroundColor: motor.status === "dititip" ? "green" : "gray" },
        ]}
      />
    </View>
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

// Membuat 1 tombol aksi cepat dari 1 data aksi (tampilan saja, belum ada aksi)
const renderQuickAction = (action: QuickAction) => {
  return (
    <Pressable key={action.id} style={styles.actionButton}>
      <Ionicons name={action.icon} size={28} color={colors.primary} />
      <Text style={styles.actionLabel}>{action.label}</Text>
    </Pressable>
  );
};

// ===================================================================
// HALAMAN UTAMA
// ===================================================================
export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header sapaan */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Selamat datang kembali</Text>
            <Text style={styles.userName}>Halo, Rizky</Text>
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

        {/* ===== [KRITERIA 1] LOOP dengan .map() =====
            motors.map(renderMotorCard) artinya:
            "untuk setiap data di array motors, panggil renderMotorCard".
            Atribut key={motor.id} (di dalam fungsi) wajib agar React
            bisa membedakan tiap item di dalam list. */}
        <Text style={styles.sectionTitle}>Motor saya</Text>
        {motors.map(renderMotorCard)}

        {/* Aksi cepat: loop yang sama, datanya dari array quickActions */}
        <View style={styles.actionRow}>{quickActions.map(renderQuickAction)}</View>

        {/* Paket layanan: loop yang sama, datanya dari array packages */}
        <Text style={styles.sectionTitle}>Paket layanan</Text>
        {packages.map(renderPackageCard)}
      </ScrollView>
    </SafeAreaView>
  );
}