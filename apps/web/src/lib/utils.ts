export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
