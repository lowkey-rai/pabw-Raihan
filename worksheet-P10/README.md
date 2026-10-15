# PABW – RAIHAN ATHAILLAH – 25523249

Repo ini berisi pekerjaan mata kuliah Pengembangan Aplikasi
Berbasis Web, satu folder untuk setiap pertemuan.

## Pertemuan 3 – Ride & Care

Topik halaman saya: informasi dan perawatan motor yang saya gunakan.

- Judul halaman: Ride & Care
- Deskripsi: Halaman sederhana tentang motor saya, perawatan motor, dan catatan penggunaan sehari-hari.
- Tautan navigasi: Profil Motor, Perawatan, Catatan Penggunaan
- Dua bagian utama: Profil Motor, Perawatan Motor
- Kolom tabel: Komponen, Perawatan, Keterangan
- Kolom form: Nama Perawatan, Tanggal, Keterangan
- Gambar: Motor.JPG

## Catatan penggunaan AI

Saya menggunakan AI untuk membantu memahami instruksi tugas,
menyusun contoh struktur HTML, dan memperbaiki bagian kode
yang masih belum saya pahami. Penyesuaian isi halaman,
pengisian data, dan pengecekan hasil dilakukan sendiri.

## Pertemuan 4 — CSS Fundamental dan Design Token

Topik halaman saya: tampilan halaman profil motor dengan CSS dan design token.

- Berkas gaya yang dibuat:
  - tokens.css
  - base.css
  - layout.css
  - komponen.css
  - tema.css
- Warna utama: #1D3A8C (biru), digunakan untuk tombol, tautan, dan penanda utama.
- Warna latar: #F5F7FA
- Warna teks utama: #172033
- Warna permukaan kartu: #FFFFFF
- Warna border: #D9E0E8
- Warna peringatan: #DC2626
- Ukuran dan jarak menggunakan rem dan design token.
- Layout menggunakan Flexbox dan gap.
- Form menggunakan keadaan focus-visible dan user-invalid.
- Tema gelap menggunakan prefers-color-scheme dan tombol pengalih tema.
- Urutan CSS: tokens.css, base.css, layout.css, komponen.css, tema.css.
- Halaman dibuat responsif agar tidak meluber pada layar sempit.

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #1D3A8C | tombol, tautan, penanda |
| --color-fg | #172033 | warna teks utama |
| --color-bg | #F5F7FA | latar halaman |
| --color-surface | #FFFFFF | latar kartu dan panel |
| --color-border | #D9E0E8 | garis dan tepi kotak |
| --color-danger | #DC2626 | peringatan dan isian tidak valid |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |

Kriteria selesai saya: mengubah warna utama pada satu baris di tokens.css dapat mengubah warna tombol, tautan, judul, dan bagian lain yang menggunakan token.

## Pertemuan 5 — Layout Modern: Flexbox dan Grid

Topik halaman saya: informasi dan perawatan motor sehari-hari.

- Halaman menggunakan CSS Grid untuk kerangka utama.
- Kerangka halaman terdiri dari header, main, dan footer.
- Bagian utama menggunakan dua kolom dengan sidebar 16rem dan konten 1fr.
- Flexbox digunakan untuk menyusun navbar dan elemen dalam komponen.
- Galeri kartu menggunakan CSS Grid.
- Galeri menggunakan `repeat(auto-fit, minmax(16rem, 1fr))` agar jumlah kolom menyesuaikan ukuran layar.
- Jarak antar elemen menggunakan `gap`.
- Layout dibuat responsif untuk ukuran layar kecil hingga besar.
- Bagian halaman menggunakan area bernama untuk mengatur posisi Profil Motor, Perawatan Motor, dan Catatan Penggunaan.
- Overflow dicegah dengan penggunaan `min-width: 0` dan `overflow-wrap: anywhere`.
- Tema terang dan tema gelap tetap dipertahankan dari Pertemuan 4.

### Potongan kode utama

```css
.page {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100dvh;
}

## Pertemuan 6 — Responsif Mobile-First

Topik halaman saya: membuat halaman Ride & Care responsif dengan pendekatan mobile-first.

- Meta viewport digunakan agar halaman menyesuaikan dengan lebar perangkat.
- Style dasar dibuat untuk layar sempit terlebih dahulu.
- Galeri kartu menggunakan satu kolom pada tampilan mobile.
- Breakpoint menggunakan satuan `rem` dengan `min-width`.
- Pada `48rem`, galeri berubah menjadi dua kolom.
- Pada `60rem`, galeri berubah menjadi tiga kolom.
- Gambar menggunakan `max-width: 100%` dan `height: auto` agar tidak melebihi lebar layar.
- Tabel lebar menggunakan wadah dengan `overflow-x: auto`.
- Teks panjang ditangani dengan `min-width: 0` dan `overflow-wrap: anywhere`.
- Ukuran teks menggunakan satuan `rem`.
- Pengujian dilakukan pada lebar 360 px, 768 px, dan 1280 px.
- Halaman diuji agar tidak mengalami gulir mendatar pada layar sempit.

### Berkas yang ditambahkan

- `responsif.css`

### Breakpoint yang digunakan

| Breakpoint | Perubahan |
|---|---|
| `48rem` | Galeri berubah dari satu kolom menjadi dua kolom |
| `60rem` | Galeri berubah menjadi tiga kolom |

### Style dasar

```css
.content {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-4);
}

