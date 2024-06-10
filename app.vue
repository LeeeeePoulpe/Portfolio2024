<template>
  <SpeedInsights/>
  <HomePage/>
  <InProgressPage/>
</template>

<script setup>
import {SpeedInsights} from '@vercel/speed-insights/vue';
import HomePage from './views/HomePage.vue';
import InProgressPage from "~/views/inDevPage/InProgressPage.vue";
</script>