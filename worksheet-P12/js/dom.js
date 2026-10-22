
import { profil, buatPerkenalan, formatKeahlian, saring } from "./data.js";
import { state } from "./state.js";

const elemenProyek = document.querySelector("#daftar-proyek");
const pesanKosong = document.querySelector("#pesan-kosong");
const pesanMuat = document.querySelector("#muat");

export function aturMemuat(aktif) {
    if (pesanMuat) pesanMuat.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
    if (!elemenProyek) return;

    elemenProyek.replaceChildren();

    if (pesanKosong) pesanKosong.hidden = true;

    elemenProyek.textContent = pesan;
}

export function buatKartu(proyek, favorit = []) {
    const kartu = document.createElement("article");
    kartu.className = "kartu";

    const judul = document.createElement("h3");
    judul.textContent = proyek.judul ?? proyek.nama ?? "Tanpa judul";

    const tahun = document.createElement("p");
    tahun.textContent = proyek.tahun ?? "";

    const status = document.createElement("p");
    status.textContent = proyek.selesai ? "Selesai" : "Dalam proses";

    const tombolFavorit = document.createElement("button");
    tombolFavorit.type = "button";
    tombolFavorit.className = "favorit";
    tombolFavorit.dataset.id = proyek.id;
    tombolFavorit.textContent = favorit.includes(proyek.id) ? "★" : "☆";
    tombolFavorit.setAttribute("aria-label", "Tandai favorit");

    kartu.append(judul, tahun, status, tombolFavorit);

    return kartu;
}

export function render(state) {
    if (!elemenProyek) return;

    elemenProyek.replaceChildren();

    const tampil = saring(state.daftarProyek, state.kategoriAktif);

    if (tampil.length === 0) {
        if (pesanKosong) {
            pesanKosong.hidden = false;
            pesanKosong.textContent = "Belum ada data.";
        }
        return;
    }

    if (pesanKosong) pesanKosong.hidden = true;

    tampil.forEach((proyek) => {
        elemenProyek.append(buatKartu(proyek, state.favorit));
    });

    document.querySelectorAll("#filter-proyek .filter").forEach((tombol) => {
        tombol.classList.toggle(
            "aktif",
            tombol.dataset.filter === state.kategoriAktif
        );
    });
}
