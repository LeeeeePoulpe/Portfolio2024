<template>
  <div class="flex flex-col justify-between bg-slate-100 p-6 drop-shadow-md">
    <div class="mb-12 items-center">
      <div class="chat chat-start">
        <div class="chat-bubble drop-shadow-md">
          Java, Python, Symfony ... N'hésitez pas à lire le descriptif de mes
          projets pour en savoir plus sur mes réalisations.
        </div>
      </div>

      <ProjectsTimeLine v-if="isDesktop" />

      <div class="flex flex-row flex-wrap justify-center gap-4 mb-10">
        <button
          v-for="project in projectList"
          :key="project.name"
          @click="openModal(project.name)"
        >
          <ProjectCard class="self-center">
            <template #project-image>
              <img
                :src="project.image"
                :alt="project.name"
                class="h-36 drop-shadow-sm"
              />
            </template>
            <template #project-title> {{ project.name }} </template>
            <template #project-description>
              <p class="text-start">
                {{ project.description }}
              </p>
            </template>
            <template #project-badge>
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="badge badge-outline"
              >
                {{ tag }}
              </span>
            </template>
          </ProjectCard>
        </button>
      </div>

      <div class="chat chat-start">
        <div class="chat-bubble drop-shadow-md">
          Vous pouvez également consulter mes projets sur mon
          <a
            href="https://github.com/LeeeeePoulpe"
            target="_blank"
            class="link link-info no-underline transition-colors"
            >GitHub</a
          >.
        </div>
      </div>
    </div>

    <template v-for="project in projectList" :key="project.name + 'Modal'">
      <dialog
        :id="project.name + 'Modal'"
        class="modal"
        :ref="
          (el) => {
            if (el) modalRefs[project.name] = el;
          }
        "
      >
        <div class="modal-box p-10 w-11/12 max-w-6xl">
          <form method="dialog" class="">
            <button
              class="btn btn-sm btn-circle btn-ghost absolute right-4 top-5"
            >
              ✕
            </button>
          </form>
          <div class="flex flex-col gap-5 mb-5">
            <h3 class="font-bold text-4xl">{{ project.name }}</h3>
            <div class="divider m-0 divider-neutral"></div>
            <!-- Affichage dynamique du composant -->
            <component :is="project.component" />
          </div>
          <form method="dialog" class="flex justify-center">
            <button class="btn btn-outline text-black">
              Retourner aux projets
            </button>
          </form>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </template>
  </div>
</template>

<script setup>
// Importing Vue and Composition API
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import ProjectsTimeLine from "~/views/sections/projectsSection/ProjectsTimeLine.vue";
import ProjectCard from "~/views/sections/projectsSection/ProjectCard.vue";

// Importing project components
import Alternance from "~/views/sections/projectsSection/projects/Alternance.vue";
import GameJam2 from "./projects/GameJam2.vue";
import ErgoGames from "~/views/sections/projectsSection/projects/ErgoGames.vue";
import CarnetDeStage from "~/views/sections/projectsSection/projects/CarnetDeStage.vue";
import LudoLabo from "~/views/sections/projectsSection/projects/LudoLabo.vue";
import Arcsecond from "~/views/sections/projectsSection/projects/Arcsecond.vue";
import Sciconf from "~/views/sections/projectsSection/projects/Sciconf.vue";
import GameJam from "~/views/sections/projectsSection/projects/GameJam.vue";

const projectList = [
  {
    name: "Alternance",
    component: Alternance,
    image: "/Alternance.svg",
    description:
      "Alternance au sein de l'entreprise Enogrid (Mon Energie Collective).",
    tags: ["React", "TypeScript", "Node.Js"],
  },
  {
    name: "GameJam 2024",
    component: GameJam2,
    image: "/GameJam2.svg",
    description:
      "Développement d’un jeu vidéo dans “le monde merveilleux de l’IUT2”.",
    tags: ["Python", "PyGame"],
  },
  {
    name: "ErgoGames",
    component: ErgoGames,
    image: "/ErgoGames.svg",
    description: "Développement du sixième jeu des ergogames pour Sogilis.",
    tags: ["Vue.Js", "JavaScript"],
  },
  {
    name: "CarnetDeStage",
    component: CarnetDeStage,
    image: "/CarnetDeStage.svg",
    description:
      "Correction d’une application de répertoire d’offres et candidatures.",
    tags: ["Symfony", "Android"],
  },
  {
    name: "LudoLabo",
    component: LudoLabo,
    image: "/LudoLabo.svg",
    description: "Développement d’un jeu ludoEducatif en science physique.",
    tags: ["Unity", "Vue.Js", "Symfony"],
  },
  {
    name: "Arcsecond",
    component: Arcsecond,
    image: "/Arcsecond.svg",
    description:
      "Amélioration de la partie visuelle de la page d’accueil des portails.",
    tags: ["Vue.Js", "JavaScript"],
  },
  {
    name: "Sciconf",
    component: Sciconf,
    image: "/Sciconf.svg",
    description: "Développement d’une application de gestion de conférences.",
    tags: ["Java", "JavaFX"],
  },
  {
    name: "GameJam 2023",
    component: GameJam,
    image: "/GameJam.svg",
    description:
      "Développement d’un jeu vidéo dans “le monde merveilleux de l’IUT2”.",
    tags: ["Python", "PyGame"],
  },
];

const modalRefs = ref({});

const openModal = (projectName) => {
  const modalElement = modalRefs.value[projectName];
  if (modalElement) {
    modalElement.showModal();
  } else {
    console.error(`Modal with name ${projectName} not found.`);
  }
};

console.log(projectList[0].image);

const windowWidth = ref(typeof window !== "undefined" ? window.innerWidth : 0);

const updateWindowWidth = () => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
};

onMounted(() => {
  window.addEventListener("resize", updateWindowWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWindowWidth);
});

const isDesktop = computed(() => windowWidth.value > 1250);
</script>
