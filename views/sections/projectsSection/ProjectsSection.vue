<template>
  <div class="min-h-screen flex flex-col justify-between bg-slate-100 p-6">
    <div class="mb-12 items-center">
      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble--intro drop-shadow-md">Voila la liste des projet auxquels j’ai participé
          ainsi que la frise chronologique des projets pour pouvoir les situer
        </div>
      </div>
      <ProjectsTimeLine v-if="isDesktop"/>
      <div class="flex flex-row flex-wrap justify-center gap-4">
        <ProjectCard
            v-for="project in projects"
            :key="project.title"
            class="self-center"
        >
          <template #project-image>
            <img :src="project.image" :alt="project.title"/>
          </template>
          <template #project-title>
            {{ project.title }}
          </template>
          <template #project-description>
            {{ project.description }}
          </template>
          <template v-if="project.title === 'ErgoGames'" #project-badge-new>
            <span class="badge badge-success">Nouveau</span>
          </template>
          <template #project-badge>
            <span v-for="badge in project.badges" class="badge badge-outline">{{ badge }}</span>
          </template>
        </ProjectCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectsTimeLine from "~/views/sections/projectsSection/ProjectsTimeLine.vue";
import ProjectCard from "~/views/sections/projectsSection/ProjectCard.vue";

const projects = [
  {
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "ErgoGames",
    description: "Développement du sixième jeu des ergogames pour Sogilis.",
    badges: [
      "Vue.Js",
      "JavaScript",
    ],
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Carnet  de stage",
    description: "Correction d’une application de répertoire d’offres et candidatures.",
    badges: [
      "Symfony",
      "Android",
    ],
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "LudoLabo",
    description: "Développement d’un jeu ludoEducatif en science physique.",
    badges: [
      "Unity",
      "Vue.Js",
      "Symfony",
    ],
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Arcsecond",
    description: "Amélioration de la partie visuelle de la page d’accueil des portails.",
    badges: [
      "Vue.Js",
      "JavaScript",
    ],
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Sciconf",
    description: "Développement d’une application de gestion de conférences.",
    badges: [
      "Java",
      "JavaFX",
    ],
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "GameJam",
    description: "Développement d’un jeu vidéo dans “le monde merveilleux de l’IUT2”. ",
    badges: [
      "Python",
      "PyGame",
    ],
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Réalisation d’un site Web",
    description: "Développement d’un site d’information simplifié sur une ESN.",
    badges: [
      "Gestion de Projet",
      "HTML / CSS",
    ],
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Réalisation d'une BD",
    description: "Création d’une base de donnée sur le naufrage du Titanic",
    badges: [
      "Schéma relationel",
      "SQL",
    ],
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Création d’une IA de tri ",
    description: "Développement d’une IA de tri de dépêches.",
    badges: [
      "Java",
    ],
  },
];

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0);

const updateWindowWidth = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth;
  }
};

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowWidth);
});

const isDesktop = computed(() => windowWidth.value > 1250);
</script>