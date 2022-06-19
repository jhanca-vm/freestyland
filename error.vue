<script setup lang="ts">
interface Props {
  error: { statusCode: number; statusMessage: string }
}

defineProps<Props>()
</script>

<template>
  <Head>
    <Title>{{ error.statusCode }}: {{ error.statusMessage }}</Title>
  </Head>
  <main>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.statusMessage }}</p>
    <button @click="clearError({ redirect: '/' })">Ir al inicio</button>
  </main>
</template>

<style scoped lang="sass">
@use 'assets/theme'

main
  align-items: center
  display: flex
  flex-direction: column
  grid-column-end: span 2
  justify-content: center

  @media (max-width: 1279px)
    min-height: 100vh

h1
  font-size: 4rem

p
  font-size: 2rem

button
  background-color: theme.$color-600
  border-radius: 4px
  color: theme.$color-100
  margin: 4rem 0
  padding: 0.4rem 1.2rem
</style>
