const ALAMAT = 'https://raw.githubusercontent.com/lowkey-rai/pabw-Raihan/refs/heads/main/worksheet-P10/data/proyek.json';

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);

    if (!respons.ok) {
      throw new Error('status ' + respons.status);
    }

    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat;
  }
}
