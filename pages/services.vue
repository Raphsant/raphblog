<script setup lang="ts">

</script>

<template>
  <UPage>
    <ULandingHero>
      <template #title>
        <div>Need a website?</div>
      </template>
      <template #description>
        Blog? Landing Page? Documentation? Product Page? I got you covered. 💜
      </template>
    </ULandingHero>
    <UPricingGrid class="px-10">
      <UPricingCard
          title="Landing Page 🛬"
          description="For getting more traffic to your business/product."
          price="$299"
          discount=""
          cycle="One single payment, small fee for updates, hosting and maintenance"
          :highlight="false"
          :button="{ label: 'Buy now' }"
          orientation="vertical"
          align="bottom"
          :features="['Fast Delivery', 'Updated ASAP when requested', 'If requested, we can host the website']"
      />
      <!--      <UPricingCard-->
      <!--          title="Blog 📜"-->
      <!--          description="Your own minimalist personal blog, where you are in total control."-->
      <!--          price="$399"-->
      <!--          discount=""-->
      <!--          cycle="One single payment, small fee for updates, hosting and maintenance"-->
      <!--          :highlight="false"-->
      <!--          :button="{ label: 'Buy now' }"-->
      <!--          orientation="vertical"-->
      <!--          align="bottom"-->
      <!--          :features="['Updated ASAP when requested', 'If requested, we can host the website', 'Powered by Nuxt Content', 'Detailed guide on how to post new content', 'Free unlimited support for 1 year']"-->
      <!--      />-->
      <UPricingCard
          title="Portfolio website 💼"
          description="Show your skills to the world, we will do the rest."
          price="$299"
          discount=""
          cycle="One single payment, small fee for updates, hosting and maintenance"
          :highlight="false"
          :button="{ label: 'Buy now' }"
          orientation="vertical"
          align="bottom"
          :features="['Updated ASAP when requested', 'If requested, we can host the website', 'Free unlimited support & updates for 1 year', 'Contact forms']"
      />
      <UPricingCard
          title="Full website 🕸️"
          description="Full website for your organization, business or company"
          price="Contact for pricing"
          discount=""
          :highlight="false"
          :button="{ label: 'Buy now' }"
          orientation="vertical"
          align="bottom"
          :features="['Feature list to be disclosed over email',]"
      />
    </UPricingGrid>

  </UPage>
</template>

<style scoped>

</style>