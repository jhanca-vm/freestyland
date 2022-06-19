<script setup lang="ts">
useHead({ htmlAttrs: { lang: 'es' } })
</script>

<template>
  <Nav />
  <Menu />
  <NuxtPage />
</template>

<style lang="sass">
@use 'assets/theme'

@each $name, $weight in theme.$fonts
  @font-face
    font-display: block
    font-family: $name
    font-weight: $weight
    src: url('assets/fonts/#{$name}.ttf') format('truetype')

*
  box-sizing: border-box
  font-family: inherit
  margin: 0
  padding: 0

html, body, #__nuxt
  min-width: 360px

  @media (min-width: 1280px)
    height: 100vh

html
  font-size: 62.5%

body
  background-color: theme.$color-100
  color: theme.$color-500
  font-family: 'Fresca', sans-serif
  font-size: 1.6rem

main
  @extend %panel
  padding: 20px 20px 28px

  @media (max-width: 767px)
    margin: 0 auto
    max-width: 480px

h1, h2, a, th, b, select
  color: theme.$color-600
  font-family: 'Kreon', serif

h1
  font-size: 1.8rem

h2
  font-size: 1.6rem

ul
  list-style: none

a
  color: inherit
  font-weight: bold
  text-decoration: none

button
  background: none
  border: none
  color: inherit
  font-size: inherit

#__nuxt
  @media (min-width: 1280px)
    column-gap: 20px
    display: grid
    grid-template-columns: 1fr 4fr
    padding: 16px
</style>
