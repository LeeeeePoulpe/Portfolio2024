<template>
  <SpeedInsights/>
  <div class="background-content-white">
    <HomePage/>
  </div>
</template>

<script setup>
import {SpeedInsights} from '@vercel/speed-insights/vue';
import HomePage from './views/HomePage.vue';
</script>

<style lang="scss" scoped>
.background-content-white {
  background: var(--Gradiant-contact, linear-gradient(72deg, #9C3D5B 0%, #772EA8 50%, #1D2671 100%));
}

.background-content-black {
  background: radial-gradient(150.39% 106.02% at 30.73% 2.6%, #18121E 0%, #27143A 50%, #261338 100%);
}
</style>