
<script setup>
const props = defineProps({
  profil: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="kepala-profil">
    <h2>{{ props.profil.nama }}</h2>
    <p>{{ props.profil.peran }}</p>
  </div>
</template>
