<template>
  <div class="min-h-screen flex flex-col justify-between items-start bg-slate-50 p-6">
    <div class="mb-12">
      <div class="chat chat-start drop-shadow-md">
        <div class="chat-bubble chat-bubble--full">Ici vous avez mes informations personnelles</div>
      </div>
      <PersonalAccordion/>
    </div>
    <div class="chat chat-start">
      <div class="chat-bubble drop-shadow-md">
        Vous avez pu lire les informations me concernant. <br>
        Maintenant je vais vous présenter les différents projets que j’ai eu l’occasion de réaliser.
      </div>
    </div>
  </div>

</template>

<script>
import PersonalCollapses from "~/views/sections/personalSection/PersonalCollapses.vue";
import PersonalAccordion from "~/views/sections/personalSection/PersonalAccordion.vue";

export default {
  name: "PersonalSection",
  components: {PersonalAccordion, PersonalCollapses}
}
</script>

<style lang="scss" scoped>

</style>