export const profil = {
    nama: "RAIHAN ATHAILLAH",
    nim: "25523249",
    peran: "Mahasiswa Informatika yang belajar front-end",
    motor: "Honda Vario 150",
    keahlian: ["HTML", "CSS", "JavaScript"],
    jumlahProyek: 3
};

export function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) =>
    daftar.join(" · ");

export function saring(daftar, kategori) {
    if (kategori === "semua") {
        return daftar;
    }

    if (kategori === "selesai") {
        return daftar.filter((proyek) => proyek.selesai === true);
    }

    if (kategori === "proses") {
        return daftar.filter((proyek) => proyek.selesai === false);
    }

    return daftar;
}
