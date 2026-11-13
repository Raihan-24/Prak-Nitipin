export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms); // setelah ms milidetik, Promise dianggap selesai
  });
}
