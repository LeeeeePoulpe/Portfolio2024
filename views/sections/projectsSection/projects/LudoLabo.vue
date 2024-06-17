<template>
  <div class="text-justify">
    <div class="flex flex-col md:flex-row justify-between mb-10">
      <div class="max-w-[730px] flex flex-col gap-4 md:pr-5">
        <h1 class="font-bold text-2xl">Contexte</h1>
        <p>
          Ce projet à été réalisé dans le cadre de la formation BUT Informatique de l'IUT2 de Grenoble lors du troisième
          semestre de la formation. Il s'agit d'un projet en groupe de 8.
        </p>
        <p>
          Nous devions réalisé une interface et un jeu ludiques afin d'aider les élèves de terminale à réviser leur enseignement de
          spécialité en physique-chimie et de permettre aux professeurs de suivre les progrès.
          Nous l'avons nommé
          <a href="https://github.com/LudoLaboApp" class="link link-info no-underline transition-colors"><b>LudoLabo</b></a>.
        </p>
        <p>
          Le jeu devait être basé sur des questions et des enigmes des différents chapitres de physique-chimie vu en
          terminal. Chaque bonne réponse permettait aux élèves de gagner des points et de réasliser un classement entre
          les élèves d'une même classe.
        </p>
      </div>
      <div class="flex flex-col gap-5 self-center mt-5 w-56">
        <a href="https://github.com/LudoLaboApp" class="hover:scale-105 transition-all">
          <img src="@/assets/img/projectsSection/LudoLabo/LudoLogo.svg" alt="Développement d'IA" class="w-68 rounded-xl drop-shadow-xl self-center">
        </a>
      </div>
    </div>
    <div class="flex flex-col gap-4 mb-10">
      <h1 class="font-bold text-2xl">Objectifs</h1>
      <p>
        Notre projet vise à fournir un jeu éducatif destiné à aider les élèves de terminale dans leur révision de
        l'enseignement de spécialité en physique-chimie. L'application doit offrir aux professeurs la possibilité de
        suivre les progrès de leurs élèves dans leurs révisions.
      </p>
      <div class="flex flex-col md:flex-row gap-5 items-center">
        <div class="flex flex-col gap-5">
          <p>
            En rendant le processus de révision ludique et en le reliant à des situations de la vie quotidienne, notre
            objectif est de rendre l'apprentissage plus attrayant et plus pratique pour les élèves. De plus, nous
            souhaitons promouvoir un esprit de compétition saine en mettant en place un système de classement entre
            les élèves, afin de les motiver davantage. Notre ambition est de toucher un large éventail d'utilisateurs,
            allant des élèves les plus sérieux aux moins assidus, en offrant un produit attractif et engageant.
          </p>
          <p>
            Enfin, nous voulons offrir aux professeurs un outil de suivi des progrès de leurs élèves, leur permettant
            d'identifier les lacunes et les points forts de chacun. Cela leur permettra d'adapter leur enseignement en
            conséquence et de mieux accompagner leurs élèves dans leur progression.
          </p>
        </div>
        <img src="@/assets/img/projectsSection/LudoLabo/MaquetteAccueil.svg" alt="96%" class="w-44 rounded-xl drop-shadow-sm">
      </div>
    </div>
    <div class="flex flex-col gap-4 mb-10">
      <h1 class="font-bold text-2xl">Résultats</h1>
      <div class="flex flex-col md:flex-row">
        <img src="@/assets/img/projectsSection/LudoLabo/MaquetteClasse.svg" alt="Interface de l'application" class="w-96 rounded-xl ">
        <div class="flex flex-col gap-5 ml-5">
          <p>
            Nous avons réalisé une
            <a href="https://github.com/LudoLaboApp/ludolabo-client" class="link link-info no-underline transition-colors"><b>platforme web</b></a>
            permettant aux professeurs de suivre les progrès de leurs élèves à l'aide
            d'un système de classe que les élèves rejoignaient avec un code. Les élèves pouvaient rejoindre une classe
            et participer à des jeux de révision. Les jeux étaient basés sur des questions de physique-chimie et
            permettaient aux élèves de gagner des points en répondant correctement aux questions et en terminant le jeu
            rapidement.
          </p>
          <p>
            Les professeurs pouvaient aussi gérer les classes, ajouter des élèves et changer l'ordre des chapitres,
            représentés par des mondes dans
            <a href="https://github.com/LudoLaboApp/ludolabo-game" class="link link-info no-underline transition-colors"><b>le jeu</b></a>.
            Chaque chapitre contient des questions de physique-chimie sur un thème
            particulier, permettant aux élèves de réviser chapitre par chapitre.
            Par expemples l'un des mondes, "Les lacs chimiques", contient des questions
            sur les réactions chimiques et les molécules ou encore "les terres cinétiques" contient des questions
            sur les forces et les mouvements.
          </p>
          <p>
            Au sein d'une classe, les élèves pouvaient voir leur progression par rapport aux autres élèves de la classe.
            Les professeurs pouvaient voir la progression de chaque élève et leur score. Ils pouvaient également voir
            les questions auxquelles les élèves avaient répondu et les réponses données.
            Les professeurs avaient également accès à un diagramme de progression de la classe et de chaque élève,
            leur permettant de voir les points forts et les points faibles de chaque élève.
          </p>
          <p>
            Ce projet à été développé au cours de 3 semaines consécutives. Nous avons réalisé une application web en
            <a href="https://vuejs.org/" class="link link-primary"><b>Vue.Js</b></a>
            complétée par
            <a href="https://tailwindcss.com/" class="link link-primary"><b>TailWind CSS</b></a>
            et
            <a href="https://preline.co/" class="link link-primary"><b>PrelineUI</b></a>
            comme librairie de composants.
            Pour le jeu, nous étions parti sur Faser.Js, mais nous avons finalement décidé de réaliser le jeu en Unity
            pour des raisons de performance et de facilité de développement.
          </p>
        </div>
      </div>
    </div>
    <div class="divider m-0 divider-neutral"></div>
    <div>
      <h1 class="font-bold text-2xl mb-2">Conclusion</h1>
      <div class="flex flex-col md:flex-row items-center gap-5">
        <img src="@/assets/img/projectsSection/LudoLabo/LudoConclu.svg" alt="" class="w-44 rounded-xl">
        <p>
          Ce projet a été une expérience très enrichissante pour moi, car j'ai eu l'occasion de m'intégrer dans une
          équipe plus conséquente par rapport aux projets précédents. J'ai participé à la réalisation de l'interface
          web en utilisant
          <a href="https://vuejs.org/" class="link link-primary"><b>Vue.Js</b></a>
          une technologie déjà utilisée et complétée avec des technologies telles que
          <a href="https://tailwindcss.com/" class="link link-primary"><b>TailWind CSS</b></a> et
          <a href="https://preline.co/" class="link link-primary"><b>PrelineUI</b></a>.
          Ce projet a aussi été un énorme défi car nous avons réalisé l'application et
          le jeu en respectant les critères du cahier des charges en seulement trois semaines.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>