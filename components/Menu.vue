<script setup lang="ts">
const countries = useCountries()
const { getImage } = useStorage()
</script>

<template>
  <nav>
    <NuxtLink to="/">
      <img :src="getImage('logo.png')" alt="Inicio" width="32" height="32" />
    </NuxtLink>
    <ul>
      <li v-for="[country, [name, flag]] in countries" :key="country">
        <NuxtLink :to="`/fms/${country}`" active-class="active">
          {{ flag }} FMS {{ name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="sass">
@use 'assets/theme'

nav
  @extend %panel
  padding: 16px 0 28px
  text-align: center

  @media (max-width: 1279px)
    display: none

img
  filter: drop-shadow(1px 1px 2px theme.$color-500)
  margin-bottom: 20px

li
  a
    border-top: 1px solid rgba(theme.$color-100, 0.8)
    display: inline-block
    padding: 16px
    width: 100%

    &:hover
      background-color: rgba(theme.$color-100, 0.6)

  &:last-of-type a
    border-bottom: 1px solid rgba(theme.$color-100, 0.8)

.active
  background-color: theme.$color-100

  &:hover
    background-color: theme.$color-100
</style>
