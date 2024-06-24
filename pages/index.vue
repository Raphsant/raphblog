<script setup lang="ts">

</script>

<template>
  <ULandingHero description="Full stack developer specialized in making web apps in Nuxt"
                :links="[{ label: 'My Github', icon: 'i-simple-icons-github', color: 'gray', size: 'lg', to: 'https://github.com/raphsant', target: '_blank' }, {label: 'My Projects', icon: 'i-heroicons-computer-desktop', to: '/#projects'} , {label: 'My Blog', icon: 'i-heroicons-chat-bubble-left', to: '/blog'},{label: 'My services', icon: 'i-heroicons-currency-dollar', to: '/services'}]">
    <template #title>
     <div class="justify-center items-center flex">
       <img class="w-1/3 text-center" src="/img/logo.webp" alt="">
     </div>
    </template>
  </ULandingHero>
  <UContainer class="space-y-6">
    <ULandingCard>
      <ULandingLogos align="center">
        <UIcon name="i-simple-icons-nuxtdotjs" class="w-10 h-10 flex-shrink-0"/>
        <UIcon name="i-simple-icons-javascript" class="w-10 h-10 flex-shrink-0"/>
        <UIcon name="i-simple-icons-tailwindcss" class="w-10 h-10 flex-shrink-0"/>
        <UIcon name="i-simple-icons-express" class="w-10 h-10 flex-shrink-0"/>
        <UIcon name="i-simple-icons-postgresql" class="w-10 h-10 flex-shrink-0"/>
      </ULandingLogos>
    </ULandingCard>
    <UDivider label="Projects" :ui="{ label: 'text-primary-500 text-xl font-bold dark:text-primary-400' }"/>
    <ULandingGrid id="projects">
      <ULandingCard class="col-span-6 row-span-2"  title="Alpha Circuit"
                    description="Website made for the PCB selling company Alpha circuit, customers can learn about the company here and also request quotes or sent direct emails through the forms. Made using Nuxt3, styled with Tailwind, hosted in Netlify.">
        <img
            class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
            src="/img/img1%20(1).webp"
            alt=""></ULandingCard>
      <ULandingCard class="col-span-6 row-span-4"  title="EAC Simulator"
                    description="Financial simulator made for the Economic Awareness Council of Chicago by Columbia College Chicago Design Lab, with my as the lead Developer. This web application was developed to help students in lower income communities learn about economic literacy and the importance of investing and saving. This was developed using React and vanilla Css for the styling.">
        <img class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
             src="/img/img1%20(2).webp"

             alt=""></ULandingCard>
      <ULandingCard class="col-span-6 row-span-4"  title="Aptsys (work in progress)"
                    description="Booking & Administrative system for a primary healthcare provider, made from the ground up with Nuxt3, NuxtUI, Express and Postgres, features a very solid and robust Auth system, whatsapp integration, statistics generation and more">
        <img
            class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
            src="/img/img1%20(4).webp"
            alt="">
      </ULandingCard>
      <ULandingCard class="col-span-6 row-span-2"  title="Parkway"
                    description="Final project for my Application Development class. Project involved in making a user friendly version of the National Park Service website (NPS) using their API, this website was developed with React and used Tailwind for the styling.">
        <img class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
             src="/img/img1%20(3).webp"
             alt=""></ULandingCard>
    </ULandingGrid>
  </UContainer>
</template>

<style scoped>

</style>