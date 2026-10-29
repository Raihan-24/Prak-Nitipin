import { Ionicons } from "@expo/vector-icons";

// ===================================================================
// TYPE & INTERFACE (dipakai bersama oleh semua halaman)
// ===================================================================
export type MotorStatus = "dititip" | "diambil" | "dipesan";

export interface Motor {
    readonly id: string; // readonly = tidak bisa diubah setelah dibuat
    plate: string;
    name: string;
    location: string;
    status: MotorStatus;
    since?: string; // tanda "?" = opsional
}

export interface ServicePackage {
    readonly id: string;
    name: string;
    price: string;
    description: string;
    popular?: boolean;
}

export interface QuickAction {
    readonly id: string;
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
}

// ===================================================================
// ARRAY OF OBJECTS
// ===================================================================
export const motors: Motor[] = [
    {
        id: "1",
        plate: "N 1234 AB",
        name: "Honda Beat",
        location: "Pos Parkir Stasiun Malang",
        status: "dititip",
        since: "08.15",
    },
    {
        id: "2",
        plate: "N 5678 CD",
        name: "Yamaha NMAX",
        location: "Pos Parkir Kampus UMM",
        status: "diambil",
    },
];

export const quickActions: QuickAction[] = [
    { id: "1", label: "Titip Sekarang", icon: "add-circle" },
    { id: "2", label: "Riwayat", icon: "time" },
    { id: "3", label: "Bantuan", icon: "help-circle" },
    { id: "4", label: "Mode", icon: "moon" },
];

export const packages: ServicePackage[] = [
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