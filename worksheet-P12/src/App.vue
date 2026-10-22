
<script setup>
import { ref, onMounted, watch } from 'vue'
import { profil } from './data.js'
import {
  state,
  pilihKategori,
  simpan,
  muat,
  pulihkan,
  isiProyek,
  aturUlang,
} from './state.js'
import { ambilProyek } from './api.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

const temaGelap = ref(false)

watch(temaGelap, (aktif) => {
  document.documentElement.classList.toggle('tema-gelap', aktif)
})

onMounted(async () => {
  pulihkan(muat())

  try {
    isiProyek(await ambilProyek())
    state.galat = ''
  } catch (galat) {
    state.galat =
      'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
    console.error(galat)
  } finally {
    state.memuat = false
  }
})

watch(
  state,
  (nilai) => {
    simpan(nilai)
  },
  { deep: true }
)

function ubahFilter(kategori) {
  pilihKategori(kategori)
}

function resetFilter() {
  aturUlang()
}
</script>

<template>
  <div class="page">
    <header>
      <div class="header-baris">
        <div>
          <h1>Ride &amp; Care</h1>
          <KepalaProfil :profil="profil" />
        </div>

        <nav aria-label="Navigasi utama">
          <ul>
            <li><a href="#profil-motor">Profil Motor</a></li>
            <li><a href="#perawatan">Perawatan</a></li>
            <li><a href="#proyek">Daftar Proyek</a></li>
            <li><a href="#catatan">Catatan Penggunaan</a></li>
          </ul>
        </nav>
      </div>

      <p>
        Halaman sederhana tentang motor saya, perawatan motor,
        dan catatan penggunaan sehari-hari.
      </p>

      <div class="pengalih-tema">
        <input
          id="tema"
          v-model="temaGelap"
          type="checkbox"
          class="pengalih-tema-input"
        />

        <label for="tema" class="tombol-tema">
          <span class="teks-gelap">🌙 Mode Gelap</span>
          <span class="teks-terang">☀️ Mode Terang</span>
        </label>
      </div>
    </header>

    <main>
      <section id="profil-motor">
        <h2>Profil Motor</h2>
        <p>
          Bagian ini berisi informasi singkat mengenai motor
          yang saya gunakan sehari-hari.
        </p>

        <img
          src="/Motor.JPG"
          alt="Motor yang saya gunakan"
          width="400"
          height="600"
          loading="lazy"
        />

        <p>
          Motor yang saya gunakan adalah motor matic
          untuk kebutuhan sehari-hari.
        </p>
      </section>

      <section id="perawatan">
        <h2>Perawatan Motor</h2>
        <p>
          Saya mencatat perawatan motor supaya lebih mudah
          mengingat kapan terakhir kali melakukan perawatan.
        </p>

        <div class="katalog grid">
          <article class="kartu">
            <h3>Oli Mesin</h3>
            <p><strong>Perawatan:</strong> Ganti oli</p>
            <p>
              <strong>Keterangan:</strong>
              Dilakukan secara berkala
            </p>
          </article>

          <article class="kartu">
            <h3>Ban</h3>
            <p><strong>Perawatan:</strong> Cek tekanan</p>
            <p>
              <strong>Keterangan:</strong>
              Dicek sebelum digunakan
            </p>
          </article>

          <article class="kartu">
            <h3>Rem</h3>
            <p><strong>Perawatan:</strong> Cek kampas rem</p>
            <p>
              <strong>Keterangan:</strong>
              Memastikan rem masih aman
            </p>
          </article>
        </div>
      </section>

      <section id="proyek">
        <h2>Daftar Proyek</h2>
        <p>
          Berikut daftar proyek yang sedang dan sudah
          saya kerjakan.
        </p>

        <TombolFilter
          @ubah-filter="ubahFilter"
          @atur-ulang="resetFilter"
        />

        <DaftarProyek :filter="state.kategoriAktif" />
      </section>

      <FormKontak />
    </main>

    <footer>
      <p>RAIHAN ATHAILLAH · 25523249 · 2026</p>
    </footer>
  </div>
</template>
