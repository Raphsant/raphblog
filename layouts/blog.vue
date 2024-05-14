<script setup lang="ts">
import type {NavItem} from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation')
const links = [{
  label: 'Home',
  //@ts-ignore
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
      Raph<span class="text-primary">Sant</span>
    </template>
    <template #right>
      <UColorModeButton/>

      <UButton to="https://github.com/nuxt/ui" target="_blank" icon="i-simple-icons-github" color="gray"
               variant="ghost"/>
    </template>
    <template #panel>
      <UNavigationTree :links="links"/>
    </template>
  </UHeader>

  <UMain>
    <UContainer>
      <UPage>
        <template #left>
          <UAside>
            <UNavigationTree :links="mapContentNavigation(navigation)"/>
          </UAside>
        </template>

        <slot/>
      </UPage>
    </UContainer>
  </UMain>

  <UFooter>
    <template #center>
      Copyright © Raphsant {{ new Date().getFullYear() }}
    </template>
  </UFooter>
</template>