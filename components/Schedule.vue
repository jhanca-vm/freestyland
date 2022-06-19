<script setup lang="ts">
import type { Battle, Matchday } from 'types'

const { getDate, getTime } = useDate()

defineProps<{ data: Matchday<Battle>[] }>()
</script>

<template>
  <section>
    <h1>Próximas Jornadas</h1>
    <div class="matchdays">
      <section
        v-for="{ id, league, name, city, date, battles } in data"
        :key="id"
      >
        <h2>{{ league }}</h2>
        <div>
          <p>{{ name }}<br />{{ city }}</p>
          <p>{{ getDate(date) }}<br />{{ getTime(date) }}</p>
        </div>
        <div>
          <p v-for="{ data } in battles" :key="Object.keys(data).join('-')">
            {{ Object.keys(data)[0] }}<span>vs</span>{{ Object.keys(data)[1] }}
          </p>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped lang="sass">
@use 'assets/theme'

h1
  margin: 8px 0 16px
  text-align: center

  @media (min-width: 1280px)
    margin-bottom: 28px
    opacity: 0.96

.matchdays
  display: grid
  text-align: center

  @media (min-width: 768px)
    display: block
    column-gap: 20px
    columns: 2

  @media (min-width: 1024px)
    columns: 3

  section
    background-color: rgba(theme.$color-400, 0.8)
    border-radius: 16px
    break-inside: avoid
    margin-bottom: 20px
    padding: 16px 0 8px

  div:first-of-type
    border-bottom: 2px solid theme.$color-200
    border-top: 2px solid theme.$color-200
    display: flex
    justify-content: space-around
    line-height: 1.5
    margin-top: 16px
    padding: 12px

  div:last-of-type
    padding: 0 16px

    p
      border-bottom: 1px solid theme.$color-200
      display: grid
      grid-template-columns: 1fr max-content 1fr
      padding: 16px 0

      &:last-of-type
        border-bottom: none
</style>
