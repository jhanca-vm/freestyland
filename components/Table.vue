<script setup lang="ts">
import type { MC } from 'types'

defineProps<{ data: MC[] }>()
</script>

<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Batallas</th>
        <th>PTB</th>
        <th>Puntos</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ name, battles, ptb, points } in data" :key="name">
        <td>{{ name }}</td>
        <td>{{ battles }}</td>
        <td>{{ ptb }}</td>
        <td>{{ points }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="sass">
@use 'assets/theme'

table
  border-spacing: 0
  height: fit-content
  margin-top: 4px
  text-align: center
  width: 100%

  @media (min-width: 768px)
    position: sticky
    top: 60px

  @media (min-width: 1280px)
    top: 12px

th, td
  background-color: rgba(theme.$color-400, 0.8)
  padding: 12px 0

th
  line-height: 1

  &:first-of-type
    min-width: 100px
    position: relative

    &::before
      background-color: theme.$color-100
      bottom: 0
      content: 'Tabla de Posiciones'
      font-size: 1.4rem
      left: 0
      padding-top: 12px
      position: absolute
      right: 0
      top: 0

      @media (min-width: 1280px)
        background-color: #3a4352

  &:last-of-type
    border-top-right-radius: 16px

th:first-of-type::before, tbody tr:last-of-type td:last-of-type
  border-bottom-right-radius: 16px

th:nth-of-type(2), tbody tr:first-of-type td:first-of-type
  border-top-left-radius: 16px

td
  border-top: 1px solid #3a4352

tbody tr:last-of-type td:first-of-type
  border-bottom-left-radius: 16px

tbody tr td:first-of-type
  color: theme.$color-600
</style>
