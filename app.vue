<template>
  <SpeedInsights/>
  <inDevPageDesktop/>
</template>

<script setup>
import {SpeedInsights} from '@vercel/speed-insights/vue';
import inDevPageMobile from "~/views/inDevPageMobile.vue";
import inDevPageDesktop from "~/views/inDevPageDesktop.vue";

</script>
<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },

  mounted() {
    this.$nextTick(function () {
      console.log('mounted');
      window.addEventListener('resize', this.updateWindowWidth);
    });
  },

  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    isDesktop() {
      return this.windowWidth > 1110;
    },
  },
}

</script>