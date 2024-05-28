<template>
  <div class="min-h-screen flex flex-col justify-between bg-slate-100 p-6">
    <div class="mb-12">
      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble--intro drop-shadow-md">Voila la liste des projet auxquels j’ai participé ainsi que la frise chronologique des projets pour pouvoir les situer</div>
      </div>
      <ProjectsTimeLine v-if="isDesktop"/>
    </div>
  </div>
</template>

<script>

import ProjectsTimeLine from "~/views/sections/projectsSection/ProjectsTimeLine.vue";

export default {
  name: 'ProjectsSection',
  components: {
    ProjectsTimeLine
  },

  data() {
    return {
      windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
    };
  },

  mounted() {
    this.$nextTick(function () {
      window.addEventListener('resize', this.updateWindowWidth);
    });
  },

  computed: {
    isDesktop() {
      return this.windowWidth > 1250;
    },
  },

  methods: {
    updateWindowWidth() {
      if (typeof window !== 'undefined') {
        this.windowWidth = window.innerWidth;
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowWidth);
  },
}
</script>

<style lang="scss" scoped>
.projects-background {
  background: linear-gradient(180deg, #AA8DC6 0%, #C9B7DA 43.5%, #F2F2F2 100%);
}
</style>