<script setup lang="ts">

</script>

<template>
  <ULandingHero title="Raph Santana" description="Full stack developer specialized in making web apps in Nuxt"
                :links="[{ label: 'My Github', icon: 'i-simple-icons-github', color: 'gray', size: 'lg' }, {label: 'My Projects', icon: 'i-heroicons-computer-desktop'} , {label: 'My Blog', icon: 'i-heroicons-chat-bubble-left'}]">
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
    <ULandingGrid>
      <ULandingCard class="col-span-6 row-span-2" icon="i-heroicons-swatch" title="Alpha Circuit"
                    description="Website made for the PCB selling company Alpha circuit, customers can learn about the company here and also request quotes or sent direct emails through the forms. Made using Nuxt3, styled with Tailwind, hosted in Netlify.">
        <img
            class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
            src="https://media.discordapp.net/attachments/684442369063780362/1155983159205306428/image.png?ex=66146536&is=6601f036&hm=31eeccea3ff87896f5f92d42f12fac83cb4d06876f32667660c76c5b0e16c26a&=&format=webp&quality=lossless&width=550&height=262"
            alt=""></ULandingCard>
      <ULandingCard class="col-span-6 row-span-4" icon="i-heroicons-wrench-screwdriver" title="EAC Simulator"
                    description="Financial simulator made for the Economic Awareness Council of Chicago by Columbia College Chicago Design Lab, with my as the lead Developer. This web application was developed to help students in lower income communities learn about economic literacy and the importance of investing and saving. This was developed using React and vanilla Css for the styling.">
        <img class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
             src="https://media.discordapp.net/attachments/684442343168147529/1222440616408125449/image.png?ex=6616398a&is=6603c48a&hm=1430cf95772c23d02d9f8bd911c101592f65c38ab5b7f3421898007d26bc24eb&=&format=webp&quality=lossless&width=1004&height=561"
             alt=""></ULandingCard>
      <ULandingCard class="col-span-6 row-span-4" icon="i-heroicons-face-smile" title="Medbook (work in progress)"
                    description="Booking & Administrative system for a primary healthcare provider, made from the ground up with Nuxt3, NuxtUI, Express and Postgres, features a very solid and robust Auth system, whatsapp integration, statistics generation and more">
        <img
            class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
            src="https://media.discordapp.net/attachments/684442343168147529/1222441192743243806/image.png?ex=66163a14&is=6603c514&hm=0a5efb5be1a445fc012c9286c22932e9daecb1733262f37c9605edecbbed5a4f&=&format=webp&quality=lossless&width=1004&height=560"
            alt="">
      </ULandingCard>
      <ULandingCard class="col-span-6 row-span-2" icon="i-heroicons-computer-desktop" title="Parkway"
                    description="Final project for my Application Development class. Project involved in making a user friendly version of the National Park Service website (NPS) using their API, this website was developed with React and used Tailwind for the styling.">
        <img class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
             src="https://cdn.discordapp.com/attachments/684442343168147529/1222441006339854407/image.png?ex=661639e7&is=6603c4e7&hm=cf22163cb9fe1355ca98fc2454e6f83b275a57eb6278e08a01c8faf40ff60ae7&"
             alt=""></ULandingCard>
    </ULandingGrid>
  </UContainer>
</template>

<style scoped>

</style>