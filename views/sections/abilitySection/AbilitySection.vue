<template>
  <div class="flex flex-col items-center bg-slate-50 p-6 gap-10">
    <div class="chat chat-start self-start justify-self-end">
      <div class="chat-bubble drop-shadow-md">
        Voici quelques-unes de mes compétences en informatique et autres.
      </div>
    </div>

    <div>
      <CarouselAbilities/>
<!--      <div class="flex justify-center w-full py-2 gap-2">-->
<!--        <a v-for="ability in abilities" :href="ability.index" class="btn btn-xs">{{ ability.index }}</a>-->
<!--      </div>-->
    </div>

  </div>
</template>

<script setup>
import CarouselAbilities from "~/views/sections/abilitySection/CarouselAbilities.vue";

</script>