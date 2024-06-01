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

<script setup>
import ProjectsTimeLine from "~/views/sections/projectsSection/ProjectsTimeLine.vue";

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

const isDesktop = computed(() => windowWidth.value > 1250);
</script>

<style lang="scss" scoped>
.projects-background {
  background: linear-gradient(180deg, #AA8DC6 0%, #C9B7DA 43.5%, #F2F2F2 100%);
}
</style>