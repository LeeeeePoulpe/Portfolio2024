<template>
  <div class="min-h-screen flex flex-col justify-between projects-background p-6">
    <div class="mb-12">
      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble--intro">Voila la liste des projet auxquels j’ai participé ainsi que la frise chronologique des projets pour pouvoir les situer</div>
      </div>
      <ProjectsTimeLine/>
    </div>
  </div>
</template>

<script>

import ProjectsTimeLine from "~/views/sections/projectsSection/ProjectsTimeLine.vue";

export default {
  name: 'ProjectsSection',
  components: {
    ProjectsTimeLine

  }
}
</script>

<style lang="scss" scoped>
.projects-background {
  background: linear-gradient(180deg, #AA8DC6 0%, #C9B7DA 43.5%, #F2F2F2 100%);
}
</style>