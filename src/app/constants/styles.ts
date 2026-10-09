// [KRITERIA 3] EXTERNAL STYLE
// Semua style ditulis di file terpisah ini, lalu di-import di app/index.tsx
// dengan: import { styles, colors } from "../constants/styles";

import { StyleSheet } from "react-native";

// Palet warna NITIPIN: minimalis dengan nuansa biru
export const colors = {
  primary: "#1D5FD1",
  primaryDark: "#0B2A4A",
  primarySoft: "#E3EEFC",
  background: "#F5F8FD",
  surface: "#FFFFFF",
  textMuted: "#6B7C93",
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
    color: "#CFE0FA",
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
    color: "#CFE0FA",
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
    fontSize: 13,
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
    borderColor: "#E5ECF6",
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
    fontSize: 16,
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
});