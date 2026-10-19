import { ambilProyek } from "./api.js";
import {
    render,
    tampilkanGalat,
    aturMemuat
} from "./dom.js";

const profil = {
    nama: "RAIHAN ATHAILLAH",
    nim: "25523249",
    peran: "Mahasiswa Informatika yang belajar front-end",
    motor: "Honda Vario 150",
    keahlian: ["HTML", "CSS", "JavaScript"],
    jumlahProyek: 3
};

const daftarPerawatan = [
    {
        nama: "Ganti oli",
        keterangan: "Dilakukan secara berkala",
        rutin: true
    },
    {
        nama: "Cek tekanan",
        keterangan: "Dicek sebelum digunakan",
        rutin: true
    },
    {
        nama: "Cek kampas rem",
        keterangan: "Memastikan rem masih aman",
        rutin: true
    }
];

let pilihanAktif = "semua";

const jumlahProyek = profil.jumlahProyek ?? 0;
const alamatKota = profil.alamat?.kota ?? "Belum diisi";
const judulHalaman = "Ride & Care";

function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

const daftarKeahlian = profil.keahlian.map(
    (keahlian) => keahlian.toUpperCase()
);

const salinanProfil = { ...profil };

const elemenJudul = document.getElementById("judul-halaman");
const elemenTeksJudul = document.getElementById("teks-judul");
const elemenDeskripsi = document.getElementById("deskripsi-halaman");
const elemenProfil = document.getElementById("teks-profil");
const elemenMotor = document.getElementById("teks-motor");
const elemenKeahlian = document.getElementById("teks-keahlian");
const elemenPerawatan =
    document.getElementById("daftar-perawatan") ||
    document.querySelector(".katalog");

const elemenGambar = document.getElementById("gambar-motor");
const elemenFooter = document.getElementById("footer-text");

const form = document.getElementById("form-catatan");
const namaPerawatan = document.getElementById("nama-perawatan");
const tanggal = document.getElementById("tanggal");
const keterangan = document.getElementById("keterangan");

if (elemenJudul) {
    elemenJudul.textContent = judulHalaman;
}

if (elemenTeksJudul) {
    elemenTeksJudul.textContent = judulHalaman;
}

if (elemenDeskripsi) {
    elemenDeskripsi.textContent =
        `Halaman sederhana tentang ${profil.motor}, perawatan motor, dan catatan penggunaan sehari-hari.`;
}

if (elemenProfil) {
    elemenProfil.textContent = buatPerkenalan(profil);
}

if (elemenMotor) {
    elemenMotor.textContent =
        `Motor yang saya gunakan adalah ${profil.motor}. ` +
        `Jumlah proyek: ${jumlahProyek}. ` +
        `Kota: ${alamatKota}.`;
}

if (elemenKeahlian) {
    elemenKeahlian.textContent =
        formatKeahlian(profil.keahlian);
}

if (elemenGambar) {
    elemenGambar.alt = `Foto ${profil.motor}`;
}

if (elemenFooter) {
    elemenFooter.textContent =
        `${profil.nama} · ${profil.nim} · 2026`;
}

function tampilkanPerawatan(data) {
    if (!elemenPerawatan) {
        return;
    }

    elemenPerawatan.innerHTML = data.map((item) => `
        <article class="kartu">
            <h3>${item.nama}</h3>
            <p>
                <strong>Perawatan:</strong>
                ${item.nama}
            </p>
            <p>
                <strong>Keterangan:</strong>
                ${item.keterangan}
            </p>
        </article>
    `).join("");
}

tampilkanPerawatan(daftarPerawatan);

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

console.log("typeof nama:", typeof profil.nama);
console.log("typeof jumlahProyek:", typeof jumlahProyek);
console.log("typeof belumDibuat:", typeof belumDibuat);

console.table(profil.keahlian);
console.log("Daftar keahlian huruf besar:", daftarKeahlian);
console.log("Salinan profil:", salinanProfil);
console.log("Pilihan aktif:", pilihanAktif);

async function muatProyek() {
    aturMemuat(true);

    try {
        const dataProyek = await ambilProyek();

        render(dataProyek);

        console.table(dataProyek);

        const badan = JSON.stringify({
        judul: 'Judul contoh',
        kategori: 'web'
});

console.log(typeof badan);

console.log(typeof badan);
    } catch (galat) {
        tampilkanGalat(
            "Proyek gagal dimuat. Periksa koneksi dan alamat data."
        );

        console.error("Gagal memuat proyek:", galat.message);
    } finally {
        aturMemuat(false);
    }
}

muatProyek();

if (
    form &&
    namaPerawatan &&
    tanggal &&
    keterangan
) {
    form.addEventListener("submit", (event) => {
        const nama = namaPerawatan.value.trim();
        const ket = keterangan.value.trim();

        const dataNama = daftarPerawatan.find(
            (data) => data.nama === nama
        );

        const dataKeterangan = daftarPerawatan.find(
            (data) => data.keterangan === ket
        );

        namaPerawatan.setCustomValidity("");
        tanggal.setCustomValidity("");
        keterangan.setCustomValidity("");

        if (dataNama && dataNama.keterangan === ket) {
            alert("Catatan berhasil disimpan.");
            return;
        }

        event.preventDefault();

        if (dataNama) {
            keterangan.setCustomValidity(
                "Keterangan salah. Silakan ketik ulang sesuai kartu."
            );

            form.reportValidity();
            return;
        }

        if (dataKeterangan) {
            namaPerawatan.setCustomValidity(
                "Nama perawatan salah. Silakan ketik ulang sesuai kartu."
            );

            form.reportValidity();
            return;
        }

        namaPerawatan.setCustomValidity(
            "Nama perawatan salah. Silakan ketik ulang sesuai kartu."
        );

        keterangan.setCustomValidity(
            "Keterangan salah. Silakan ketik ulang sesuai kartu."
        );

        form.reportValidity();
    });

    namaPerawatan.addEventListener("input", () => {
        namaPerawatan.setCustomValidity("");
    });

    tanggal.addEventListener("input", () => {
        tanggal.setCustomValidity("");
    });

    keterangan.addEventListener("input", () => {
        keterangan.setCustomValidity("");
    });
}
