<template>
  <div class="flex flex-col items-center bg-slate-50 p-6 gap-10 drop-shadow-md">
    <div class="chat chat-start self-start justify-self-end">
      <div class="chat-bubble drop-shadow-md">
        Voici quelques-unes de mes compétences en informatique et autres.
      </div>
    </div>

    <div
      class="flex flex-col justify-center items-center w-10/12 m-auto mb-10 gap-10"
    >
      <TechnoCardList />
      <LanguagesCardList />
    </div>
  </div>
</template>

<script setup>
import TechnoCardList from "./TechnoCardList.vue";
import LanguagesCardList from "./languagesCardList.vue";
</script>
