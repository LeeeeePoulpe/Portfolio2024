<template>
  <SpeedInsights/>
  <inDevPageDesktop />
</template>

<script setup>
import {SpeedInsights} from '@vercel/speed-insights/vue';
import inDevPageMobile from "~/views/inDevPageMobile.vue";
import inDevPageDesktop from "~/views/inDevPageDesktop.vue";

</script>