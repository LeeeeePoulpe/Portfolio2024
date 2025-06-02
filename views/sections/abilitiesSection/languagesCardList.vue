<template>
  <div class="flex flex-col gap-8">
    <h1 class="text-5xl font-bold">Langues</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card v-for="langage in languuages" :key="langage.index" :item="langage" />
    </div>
  </div>
</template>
w
<script setup>
import Card from "./Card.vue";

import FRLogo from "@/assets/img/abilitiesSection/languages/FRLogo.svg";
import ENLogo from "@/assets/img/abilitiesSection/languages/ENLogo.svg";
import JPLogo from "@/assets/img/abilitiesSection/languages/JPLogo.svg";

const languuages = [
  {
    index: 1,
    name: "Français",
    comment:
      "Ma langue maternelle, je l'utilise tous les jours pour communiquer avec mes proches et mes collègues.",
    logo: FRLogo,
  },
  {
    index: 2,
    name: "Anglais",
    comment:
      "Je l'utilise pour communiquer avec des personnes du monde entier et pour lire des articles techniques.",
    logo: ENLogo,
  },
  {
    index: 3,
    name: "Japonais",
    comment:
      "Je l'apprend depuis 3 ans, découvert avec les mangas et les animes, j'ai eu l'occasion de le pratiquer lors de mon voyage au Japon.",
    logo: JPLogo,
  },
];
</script>