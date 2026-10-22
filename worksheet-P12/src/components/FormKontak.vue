
<script setup>
import { ref } from 'vue'

const namaPerawatan = ref('')
const tanggal = ref('')
const keterangan = ref('')
const status = ref('')

function simpanCatatan() {
  if (
    !namaPerawatan.value.trim() ||
    !tanggal.value ||
    !keterangan.value.trim()
  ) {
    status.value = 'Semua kolom wajib diisi.'
    return
  }

  status.value = 'Catatan perawatan berhasil divalidasi.'

  namaPerawatan.value = ''
  tanggal.value = ''
  keterangan.value = ''
}
</script>

<template>
  <section id="catatan">
    <h2>Catatan Penggunaan</h2>
    <p>
      Bagian ini digunakan untuk mencatat perawatan
      yang sudah dilakukan pada motor.
    </p>

    <form id="form-catatan" @submit.prevent="simpanCatatan">
      <div class="form-kolom">
        <label for="nama-perawatan">Nama Perawatan</label>
        <input
          id="nama-perawatan"
          v-model="namaPerawatan"
          type="text"
          placeholder="Contoh: Ganti oli"
          required
        />
      </div>

      <div class="form-kolom">
        <label for="tanggal">Tanggal</label>
        <input
          id="tanggal"
          v-model="tanggal"
          type="date"
          required
        />
      </div>

      <div class="form-kolom">
        <label for="keterangan">Keterangan</label>
        <textarea
          id="keterangan"
          v-model="keterangan"
          rows="4"
          placeholder="Contoh: Dilakukan secara berkala"
          required
        ></textarea>
      </div>

      <button type="submit" id="btn-simpan">
        Simpan Catatan
      </button>
    </form>

    <p v-if="status" role="status">{{ status }}</p>
  </section>
</template>
