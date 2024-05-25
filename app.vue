<template>
  <SpeedInsights/>
  <homePage/>
</template>

<script>
import {SpeedInsights} from '@vercel/speed-insights/vue';
import homePage from './views/HomePage.vue';

export default {
  components: {
    SpeedInsights,
    homePage,
  },
}
</script>