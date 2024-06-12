<template>
  <div class="carousel overflow-y-hidden carousel-center max-w-md p-4 space-x-4 bg-slate-600 shadow-xl shadow-gray-700/50 rounded-box">
    <div v-for="ability in abilities" :key="ability.index" :id="ability.index" class="carousel-item relative h-96">
      <img :src="ability.background" class="rounded-box"/>
      <div class="absolute transition-opacity opacity-0 hover:opacity-100 bg-black/85 w-full h-full rounded-box p-5">
        <div class="flex flex-col justify-center h-full gap-5">
          <div>
            <img :src="ability.logo" :alt="ability.name" class="w-16 h-16 opacity-100"/>
            <h3 class="text-white text-2xl font-bold break-words">
              {{ ability.name }}
            </h3>
          </div>
          <div class="flex flex-row items-center gap-3 text-white">
            <progress class="progress progress-success w-56" :value="ability.progress" max="100"></progress>
            <p>{{ ability.progress }}%</p>
          </div>
          <p class="text-white text-lg break-words">
            {{ ability.comment }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import VueJs from "@/assets/img/abilitiesSection/techno/VueJs.svg";
import VueJsLogo from "@/assets/img/abilitiesSection/techno/VueJsLogo.svg";

import JavaScript from "@/assets/img/abilitiesSection/techno/JavaScript.svg";
import JavaScriptLogo from "@/assets/img/abilitiesSection/techno/JavaScriptLogo.svg";

import HTMLCSS from "@/assets/img/abilitiesSection/techno/HTMLCSS.svg";
import HTMLCSSLogo from "@/assets/img/abilitiesSection/techno/HTMLCSSLogo.svg";

import Git from "@/assets/img/abilitiesSection/techno/Git.svg";
import GitLogo from "@/assets/img/abilitiesSection/techno/GitLogo.svg";

import Java from "@/assets/img/abilitiesSection/techno/Java.svg";
import JavaLogo from "@/assets/img/abilitiesSection/techno/JavaLogo.svg";

import SQL from "@/assets/img/abilitiesSection/techno/SQL.svg";
import SQLLogo from "@/assets/img/abilitiesSection/techno/SQLLogo.svg";

const abilities = [
  {
    index: 1,
    name: "Vue.Js",
    comment: "J'ai utilisé Vue.Js pour la réalisation de mon site personnel mais aussi pour les ErgoGames ou encore LudoLabo.",
    progress: 80,
    logo: VueJsLogo,
    background: VueJs,
  },
  {
    index: 2,
    name: "JavaScript",
    comment: "Je l'utilise ici même pour la réalisation de ce site, mais aussi pour les ErgoGames par exemple.",
    progress: 60,
    logo: JavaScriptLogo,
    background: JavaScript,
  },
  {
    index: 3,
    name: "HTML/CSS",
    comment: "HTML et CSS sont les bases de la programmation web, je les utilise pour tous mes projets.",
    progress: 85,
    logo: HTMLCSSLogo,
    background: HTMLCSS,
  },
  {
    index: 4,
    name: "Git",
    comment: "Git est un logiciel de gestion de versions que j'utilise tout le temps pour la gestion de mes projets.",
    progress: 70,
    logo: GitLogo,
    background: Git,
  },
  {
    index: 5,
    name: "Java",
    comment: "Java est un langage de programmation que j'ai utilisé durant des projets universitaire.",
    progress: 70,
    logo: JavaLogo,
    background: Java,
  },
  {
    index: 6,
    name: "SQL",
    comment: "SQL je l'ai utilisé pour la gestion de bases de données lors de projets universitaire.",
    progress: 60,
    logo: SQLLogo,
    background: SQL,
  }
];

</script>