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
import HTMLCSSLogo from "@/assets/img/abilitiesSection/techno/HTMLCSSLogo.svg";
import GitLogo from "@/assets/img/abilitiesSection/techno/GitLogo.svg";
import PHPLogo from "@/assets/img/abilitiesSection/techno/PHPLogo.svg";
import CLogo from "@/assets/img/abilitiesSection/techno/C++Logo.svg";
import JavaLogo from "@/assets/img/abilitiesSection/techno/JavaLogo.svg";
import SQLLogo from "@/assets/img/abilitiesSection/techno/SQLLogo.svg";

const abilities = [
  {
    index: 1,
    name: "React",
    comment:
      "React et TypeScript sont les technologies que j'ai utilisé durant toutes mon alternance chez Enogrid.",
    logo: ReactLogo,
  },
  {
    index: 1,
    name: "Vue.Js",
    comment:
      "J'ai utilisé Vue.Js pour la réalisation de mon site personnel mais aussi pour les ErgoGames ou encore LudoLabo.",
    logo: VueJsLogo,
  },
  {
    index: 2,
    name: "JavaScript",
    comment:
      "Je l'utilise ici même pour la réalisation de ce site, mais aussi pour les ErgoGames par exemple.",
    logo: JavaScriptLogo,
  },
  {
    index: 3,
    name: "HTML/CSS",
    comment:
      "HTML et CSS sont les bases de la programmation web, je les utilise pour tous mes projets.",
    logo: HTMLCSSLogo,
  },
  {
    index: 4,
    name: "Git",
    comment:
      "Git est un logiciel de gestion de versions que j'utilise tout le temps pour la gestion de mes projets.",
    logo: GitLogo,
  },
  {
    index: 5,
    name: "PHP",
    comment:
      "PHP est un langage de programmation que j'ai utilisé lors de mon apprentissage à l'IUT",
    logo: PHPLogo,
  },
  {
    index: 6,
    name: "C/C++/C#",
    comment:
      "C/C++/C# sont des langages de programmation que j'ai utilisé lors de mon apprentissage.",
    logo: CLogo,
  },
  {
    index: 7,
    name: "SQL",
    comment:
      "SQL je l'ai utilisé pour la gestion de bases de données lors de projets universitaires.",
    logo: SQLLogo,
  },
  {
    index: 8,
    name: "Java",
    comment:
      "Java est un langage de programmation que j'ai utilisé durant des projets universitaires.",
    logo: JavaLogo,
  },
];
</script>