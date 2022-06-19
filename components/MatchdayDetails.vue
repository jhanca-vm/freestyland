<script setup lang="ts">
import type { Battle } from 'types'

defineProps<{ mvp: string; date: string; battles: Battle[] }>()
</script>

<template>
  <div class="details">
    <div>
      <p>🌟 {{ mvp }}</p>
      <p>🗓️ {{ date }}</p>
    </div>
    <ul>
      <li v-for="{ data } in battles" :key="Object.keys(data).join('-')">
        <p>
          <span>{{ data[Object.keys(data)[0]].points }}</span>
          {{ Object.keys(data)[0] }}
          <br />
          <b>{{ data[Object.keys(data)[0]].ptb }}</b>
        </p>
        vs
        <p>
          {{ Object.keys(data)[1] }}
          <span>{{ data[Object.keys(data)[1]].points }}</span>
          <br />
          <b>{{ data[Object.keys(data)[1]].ptb }}</b>
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="sass">
@use 'assets/theme'

li
  align-items: center
  border-bottom: 1px solid theme.$color-200
  color: theme.$color-600
  display: grid
  grid-template-columns: 1fr max-content 1fr
  line-height: 1.5
  padding: 8px 0
  text-align: center

  &:last-of-type
    border-bottom: none

  span
    background-color: theme.$color-200
    border-radius: 50%
    padding: 2px 8px

  b
    color: theme.$color-500

.details div
  background-color: theme.$color-200
  border: 1px solid rgba(theme.$color-400, 0.8)
  display: flex
  justify-content: space-around
  margin: 16px -20px 8px
  padding: 12px 0
</style>
