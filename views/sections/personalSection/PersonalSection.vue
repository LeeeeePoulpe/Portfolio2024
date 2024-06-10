<template>
  <div class="min-h-screen flex justify-start xl:justify-center bg-slate-50 p-8 drop-shadow-md">
    <div class="xl:w-10/12 flex flex-col justify-between">
      <div class="flex flex-col mb-12">
        <div class="chat chat-start self-start">
          <div class="chat-bubble chat-bubble--intro chat-bubble--full drop-shadow-md">Pour commencer, quelques
            informations personnelles pour que vous appreniez à me connaître.
          </div>
        </div>
        <PersonalAccordion/>
      </div>
      <div class="chat chat-start self-start justify-self-end">
        <div class="chat-bubble drop-shadow-md">
          Après ces quelques informations me concernant,
          je vous présente les différents projets que j’ai réalisés.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PersonalAccordion from "~/views/sections/personalSection/PersonalAccordion.vue";
</script>