<template>
  <SpeedInsights/>
  <inDevPageDesktop v-if="isDesktop" />
  <inDevPageMobile v-else />
</template>

<script>
import {SpeedInsights} from '@vercel/speed-insights/vue';
import inDevPageMobile from "~/views/inDevPageMobile.vue";
import inDevPageDesktop from "~/views/inDevPageDesktop.vue";

export default {
  components: {
    SpeedInsights,
    inDevPageMobile,
    inDevPageDesktop
  },

  data() {
    return {
      windowWidth: 0,
    };
  },
  computed: {
    isDesktop() {
      return this.windowWidth > 1110;
    },
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('resize', this.updateWindowWidth);
    });
  },
  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowWidth);
  },
}
</script>