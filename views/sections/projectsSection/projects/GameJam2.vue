<template>
    <div class="text-justify">
      <div class="flex flex-col justify-between md:flex-row mb-10">
        <div class="max-w-[700px] flex flex-col gap-4 pr-5">
          <h1 class="font-bold text-2xl">Contexte</h1>
          <p>
            La
            <a href="https://fr.wikipedia.org/wiki/Game_jam" target="_blank"
               class="link link-info no-underline transition-colors"><b>GameJam</b></a>
            est un évènement stimulant durant lequel des équipes d'étudiants doivent concevoir et développer un jeu vidéo en respectant des contraintes de temps et de thème. Ce projet a été mené dans le cadre de la formation BUT Informatique à l'IUT2 de Grenoble. Pour cette édition 2024, notre équipe était composée de cinq étudiants.
          </p>
          <p>
            Le thème imposé était "L'affrontement pacifique entre les nations", avec la particularité de devoir développer un jeu multijoueur. La contrainte technologique principale était l'utilisation du langage
            <a href="https://developer.mozilla.org/fr/docs/Glossary/Python" target="_blank"
               class="link link-info no-underline transition-colors"><b>Python</b></a>
            associé à la bibliothèque
            <a href="https://www.pygame.org/" target="_blank" class="link link-info no-underline transition-colors"><b>PyGame</b></a>.
            Nous avons baptisé notre création <span class="font-bold">Nation Chase</span>.
          </p>
        </div>
        <div class="flex justify-center w-72">
          <!-- Prévoir une image/logo pour ce projet -->
          <a href="https://github.com/sadspear/gamejam" class="hover:scale-105 transition-all self-center">
            <img src="/GameJam2024.svg" alt="Logo GameJam 2024"
                 class="w-80 rounded-xl self-center">
          </a>
        </div>
      </div>

      <div class="flex flex-col gap-4 mb-10">
        <h1 class="font-bold text-2xl">Déroulé et Conception</h1>
        <p>
          Partant du thème de "l'affrontement pacifique", nous avons opté pour un concept de "loup touche-touche" (tag) multijoueur, une idée inspirée par les <a href="https://www.worldchasetag.com/" target="_blank" class="link link-info no-underline transition-colors"><b>championnats du monde de Chase Tag</b></a>. L'objectif principal pour chaque joueur est d'éviter d'être le "loup" et de minimiser son temps dans ce rôle en attrapant une autre nation pour lui passer le relais.
        </p>
        <p>
          Pour dynamiser le gameplay, chaque nation s'est vu attribuer une capacité unique. Par exemple, la Jamaïque bénéficiait d'un bonus de vitesse, tandis qu'une autre nation pouvait lancer un éclair pour ralentir temporairement un adversaire. Ces capacités ajoutaient une couche stratégique aux poursuites.
        </p>
        <p>
          L'organisation de l'équipe a été cruciale. Un membre, spécialisé en réseau au sein de l'IUT, a pris en charge toute la dimension communication entre les joueurs. Les quatre autres développeurs se sont concentrés sur la création des cartes de jeu, la gestion de la physique et des déplacements des personnages, l'implémentation des menus (sélection des nations, menu pause), le système de chronométrage et la mécanique de changement de rôle.
        </p>
      </div>

      <div class="flex flex-col gap-4 mb-10">
        <h1 class="font-bold text-2xl">Résultats</h1>
        <p>
          Le jeu final permet à deux joueurs de s'affronter dans une arène. Après avoir choisi leur nation, l'un des joueurs commence en tant que "loup". Le but est de toucher l'autre joueur pour inverser les rôles. Un chronomètre enregistre le temps passé en tant que "loup", et le joueur avec le temps le plus court à la fin de la partie (ou après un certain temps) est déclaré vainqueur. Les capacités spéciales de chaque nation offrent des opportunités tactiques pour attraper ou s'échapper.
        </p>
        <p>
          Ce projet a représenté un défi technique intéressant, notamment la mise en place de la synchronisation réseau en Pygame et l'équilibrage des différentes capacités des nations pour assurer une expérience de jeu équitable et amusante.
        </p>
      </div>

      <div class="divider m-0 divider-neutral"></div>

      <div>
        <h1 class="font-bold text-2xl mb-2">Conclusion</h1>
        <div class="flex flex-col md:flex-row items-center gap-5">
          <!-- Prévoir une image/screenshot du jeu -->
          <!-- <img src="[Chemin vers une image du jeu GameJam 2024]" alt="Screenshot GameJam 2024" class="w-44 drop-shadow-sm"> Image placeholder, à remplacer -->
          <p>
            Cette GameJam 2024 a été une expérience très formatrice. Elle nous a permis de concrétiser un projet multijoueur en Python et Pygame, en partant de zéro et en gérant les aspects techniques et collaboratifs en un temps record. Le développement des mécaniques de jeu, des capacités uniques et surtout de la brique réseau a constitué un apprentissage significatif pour toute l'équipe. Malgré la pression du délai, nous sommes fiers d'avoir pu livrer un jeu fonctionnel et divertissant.
          </p>
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
</script>