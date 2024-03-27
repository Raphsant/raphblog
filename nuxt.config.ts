// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {enabled: true},
    extends: ['@nuxt/ui-pro'],
    modules: ['@nuxt/ui', "@nuxtjs/tailwindcss", '@nuxthq/studio'],
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


    }
})
