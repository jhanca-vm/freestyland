<script setup lang="ts">
import type { Battle, Matchday } from 'types'

const { getDate } = useDate()
const selected: Set<string> = reactive(new Set())

const addRemoveSelected = (id: string) => {
  selected.has(id) ? selected.delete(id) : selected.add(id)
}

defineProps<{ data: Matchday<Battle>[] }>()
</script>

<template>
  <section>
    <div v-for="{ id, name, city, mvp, date, battles } in data" :key="id">
      <button @click="addRemoveSelected(id)">
        {{ name }}
        <span>{{ city }}</span>
        <span :class="{ rotate: selected.has(id) }" />
      </button>
      <MatchdayDetails
        v-if="selected.has(id)"
        :mvp="mvp"
        :date="getDate(date)"
        :battles="battles"
      />
    </div>
  </section>
</template>

<style scoped lang="sass">
@use 'assets/theme'

section
  @media (min-width: 768px)
    align-self: center

section > div
  background-color: rgba(theme.$color-400, 0.8)
  border-radius: 16px
  margin: 20px 0
  padding: 16px 20px

  &:last-of-type
    margin-bottom: 0

  @media (min-width: 1280px)
    margin-top: 12px

button
  color: theme.$color-600
  display: flex
  justify-content: space-between
  width: 100%

  span:last-of-type
    background-image: url('assets/icon.png')
    background-size: cover
    height: 16px
    transition-duration: 0.4s
    width: 16px

.rotate
  transform: rotate(180deg)
</style>
