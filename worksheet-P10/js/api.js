const ALAMAT = 'data/proyek.json';

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

async function muat() {
  const respons = await fetch(ALAMAT);
  console.log("status", respons.status, "ok", respons.ok);

  if (!respons.ok) {
    throw new Error("status " + respons.status);
  }

  return respons.json();
}

muat();
