// [EXTERNAL STYLE] Semua style ditulis di file terpisah ini, lalu di-import
// di setiap halaman dengan: import { styles, colors } from "../constants/styles";
import { StyleSheet } from "react-native";

// Palet warna NITIPIN: minimalis dengan nuansa biru sesuai logo
export const colors = {
  primary: "#5271FF",
  primaryDark: "#1B2559",
  primarySoft: "#E8ECFF",
  background: "#F6F8FF",
  surface: "#FFFFFF",
  textMuted: "#6B7794",
  success: "#22C55E",
};

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 14,
    color: colors.textMuted,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primaryDark,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primarySoft,
    justifyContent: "center",
    alignItems: "center",
  },

  // Kartu status penitipan aktif
  statusCard: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 20,
    marginBottom: 28,
  },
  statusTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  statusTitle: {
    fontSize: 14,
    color: "#DCE3FF",
  },
  statusBadge: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusBadgeText: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.primary,
  },
  statusPlate: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  statusLocation: {
    fontSize: 14,
    color: "#DCE3FF",
    marginTop: 4,
  },

  // Judul bagian
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primaryDark,
    marginBottom: 12,
  },

  // Kartu motor
  motorCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  motorIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: colors.primarySoft,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  motorInfo: {
    flex: 1,
  },
  motorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primaryDark,
  },
  motorDetail: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: 2,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  // Aksi cepat
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 28,
  },
  actionButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: 16,
    paddingVertical: 16,
    marginHorizontal: 4,
  },
  actionLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.primaryDark,
    marginTop: 8,
  },

  // Paket layanan
  packageCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E1E6FA",
  },
  packageCardPopular: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  packageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  packageName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primaryDark,
  },
  packagePrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.primary,
  },
  packageDesc: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: 6,
  },
  popularTag: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 6,
  },

  // Halaman Titip Sekarang
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionInfo: {
    flex: 1,
    marginHorizontal: 12,
  },
  summaryBox: {
    backgroundColor: colors.primarySoft,
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
    marginBottom: 20,
  },
  summaryLabel: {
    fontSize: 13,
    color: colors.textMuted,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primaryDark,
    marginTop: 4,
  },

  // Halaman Detail Motor
  detailHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  detailIcon: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: colors.primarySoft,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  detailName: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primaryDark,
  },
  detailCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: colors.textMuted,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.primaryDark,
  },

  // Tombol
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  secondaryButton: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primary,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
  },
  linkButton: {
    alignItems: "center",
    paddingVertical: 14,
  },
  linkButtonText: {
    fontSize: 15,
    color: colors.textMuted,
  },

  // Teks identitas di bawah Beranda
  tambahan: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.primaryDark,
    marginTop: 12,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 10,
    borderRadius: 8,
  },
});