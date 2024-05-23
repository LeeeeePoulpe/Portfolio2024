<template>
  <SpeedInsights/>
  <inDevPageDesktop v-if="isDesktop"/>
  <inDevPageMobile v-else/>
</template>

<script>
import {SpeedInsights} from '@vercel/speed-insights/vue';
import inDevPageMobile from "~/views/inDevPageMobile.vue";
import inDevPageDesktop from "~/views/inDevPageDesktop.vue";

export default {
  components: {
    SpeedInsights,
    inDevPageMobile,
    inDevPageDesktop,
  },

  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },

  computed: {
    isDesktop() {
      return this.windowWidth > 1110;
    },
  },
}

</script>