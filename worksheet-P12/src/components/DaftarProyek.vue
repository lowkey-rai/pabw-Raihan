<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  filter: {
    type: String,
    default: 'semua',
  },
})

const daftarProyek = ref([])
const sedangMemuat = ref(true)
const pesanError = ref('')

async function ambilProyek() {
  sedangMemuat.value = true
  pesanError.value = ''

  try {
    const respons = await fetch('/data/proyek.json')

    if (!respons.ok) {
      throw new Error(`Gagal mengambil data: ${respons.status}`)
    }

    daftarProyek.value = await respons.json()
  } catch (error) {
    pesanError.value = 'Gagal memuat proyek. Periksa file proyek.json.'
    console.error(error)
  } finally {
    sedangMemuat.value = false
  }
}

const proyekTampil = computed(() => {
  if (props.filter === 'selesai') {
    return daftarProyek.value.filter(
      proyek => proyek.selesai === true
    )
  }

  if (props.filter === 'proses') {
    return daftarProyek.value.filter(
      proyek => proyek.selesai === false
    )
  }

  return daftarProyek.value
})

onMounted(ambilProyek)
</script>

<template>
  <div>
    <p v-if="sedangMemuat" id="muat">
      Memuat data...
    </p>

    <p v-else-if="pesanError">
      {{ pesanError }}
    </p>

    <p v-else-if="proyekTampil.length === 0" id="pesan-kosong">
      Belum ada data.
    </p>

    <div v-else id="daftar-proyek" class="katalog grid">
      <article
        v-for="(proyek, index) in proyekTampil"
        :key="proyek.id ?? proyek.nama ?? index"
        class="kartu"
      >
        <h3>{{ proyek.nama }}</h3>
        <p v-if="proyek.deskripsi">{{ proyek.deskripsi }}</p>
        <p v-if="proyek.tahun">Tahun: {{ proyek.tahun }}</p>
        <p>
          Status:
          {{ proyek.selesai ? 'Selesai' : 'Belum Selesai' }}
        </p>
      </article>
    </div>
  </div>
</template>
