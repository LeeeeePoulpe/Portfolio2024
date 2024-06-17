<template>
  <div class="flex flex-col gap-3">
    <h1 class="text-5xl line- font-bold language-title">Langues</h1>
    <div class="carousel overflow-y-scroll carousel-center p-4 space-x-4 bg-slate-600 shadow-xl shadow-gray-700/50 rounded-box">
      <CarouselItem
          v-for="language in languuages"
          :key="language.index"
          :item="language"
      />
    </div>
  </div>
</template>
<script setup>
import CarouselItem from "~/views/sections/abilitiesSection/CarouselItem.vue";

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
    comment: "Ma langue maternelle, je l'utilise tous les jours pour communiquer avec mes proches et mes collègues.",
    progress: 100,
    logo: FRLogo,
    background: FR,
  },
  {
    index: 2,
    name: "Anglais",
    comment: "Je l'utilise pour communiquer avec des personnes du monde entier et pour lire des articles techniques.",
    progress: 80,
    logo: ENLogo,
    background: EN,
  },
  {
    index: 3,
    name: "Japonais",
    comment: "Je l'apprend depuis 3 ans, découvert avec les mangas et les animes, j'ai eu l'occasion de le pratiquer lors de mon voyage au Japon.",
    progress: 70,
    logo: JPLogo,
    background: JP,
  },
];
</script>

<style lang="scss" scoped>
.language-title {
  background: linear-gradient(180deg, #7F00FF 20%, #000 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 55px;
}
</style>