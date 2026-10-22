
<script setup>
import { computed } from 'vue'
import {
  state,
  tambahFavorit,
} from '../state.js'

const props = defineProps({
  filter: {
    type: String,
    default: 'semua',
  },
})

const proyekTampil = computed(() => {
  let hasil = state.daftarProyek

  if (props.filter === 'selesai') {
    hasil = hasil.filter(proyek => proyek.selesai === true)
  } else if (props.filter === 'proses') {
    hasil = hasil.filter(proyek => proyek.selesai === false)
  }

  return hasil
})

function idProyek(proyek, index) {
  return proyek.id ?? proyek.nama ?? index
}
</script>

<template>
  <div>
    <p v-if="state.memuat" id="muat">
      Memuat data...
    </p>

    <p v-else-if="state.galat" role="alert">
      {{ state.galat }}
    </p>

    <p
      v-else-if="proyekTampil.length === 0"
      id="pesan-kosong"
    >
      Belum ada data.
    </p>

    <div
      v-else
      id="daftar-proyek"
      class="katalog grid"
    >
      <article
        v-for="(proyek, index) in proyekTampil"
        :key="idProyek(proyek, index)"
        class="kartu"
      >
        <h3>{{ proyek.nama }}</h3>

        <p v-if="proyek.deskripsi">
          {{ proyek.deskripsi }}
        </p>

        <p v-if="proyek.tahun">
          Tahun: {{ proyek.tahun }}
        </p>

        <p>
          Status:
          {{ proyek.selesai ? 'Selesai' : 'Belum Selesai' }}
        </p>

        <button
          type="button"
          @click="tambahFavorit(idProyek(proyek, index))"
        >
          {{
            state.favorit.includes(idProyek(proyek, index))
              ? '★ Hapus Favorit'
              : '☆ Tambah Favorit'
          }}
        </button>
      </article>
    </div>
  </div>
</template>
