import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import PengelolaCard from "../components/PengelolaCard";
import { styles } from "../constants/styles";
import { getPengelolaList } from "../services/pengelolaService";
import type { Pengelola } from "../types/pengelola";

// HALAMAN PENGELOLA PARKIR (route: "/pengelola")
export default function PengelolaParkir() {
  const [pengelola, setPengelola] = useState<Pengelola[]>([]); // data dari API
  const [isLoading, setIsLoading] = useState<boolean>(true);   // sedang memuat?
  const [errorMessage, setErrorMessage] = useState<string>(""); // pesan jika gagal

  // [KRITERIA 3] .then():
  const loadData = () => {
    setIsLoading(true);
    setErrorMessage("");

    getPengelolaList().then((result) => {
      if (result.success) {
        setPengelola(result.data);       // simpan data API ke state
      } else {
        setErrorMessage(result.message); // simpan pesan error
      }
      setIsLoading(false);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea} edges={["left", "right", "bottom"]}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Pengelola parkir terdaftar</Text>
        <Text style={[styles.greeting, { marginBottom: 12 }]}> Total: {pengelola.length} pengelola </Text>

        {/* Tiga kemungkinan tampilan: loading, error, atau data */}
        {isLoading ? (
          <Loading message="Mengambil data pengelola..." />
        ) : errorMessage !== "" ? (
          <ErrorMessage message={errorMessage} onRetry={loadData} />
        ) : (
          pengelola.map((item) => <PengelolaCard key={item.id} pengelola={item} />)
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
