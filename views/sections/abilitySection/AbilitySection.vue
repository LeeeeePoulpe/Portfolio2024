<template>
  <div class="flex flex-col items-center bg-slate-50 p-6 gap-10">
    <div class="chat chat-start self-start justify-self-end">
      <div class="chat-bubble drop-shadow-md">
        Voici quelques-unes de mes compétences en informatique et autres.
      </div>
    </div>

    <div class="flex flex-wrap justify-between items-center w-10/12 m-auto">
      <CarouselAbilities/>
      <CarouselLanguage/>
    </div>

  </div>
</template>

<script setup>
import CarouselAbilities from "~/views/sections/abilitySection/CarouselAbilities.vue";
import CarouselLanguage from "~/views/sections/abilitySection/CarouselLanguages.vue";
</script>