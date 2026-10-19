
import {
    profil,
    buatPerkenalan,
    formatKeahlian,
    saring
} from "./data.js";

import { state } from "./state.js";

const elemenProyek = document.querySelector("#daftar-proyek");
const barisFilter = document.querySelector("#filter-proyek");
const pesanKosong = document.querySelector("#pesan-kosong");
const pesanMuat = document.querySelector("#muat");

export function aturMemuat(aktif) {
    if (pesanMuat) {
        pesanMuat.hidden = !aktif;
    }
}

export function tampilkanGalat(pesan) {
    if (!elemenProyek) return;

    elemenProyek.replaceChildren();

    if (pesanKosong) {
        pesanKosong.hidden = true;
    }

    elemenProyek.textContent = pesan;
}

function buatKartu(proyek) {
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

    const tombolFavorit = document.createElement("button");
    tombolFavorit.type = "button";
    tombolFavorit.className = "favorit";
    tombolFavorit.dataset.id = proyek.id;
    tombolFavorit.textContent = state.favorit.includes(proyek.id)
        ? "★"
        : "☆";
    tombolFavorit.setAttribute(
        "aria-label",
        `Favorit ${proyek.judul}`
    );

    kartu.append(judul, tahun, status, tombolFavorit);

    return kartu;
}

export function render(state) {
    if (!elemenProyek) return;

    elemenProyek.replaceChildren();

    const hasil = saring(
        state.daftarProyek,
        state.kategoriAktif
    );

    if (hasil.length === 0) {
        if (pesanKosong) {
            pesanKosong.textContent = "Belum ada data.";
            pesanKosong.hidden = false;
        }
        return;
    }

    if (pesanKosong) {
        pesanKosong.hidden = true;
    }

    hasil.forEach((proyek) => {
        elemenProyek.append(buatKartu(proyek));
    });

    if (barisFilter) {
        barisFilter.querySelectorAll(".filter").forEach((tombol) => {
            tombol.classList.toggle(
                "aktif",
                tombol.dataset.filter === state.kategoriAktif
            );
        });
    }
}
