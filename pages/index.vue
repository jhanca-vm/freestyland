<script setup lang="ts">
const description = [
  'Información de las fechas, jornadas, resultados, posiciones, etc. De',
  'todas las ligas de FMS y FMS Internacional.',
]

const { data: schedule } = await useFetch('/api/schedule')
</script>

<template>
  <main>
    <Metadata title="Freestyland" :description="description.join(' ')" />
    <Schedule :data="schedule" />
  </main>
</template>