.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-4);
}

## Pertemuan 8 — JavaScript Modern ES6+, Struktur Data, dan Array Methods

Topik halaman saya: mengolah data halaman Ride & Care menggunakan JavaScript modern.

- Data profil, daftar keahlian, daftar perawatan, dan daftar proyek disimpan di `js/app.js`.
- Menggunakan `const` untuk nilai yang tidak ditunjuk ulang dan `let` untuk nilai yang dapat berubah.
- Menggunakan template literal, `??`, dan optional chaining `?.`.
- Memakai dua fungsi murni: `buatPerkenalan()` dan `formatKeahlian()`.
- Memakai `map`, `filter`, dan `find` pada data array.
- Menggunakan spread `...` sebelum `sort` agar data asli tidak berubah.
- Console diperiksa dengan `console.log()` dan `console.table()`.
- Halaman dijalankan menggunakan `<script type="module" src="js/app.js"></script>` melalui server lokal.

## Penggunaan AI

AI digunakan untuk membantu memahami instruksi tugas, memahami penggunaan JavaScript
module, const, let, function, map, filter, find, serta membantu mencari penyebab
error pada kode.

pengecekan hasil di browser, perbaikan error,
dan pengujian akhir dilakukan sendiri.
  

## Pertemuan 9 — DOM, Event, dan Interaktivitas

Topik halaman saya: membuat halaman Ride & Care lebih interaktif menggunakan DOM, event, dan validasi formulir dengan JavaScript.

- Menggunakan `querySelector()` untuk memilih elemen HTML berdasarkan ID dan kelas.
- Menggunakan `querySelectorAll()` untuk mengambil beberapa elemen sekaligus.
- Menggunakan `createElement()` untuk membuat kartu proyek secara dinamis.
- Menggunakan `textContent` untuk mengisi teks pada elemen HTML dengan aman.
- Menggunakan `replaceChildren()` untuk mengosongkan wadah sebelum menampilkan daftar proyek.
- Menggunakan `forEach()` untuk menampilkan setiap proyek dari data array.
- Menggunakan `filter()` untuk menyaring proyek berdasarkan status selesai dan belum selesai.
- Menggunakan `addEventListener()` untuk menangani klik tombol filter dan perubahan pada formulir.
- Menggunakan event delegation dengan satu pendengar klik pada elemen induk `#filter-proyek`.
- Menggunakan `event.target.closest()` untuk mengetahui tombol filter yang diklik.
- Menggunakan `classList.toggle()` untuk mengubah penanda tombol filter yang aktif.
- Menampilkan pesan ketika daftar proyek kosong.
- Memvalidasi formulir catatan perawatan agar semua kolom wajib diisi sebelum formulir dapat dikirim.
- Menggunakan `event.preventDefault()` untuk mencegah formulir memuat ulang halaman.
- Menampilkan pesan validasi pada kolom yang belum diisi dan menonaktifkan tombol simpan jika isian belum lengkap.
- Memeriksa kode menggunakan Console dan panel Event Listeners pada DevTools browser.

### Berkas yang digunakan

- `Profil.html`
- `js/app.js`
- `js/dom.js`
- Berkas CSS yang digunakan pada halaman Ride & Care.

### Potongan kode utama

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

        kartu.append(judul);
        elemenProyek.append(kartu);
    });
}


### Event Delegation

barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest(".filter");

    if (!tombol || !barisFilter.contains(tombol)) {
        return;
    }

    pilihanAktif = tombol.dataset.filter;
    saringProyek();
});


### Penggunaan AI

AI digunakan untuk membantu memahami instruksi worksheet Pertemuan 9, menjelaskan konsep DOM manipulation, event delegation, penyaringan data, validasi formulir, serta membantu memeriksa dan memahami kemungkinan kesalahan pada kode JavaScript.

Penyesuaian kode pada proyek Ride & Care, menjalankan halaman di browser, memeriksa hasil filter, menguji validasi formulir, dan mengecek hasil pekerjaan dilakukan sendiri dengan bantuan panduan yang diberikan.

### Kesimpulan

Pada pertemuan ini, saya mempelajari cara memilih dan memanipulasi elemen HTML menggunakan JavaScript, menampilkan data proyek secara dinamis, menangani klik melalui event delegation, serta melakukan validasi formulir. Fitur tersebut membuat halaman Ride & Care lebih interaktif dan membantu pengguna mengisi formulir dengan benar.