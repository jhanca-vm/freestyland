<script setup lang="ts">
import type { Battle, Matchday, MC } from 'types'

interface Data {
  table: MC[]
  matchdays: Matchday<Battle>[]
}

const route = useRoute()
const countries = useCountries()
const { setError } = useCustomError()
const param = computed(() => String(route.params.country))

if (!countries.value.has(param.value)) {
  setError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const [country] = countries.value.get(param.value)
const { data } = await useFetch<Data>(`/api/fms/${param.value}`)
</script>

<template>
  <main>
    <Metadata
      :title="`FMS ${country}`"
      :description="`Resultados y tabla de posiciones de la FMS ${country}`"
    />
    <Table :data="data.table" />
    <Matchday :data="data.matchdays" />
  </main>
</template>

<style scoped lang="sass">
main
  @media (min-width: 768px)
    column-gap: 16px
    display: grid
    grid-template-columns: 1fr 1fr

  @media (min-width: 1024px)
    column-gap: 24px
    grid-template-columns: repeat(2, min(440px, 100%))
    justify-content: space-evenly
</style>
