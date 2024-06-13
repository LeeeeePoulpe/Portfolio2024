<template>
  <div class="flex flex-col gap-5">
    <h1 class="text-3xl font-bold text-center text-black">Langues</h1>
    <div class="carousel overflow-y-hidden carousel-center max-w-md p-4 space-x-4 bg-slate-600 shadow-xl shadow-gray-700/50 rounded-box">
      <CarouselItem
          v-for="language in languuages"
          :key="language.index"
          :item="language"
      />
    </div>
  </div>
</template>
<script setup>
import CarouselItem from "~/views/sections/abilitySection/CarouselItem.vue";

import FR from "@/assets/img/abilitiesSection/languages/FR.svg";
import FRLogo from "@/assets/img/abilitiesSection/languages/FRLogo.svg";

import EN from "@/assets/img/abilitiesSection/languages/EN.svg";
import ENLogo from "@/assets/img/abilitiesSection/languages/ENLogo.svg";

import JP from "@/assets/img/abilitiesSection/languages/JP.svg";
import JPLogo from "@/assets/img/abilitiesSection/languages/JPLogo.svg";

const languuages = [
  {
    index: 1,
    name: "Français",
    comment: "J'ai utilisé Vue.Js pour la réalisation de mon site personnel mais aussi pour les ErgoGames ou encore LudoLabo.",
    progress: 100,
    logo: FRLogo,
    background: FR,
  },
  {
    index: 2,
    name: "Anglais",
    comment: "Je l'utilise ici même pour la réalisation de ce site, mais aussi pour les ErgoGames par exemple.",
    progress: 80,
    logo: ENLogo,
    background: EN,
  },
  {
    index: 3,
    name: "Japonais",
    comment: "HTML et CSS sont les bases de la programmation web, je les utilise pour tous mes projets.",
    progress: 70,
    logo: JPLogo,
    background: JP,
  },
];
</script>