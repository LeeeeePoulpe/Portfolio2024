<template>
  <SpeedInsights/>
  <HomePage/>
  <InDevPageDesktop v-if="isDesktop"/>
  <InDevPageMobile v-else/>
</template>

<script setup>
import {SpeedInsights} from '@vercel/speed-insights/vue';
import HomePage from './views/HomePage.vue';
import InDevPageDesktop from "~/views/inDevPage/InDevPageDesktop.vue";
import InDevPageMobile from "~/views/inDevPage/InDevPageMobile.vue";

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0);

const updateWindowWidth = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth;
  }
};

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowWidth);
});

const isDesktop = computed(() => windowWidth.value > 800);
</script>