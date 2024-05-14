// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {enabled: true},
    extends: ['@nuxt/ui-pro'],
    modules: ['@nuxt/content', '@nuxt/ui', "@nuxtjs/tailwindcss", '@nuxthq/studio', '@vueuse/nuxt'],
    ui: {
        icons: ['mdi', 'simple-icons', 'heroicons'],
        // @ts-ignore
        variables: {
            light: {
                background: '255 255 255',
                foreground: 'var(--color-gray-700)'
            },
            dark: {
                background: 'var(--color-gray-900)',
                foreground: 'var(--color-gray-200)'
            },
            header: {
                height: '4rem'
            }
        },
        gray: 'cool',


    },
    router: {
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition;
            } else if (to.hash) {
                return {
                    el: to.hash,
                    behavior: 'smooth',
                };
            } else {
                return {top: 0};
            }
        }
    }
})
