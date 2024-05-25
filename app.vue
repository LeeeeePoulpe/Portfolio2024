<template>
  <SpeedInsights/>
  <homePage/>
</template>

<script>
import {SpeedInsights} from '@vercel/speed-insights/vue';
import homePage from './views/homePage.vue';

export default {
  components: {
    SpeedInsights,
    homePage,
  },
}
</script>