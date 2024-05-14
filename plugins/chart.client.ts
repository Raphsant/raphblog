import { createChart } from 'lightweight-charts'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.createChart = createChart
})