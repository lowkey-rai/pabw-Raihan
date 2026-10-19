
import { pilihKategori, tambahFavorit } from "./state.js";

export function pasangPendengar() {
    const barisFilter = document.querySelector("#filter-proyek");
    const daftarProyek = document.querySelector("#daftar-proyek");

    if (barisFilter) {
        barisFilter.addEventListener("click", (event) => {
            const tombol = event.target.closest(".filter");

            if (!tombol) return;

            pilihKategori(tombol.dataset.kategori || "semua");
        });
    }

    if (daftarProyek) {
        daftarProyek.addEventListener("click", (event) => {
            const tombol = event.target.closest(".favorit");

            if (!tombol) return;

            const id = Number(tombol.dataset.id);

            if (Number.isNaN(id)) return;

            tambahFavorit(id);
        });
    }

    const form = document.querySelector("#form-catatan");
    const namaPerawatan = document.querySelector("#nama-perawatan");
    const tanggal = document.querySelector("#tanggal");
    const keterangan = document.querySelector("#keterangan");
    const tombolSimpan = document.querySelector("#btn-simpan");

    const kolomForm = [namaPerawatan, tanggal, keterangan];

    function periksaKolom(kolom) {
        if (!kolom) return false;

        const pembungkus = kolom.closest(".form-kolom");
        const pesanGalat = pembungkus?.querySelector(".pesan-galat");
        const valid = kolom.value.trim() !== "";

        kolom.setAttribute("aria-invalid", String(!valid));

        if (pembungkus) {
            pembungkus.classList.toggle("tidak-valid", !valid);
        }

        if (pesanGalat) {
            pesanGalat.hidden = valid;
        }

        return valid;
    }

    function periksaForm() {
        const hasil = kolomForm.map(periksaKolom);
        const valid = hasil.every(Boolean);

        if (tombolSimpan) {
            tombolSimpan.disabled = !valid;
        }

        return valid;
    }

    kolomForm.forEach((kolom) => {
        if (!kolom) return;

        kolom.addEventListener("input", () => {
            periksaKolom(kolom);
            periksaForm();
        });
    });

    if (tombolSimpan) {
        tombolSimpan.disabled = true;
    }

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            if (!periksaForm()) {
                kolomForm.find((kolom) =>
                    kolom && kolom.value.trim() === ""
                )?.focus();

                return;
            }

            alert("Form berhasil divalidasi.");
        });
    }
}