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
        <button onclick="ErgoGamesModal.showModal()">
          <ProjectCard>
            <template #project-image>
              <img src="@/assets/img/projectsSection/ErgoGames.svg" alt="ErgoGames" class="h-36 drop-shadow-sm"/>
            </template>
            <template #project-title>
              ErgoGames
            </template>
            <template #project-description>
              <p class="text-start">
                Développement du sixième jeu des ergogames pour Sogilis.
              </p>
            </template>
            <template #project-badge-new>
              <span class="badge badge-success">Nouveau</span>
            </template>
            <template #project-badge>
              <span class="badge badge-outline">Vue.Js</span>
              <span class="badge badge-outline">JavaScript</span>
            </template>
          </ProjectCard>
        </button>

        <button onclick="CarnetDeStageModal.showModal()">
          <ProjectCard class="self-center">
            <template #project-image>
              <img src="@/assets/img/projectsSection/CarnetDeStage.svg" alt="Carnet de stage"
                   class="h-36 drop-shadow-sm"/>
            </template>
            <template #project-title>
              Carnet de stage
            </template>
            <template #project-description>
              <p class="text-start">
                Correction d’une application de répertoire d’offres et candidatures.
              </p>
            </template>
            <template #project-badge>
              <span class="badge badge-outline">Symfony</span>
              <span class="badge badge-outline">Android</span>
            </template>
          </ProjectCard>
        </button>

        <button onclick="LudoLaboModal.showModal()">
          <ProjectCard class="self-center">
            <template #project-image>
              <img src="@/assets/img/projectsSection/LudoLabo.svg" alt="LudoLabo" class="h-36 drop-shadow-sm"/>
            </template>
            <template #project-title>
              LudoLabo
            </template>
            <template #project-description>
              <p class="text-start">
                Développement d’un jeu ludoEducatif en science physique.
              </p>
            </template>
            <template #project-badge>
              <span class="badge badge-outline">Unity</span>
              <span class="badge badge-outline">Vue.Js</span>
              <span class="badge badge-outline">Symfony</span>
            </template>
          </ProjectCard>
        </button>

        <ProjectCard class="self-center">
          <template #project-image>
            <img src="@/assets/img/projectsSection/Arcsecond.svg" alt="Arcsecond" class="h-36 drop-shadow-sm"/>
          </template>
          <template #project-title>
            Arcsecond
          </template>
          <template #project-description>
            Amélioration de la partie visuelle de la page d’accueil des portails.
          </template>
          <template #project-badge>
            <span class="badge badge-outline">Vue.Js</span>
            <span class="badge badge-outline">JavaScript</span>
          </template>
        </ProjectCard>

        <ProjectCard class="opacity-25 self-center">
          <template #project-image>
            <img src="@/assets/img/projectsSection/Sciconf.svg" alt="Sciconf" class="h-36 drop-shadow-sm"/>
          </template>
          <template #project-title>
            Sciconf
          </template>
          <template #project-description>
            Développement d’une application de gestion de conférences.
          </template>
          <template #project-badge>
            <span class="badge badge-outline">Java</span>
            <span class="badge badge-outline">JavaFX</span>
          </template>
        </ProjectCard>

        <ProjectCard class="opacity-25 self-center">
          <template #project-image>
            <img src="@/assets/img/projectsSection/GameJam.svg" alt="GameJam" class="h-36 drop-shadow-sm"/>
          </template>
          <template #project-title>
            GameJam
          </template>
          <template #project-description>
            Développement d’un jeu vidéo dans “le monde merveilleux de l’IUT2”.
          </template>
          <template #project-badge>
            <span class="badge badge-outline">Python</span>
            <span class="badge badge-outline">PyGame</span>
          </template>
        </ProjectCard>

        <button onclick="CGIModal.showModal()">
          <ProjectCard class="self-center">
            <template #project-image>
              <img src="@/assets/img/projectsSection/CGI.svg" alt="Réalisation d’un site Web"
                   class="h-36 drop-shadow-sm"/>
            </template>
            <template #project-title>
              Réalisation d’un site Web
            </template>
            <template #project-description>
              <p class="text-start">
                Développement d’un site d’information simplifié sur une ESN.
              </p>
            </template>
            <template #project-badge>
              <span class="badge badge-outline">Gestion de Projet</span>
              <span class="badge badge-outline">HTML / CSS</span>
            </template>
          </ProjectCard>
        </button>

        <button onclick="TitanicModal.showModal()">
          <ProjectCard class="self-center">
            <template #project-image>
              <img src="@/assets/img/projectsSection/Titanic.svg" alt="Réalisation d'une BD" class="h-36"/>
            </template>
            <template #project-title>
              Réalisation d'une BD
            </template>
            <template #project-description>
              <p class="text-start">
                Création d’une base de donnée sur le naufrage du Titanic
              </p>
            </template>
            <template #project-badge>
              <span class="badge badge-outline">Schéma relationel</span>
              <span class="badge badge-outline">SQL</span>
            </template>
          </ProjectCard>
        </button>

        <button onclick="IAModal.showModal()">
          <ProjectCard class="self-center">
            <template #project-image>
              <img src="@/assets/img/projectsSection/IA.svg" alt="Création d’une IA de tri" class="h-36"/>
            </template>
            <template #project-title>
              Création d’une IA de tri
            </template>
            <template #project-description>
              <p class="text-start">
                Développement d’une IA de tri de dépêches.
              </p>
            </template>
            <template #project-badge>
              <span class="badge badge-outline">Java</span>
            </template>
          </ProjectCard>
        </button>
      </div>
    </div>

    <dialog id="ErgoGamesModal" class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <form method="dialog" class="">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-4 top-5">✕</button>
        </form>
        <div class="flex flex-col gap-5 mb-5">
          <h3 class="font-bold text-4xl">ErgoGames</h3>
          <div class="divider m-0 divider-neutral"></div>
          <ErgoGames/>
        </div>
        <form method="dialog" class="flex justify-center">
          <button class="btn btn-warning">Retourner aux projets</button>
        </form>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    <dialog id="CarnetDeStageModal" class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <form method="dialog" class="">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-4 top-5">✕</button>
        </form>
        <div class="flex flex-col gap-5 mb-5">
          <h3 class="font-bold text-4xl">Carnet de stage</h3>
          <div class="divider m-0 divider-neutral"></div>
          <CarnetDeStage/>
        </div>
        <form method="dialog" class="flex justify-center">
          <button class="btn btn-outline text-black">Retourner aux projets</button>
        </form>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    <dialog id="LudoLaboModal" class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <form method="dialog" class="">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-4 top-5">✕</button>
        </form>
        <div class="flex flex-col gap-5 mb-5">
          <h3 class="font-bold text-4xl">Développement d’un jeu ludoEducatif en science physique</h3>
          <div class="divider m-0 divider-neutral"></div>
          <LudoLabo/>
        </div>
        <form method="dialog" class="flex justify-center">
          <button class="btn btn-outline text-black">Retourner aux projets</button>
        </form>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>

    <dialog id="CGIModal" class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <form method="dialog" class="">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-4 top-5">✕</button>
        </form>
        <div class="flex flex-col gap-5 mb-5">
          <h3 class="font-bold text-4xl">Réalisation d’un site Web</h3>
          <div class="divider m-0 divider-neutral"></div>
          <CGI/>
        </div>
        <form method="dialog" class="flex justify-center">
          <button class="btn btn-outline text-black">Retourner aux projets</button>
        </form>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    <dialog id="TitanicModal" class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <form method="dialog" class="">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-4 top-5">✕</button>
        </form>
        <div class="flex flex-col gap-5 mb-5">
          <h3 class="font-bold text-4xl">Réalisation d'une base de donnée sur le naufrage du Titanic</h3>
          <div class="divider m-0 divider-neutral"></div>
          <Titanic/>
        </div>
        <form method="dialog" class="flex justify-center">
          <button class="btn btn-outline text-black">Retourner aux projets</button>
        </form>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    <dialog id="IAModal" class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <form method="dialog" class="">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-4 top-5">✕</button>
        </form>
        <div class="flex flex-col gap-5 mb-5">
          <h3 class="font-bold text-4xl">Création d’une IA de tri de dépèches</h3>
          <div class="divider m-0 divider-neutral"></div>
          <IA/>
        </div>
        <form method="dialog" class="flex justify-center">
          <button class="btn btn-outline text-black">Retourner aux projets</button>
        </form>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>

<script setup>
import ProjectsTimeLine from "~/views/sections/projectsSection/ProjectsTimeLine.vue";
import ProjectCard from "~/views/sections/projectsSection/ProjectCard.vue";

import ErgoGames from "~/views/sections/projectsSection/projects/ErgoGames.vue";
import CarnetDeStage from "~/views/sections/projectsSection/projects/CarnetDeStage.vue";
import LudoLabo from "~/views/sections/projectsSection/projects/LudoLabo.vue";
import IA from "~/views/sections/projectsSection/projects/IA.vue";
import Titanic from "~/views/sections/projectsSection/projects/Titanic.vue";
import CGI from "~/views/sections/projectsSection/projects/CGI.vue";

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