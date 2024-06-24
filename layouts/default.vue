<script setup lang="ts">
const links = [{
  label: 'Home',
  icon: 'i-heroicons-book-open',
  to: '/'
}, {
  label: 'Blog',
  icon: 'i-simple-icons-googledocs',
  to: '/blog'
}, {
  label: 'LinkedIn',
  icon: 'i-simple-icons-linkedin',
  to: '/releases'
}, {
  label: 'Github',
  icon: 'i-simple-icons-github',
  to: '/releases'
}]
</script>

<template>
  <UHeader>
    <template #logo>
      <img class="w-1/12" src="/img/logonav.webp">
    </template>
    <template #right>
      <UColorModeButton />

      <UButton to="https://github.com/Raphsant" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" />
    </template>
    <template #panel>
      <UNavigationTree :links="links"/>
    </template>
  </UHeader>

  <UMain>
<slot/>
  </UMain>

  <UFooter>
    <template #center>
      Copyright © Raphsant {{ new Date().getFullYear() }}
    </template>
  </UFooter>
</template>

<style scoped>

</style>