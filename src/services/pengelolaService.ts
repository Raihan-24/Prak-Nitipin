import type { ApiResponse } from "../types/api";
import type { Pengelola } from "../types/pengelola";
import { delay } from "../utils/delay";

const API_URL = "https://jsonplaceholder.typicode.com/users";

/// FUNGSI 1 = fungsi yang mengembalikan Promise buatan sendiri.
export function fetchPengelola(): Promise<Pengelola[]> {
  return new Promise<Pengelola[]>((resolve, reject) => {
    // fetch() = fungsi bawaan (pre-built) yang mengirim request dan mengembalikan Promise
    fetch(API_URL)
      .then((response) => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject(new Error("Server menolak permintaan (kode " + response.status + ")"));
        }
      })
      .catch(() => {
        reject(new Error("Tidak bisa terhubung ke server. Periksa koneksi internet."));
      });
  });
}

// FUNGSI 2: custom async function, memakai await.
export async function getPengelolaList(): Promise<ApiResponse<Pengelola[]>> {
  await delay(3000);

  try {
    const data = await fetchPengelola();
    return { success: true, data: data, message: "Data berhasil dimuat" };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan";
    return { success: false, data: [], message: message };
  }
}
