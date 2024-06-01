<template>
  <div class="min-h-screen flex justify-start xl:justify-center bg-slate-50 p-8 drop-shadow-md">
    <div class="xl:w-10/12 flex flex-col justify-between">
      <div class="flex flex-col mb-12">
        <div class="chat chat-start self-start">
          <div class="chat-bubble chat-bubble--intro chat-bubble--full drop-shadow-md">Ici vous avez mes informations personnelles</div>
        </div>
        <PersonalAccordion/>
      </div>
      <div class="chat chat-start self-start justify-self-end">
        <div class="chat-bubble drop-shadow-md">
          Vous avez pu lire les informations me concernant. <br>
          Maintenant je vais vous présenter les différents projets que j’ai eu l’occasion de réaliser.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalCollapses from "~/views/sections/personalSection/PersonalCollapses.vue";
import PersonalAccordion from "~/views/sections/personalSection/PersonalAccordion.vue";

export default {
  name: "PersonalSection",
  components: {
    PersonalAccordion,
    PersonalCollapses
  },
}
</script>

<style lang="scss" scoped>

</style>