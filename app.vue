<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
const {data: navigation} = await useAsyncData('navigation', () => fetchContentNavigation())
const {data: files} = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})
provide('navigation', navigation)
</script>

