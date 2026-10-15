import { daftarProyek } from "./app.js";

const elemenProyek = document.querySelector("#daftar-proyek");
const barisFilter = document.querySelector("#filter-proyek");
const pesanKosong = document.querySelector("#pesan-kosong");

let pilihanAktif = "semua";

function tampilkanProyek(data) {
    elemenProyek.replaceChildren();

    if (data.length === 0) {
        pesanKosong.hidden = false;
        return;
    }

    pesanKosong.hidden = true;

    data.forEach((proyek) => {
        const kartu = document.createElement("article");
        kartu.className = "kartu";

        const judul = document.createElement("h3");
        judul.textContent = proyek.judul;

        const tahun = document.createElement("p");
        tahun.textContent = `Tahun: ${proyek.tahun}`;

        const status = document.createElement("p");
        status.textContent = `Status: ${
            proyek.selesai ? "Selesai" : "Belum selesai"
        }`;

        kartu.append(judul, tahun, status);
        elemenProyek.append(kartu);
    });
}

function saringProyek() {
    const hasil = daftarProyek.filter((proyek) => {
        if (pilihanAktif === "selesai") {
            return proyek.selesai;
        }

        if (pilihanAktif === "proses") {
            return !proyek.selesai;
        }

        return true;
    });

    tampilkanProyek(hasil);
}

barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest(".filter");

    if (!tombol || !barisFilter.contains(tombol)) {
        return;
    }

    pilihanAktif = tombol.dataset.filter;

    barisFilter.querySelectorAll(".filter").forEach((item) => {
        item.classList.toggle("aktif", item === tombol);
    });

    saringProyek();
});

saringProyek();

const formCatatan = document.querySelector("#form-catatan");
const namaPerawatan = document.querySelector("#nama-perawatan");
const tanggal = document.querySelector("#tanggal");
const keterangan = document.querySelector("#keterangan");
const tombolSimpan = document.querySelector("#btn-simpan");

const semuaKolom = [
    namaPerawatan,
    tanggal,
    keterangan
];

function periksaKolom(kolom) {
    const pembungkus = kolom.closest(".form-kolom");
    const pesanGalat = pembungkus.querySelector(".pesan-galat");

    const sah = kolom.value.trim() !== "";

    kolom.setAttribute("aria-invalid", String(!sah));
    pembungkus.classList.toggle("tidak-valid", !sah);
    pesanGalat.hidden = sah;

    return sah;
}

function periksaForm() {
    const hasil = semuaKolom.map((kolom) => {
        return periksaKolom(kolom);
    });

    const sah = hasil.every(Boolean);

    tombolSimpan.disabled = !sah;

    return sah;
}

semuaKolom.forEach((kolom) => {
    const pembungkus = kolom.closest(".form-kolom");
    const pesanGalat = pembungkus.querySelector(".pesan-galat");

    pembungkus.classList.remove("tidak-valid");
    pesanGalat.hidden = true;
    kolom.setAttribute("aria-invalid", "false");
});

tombolSimpan.disabled = true;

formCatatan.addEventListener("input", (event) => {
    const kolom = event.target;

    if (semuaKolom.includes(kolom)) {
        periksaKolom(kolom);
    }

    tombolSimpan.disabled = !semuaKolom.every(
        (kolom) => kolom.value.trim() !== ""
    );
});

formCatatan.addEventListener("submit", (event) => {
    event.preventDefault();

    const sah = periksaForm();

    if (!sah) {
        const kolomSalah = semuaKolom.find(
            (kolom) => kolom.value.trim() === ""
        );

        kolomSalah?.focus();
        return;
    }

    alert("Form berhasil divalidasi.");
});

