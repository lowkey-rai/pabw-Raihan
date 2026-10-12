import { daftarProyek } from "./app.js";

const elemenProyek = document.querySelector("#daftar-proyek");
const barisFilter = document.querySelector("#filter-proyek");
const pesanKosong = document.querySelector("#pesan-kosong");

let pilihanAktif = "semua";

function tampilkanProyek(data) {
    elemenProyek.replaceChildren();

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

    pesanKosong.hidden = data.length !== 0;
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
