<template>
  <div class="min-h-screen flex flex-col justify-between items-start personal-background p-6">
    <div class="mb-12">
      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble--full">Ici vous avez mes informations personnelles</div>
      </div>
      <PersonalCollapses/>
    </div>
    <div class="chat chat-start">
      <div class="chat-bubble">
        Vous avez pu lire les informations me concernant. <br>
        Maintenant je vais vous présenter les différents projets que j’ai eu l’occasion de réaliser.
      </div>
    </div>
  </div>

</template>

<script>
import PersonalCollapses from "~/views/sections/personalSection/PersonalCollapses.vue";

export default {
  name: "PersonalSection",
  components: {PersonalCollapses}
}
</script>

<style lang="scss" scoped>
.personal-background {
  background: linear-gradient(180deg, #C5C3C3 0%, #F2F2F2 100%);
}
</style>