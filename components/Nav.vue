<script setup lang="ts">
const countries = useCountries()
const { path } = useRoute()
const selected = ref(path)
</script>

<template>
  <div>
    <select title="Menú" v-model="selected" @change="navigateTo(selected)">
      <option value="/">Freestyland</option>
      <option
        v-for="[country, [name, flag]] in countries"
        :value="`/fms/${country}`"
        :key="country"
      >
        {{ flag }} FMS {{ name }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="sass">
@use 'assets/theme'

div
  background-color: rgba(theme.$color-300, 0.6)
  border: 1px solid theme.$color-200
  border-radius: 0 0 16px 16px
  padding: 8px 12px
  margin: 0 auto
  width: fit-content

  @media (min-width: 1280px)
    display: none

select
  background: none
  border: none
  font-size: 1.6rem
  outline: none

  &:focus
    padding-right: 12px

option
  background-color: theme.$color-200
  color: theme.$color-600
  padding: 12px

  &:checked
    display: none
</style>
