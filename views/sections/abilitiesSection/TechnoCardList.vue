<template>
  <div class="flex flex-col gap-8">
    <h1 class="text-5xl font-bold">Technologies</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card v-for="ability in abilities" :key="ability.index" :item="ability" />
    </div>
  </div>
</template>

<script setup>
import Card from "~/views/sections/abilitiesSection/Card.vue";
import ReactLogo from "@/assets/img/abilitiesSection/techno/ReactLogo.svg";
import VueJsLogo from "@/assets/img/abilitiesSection/techno/VueJsLogo.svg";
import JavaScriptLogo from "@/assets/img/abilitiesSection/techno/JavaScriptLogo.svg";
import GitLogo from "@/assets/img/abilitiesSection/techno/GitLogo.svg";
import PHPLogo from "@/assets/img/abilitiesSection/techno/PHPLogo.svg";
import JavaLogo from "@/assets/img/abilitiesSection/techno/JavaLogo.svg";
import SQLLogo from "@/assets/img/abilitiesSection/techno/SQLLogo.svg";
import NuxtLogo from "@/assets/img/abilitiesSection/techno/NuxtLogo.svg";
import ReduxLogo from "@/assets/img/abilitiesSection/techno/ReduxLogo.svg";
import UnityLogo from "@/assets/img/abilitiesSection/techno/UnityLogo.svg";
import TypeScriptLogo from "@/assets/img/abilitiesSection/techno/TypeScriptLogo.svg";
import V0Logo from "@/assets/img/abilitiesSection/techno/v0Logo.svg";

const abilities = [
  {
    index: 1,
    name: "TypeScript",
    comment: "J'utilise TypeScript pour améliorer la robustesse et la maintenabilité de mes projets JavaScript.",
    logo: TypeScriptLogo,
  },
  {
    index: 2,
    name: "V0",
    comment: "V0 est un outil ou une technologie que j'ai utilisé.",
    logo: V0Logo,
  },
  {
    index: 3,
    name: "Redux",
    comment: "J'ai utilisé Redux pour la gestion de l'état global dans des applications React lors de mon alternance.",
    logo: ReduxLogo,
  },
  {
    index: 4,
    name: "React",
    comment:
      "React et TypeScript sont les technologies que j'ai utilisé durant toutes mon alternance chez Enogrid.",
    logo: ReactLogo,
  },
  {
    index: 5,
    name: "Nuxt",
    comment: "J'ai utilisé Nuxt pour développer ce portfolio et d'autres projets Vue.js.",
    logo: NuxtLogo,
  },
  {
    index: 6,
    name: "Vue.Js",
    comment:
      "J'ai utilisé Vue.Js pour la réalisation de mon site personnel mais aussi pour les ErgoGames ou encore LudoLabo.",
    logo: VueJsLogo,
  },
  {
    index: 7,
    name: "JavaScript",
    comment:
      "Je l'utilise ici même pour la réalisation de ce site, mais aussi pour les ErgoGames par exemple.",
    logo: JavaScriptLogo,
  },
  {
    index: 8,
    name: "Unity",
    comment: "J'ai utilisé Unity pour le développement de jeux vidéo, notamment pour des Game Jams.",
    logo: UnityLogo,
  },
  {
    index: 9,
    name: "Git",
    comment:
      "Git est un logiciel de gestion de versions que j'utilise tout le temps pour la gestion de mes projets.",
    logo: GitLogo,
  },
  {
    index: 10,
    name: "PHP",
    comment:
      "PHP est un langage de programmation que j'ai utilisé lors de mon apprentissage à l'IUT",
    logo: PHPLogo,
  },
  {
    index: 11,
    name: "SQL",
    comment:
      "SQL je l'ai utilisé pour la gestion de bases de données lors de projets universitaires.",
    logo: SQLLogo,
  },
  {
    index: 12,
    name: "Java",
    comment:
      "Java est un langage de programmation que j'ai utilisé durant des projets universitaires.",
    logo: JavaLogo,
  },
];
</script>