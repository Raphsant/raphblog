<template>
  <UHeader>
    <template #logo>
      Raph<span class="text-primary">Sant</span>
    </template>
    <template #right>
      <UColorModeButton />

      <UButton to="https://github.com/nuxt/ui" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" />
    </template>
    <template #panel>
      <UNavigationTree :links="links"/>
    </template>
  </UHeader>

  <UMain>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UMain>

  <UFooter>
    <template #center>
      Copyright © Raphsant {{ new Date().getFullYear() }}
    </template>
  </UFooter>
</template>

<script setup>
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