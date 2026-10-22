
<script setup>
const emit = defineEmits(['ubah-filter', 'atur-ulang'])

function pilihFilter(kategori) {
  emit('ubah-filter', kategori)
}
</script>

<template>
  <div id="filter-proyek">
    <button type="button" class="filter" @click="pilihFilter('semua')">
      Semua
    </button>

    <button type="button" class="filter" @click="pilihFilter('selesai')">
      Selesai
    </button>

    <button type="button" class="filter" @click="pilihFilter('proses')">
      Belum Selesai
    </button>
  </div>

  <button id="atur-ulang" type="button" @click="$emit('atur-ulang')">
    Atur ulang
  </button>
</template>
