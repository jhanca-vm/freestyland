<script setup lang="ts">
const { path } = useRoute()
const { getImage } = useStorage()

defineProps<{ title: string; description: string }>()
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="description" />
    <Meta property="og:title" :content="title" />
    <Meta property="og:description" :content="description" />
    <Meta property="og:url" :content="`https://freestyland.site${path}`" />
    <Meta property="og:image" :content="getImage('banner.jpg')" />
    <Meta property="og:site_name" content="Freestyland" />
    <Meta property="og:type" content="website" />
  </Head>
</template>
