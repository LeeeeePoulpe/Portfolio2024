<template>
  <div class="text-justify">
    <div class="flex justify-between mb-10">
      <div class="max-w-[800px] flex flex-col gap-4 pr-5">
        <h1 class="font-bold text-2xl">Contexte</h1>
        <p>
          Ce projet a été réalisé dans le cadre d'un emploi d'été chez
          <a href="https://www.arcsecond.io/" class="link link-info no-underline transition-colors"><b>Arcsecond</b></a>
          , une micro entreprise qui développe
          une plateforme cloud complète pour les observations astronomiques, offrant des fonctionnalités avancées pour
          les
          astronomes et les observatoires professionnels.
        </p>
        <p>
          Mon objectif était de réaliser une amélioration de l'interface utilisateur de l'application web d'Arcsecond.
          La partie que j'ai améliorée est la page d'accueil des portails d'observatoires. Cette page est la première
          page que les utilisateurs voient lorsqu'ils se connectent à leur portails. Elle doit être claire, intuitive et
          permettre aux utilisateurs de si retrouver facilement.
        </p>
        <p>
          Ce projet était un défi pour moi, car je n'avais jamais travaillé sur une application web de cette envergure
          et
          avec ces technologies. J'ai dû apprendre à travailler avec des technologies telles que
          <a href="https://vuejs.org/" class="link link-primary"><b>Vue.Js</b></a>,
          <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" class="link link-primary"><b>JavaScript</b></a>,
          <a href="https://primeflex.org/" class="link link-primary"><b>PrimeFlex</b></a>
          avec la librairie de composants
          <a href="https://primevue.org/" class="link link-primary"><b>PrimeVue</b></a>.
        </p>
      </div>
      <div class="flex flex-col gap-5 justify-center w-56">
        <a href="https://github.com/LudoLaboApp" class="hover:scale-105 transition-all self-center">
          <img src="@/assets/img/projectsSection/Arcsecond/ArcsecondLogo.svg" alt="Développement d'IA"
               class="w-68 rounded-xl self-center">
        </a>
      </div>
    </div>
    <div class="flex flex-col gap-4 mb-10">
      <h1 class="font-bold text-2xl">Objectifs et déroulé</h1>
      <p>
        Mon objectif était de réaliser une amélioration de l'interface utilisateur de l'application web d'Arcsecond.
        Je me suis occupé de redesigner les notifications de la page d'accueil des portails d'observatoires. Les
        notifications étaient similaires les unes aux autres et il était complexe de distinguer les différentes types
        de notifications. Il était donc nécessaire de les différencier et de les rendre plus claires pour les
        utilisateurs.
      </p>
      <div class="flex flex-row gap-5 items-center">
        <div class="flex flex-col gap-5">
          <p>
            J'ai commencé par réaliser une analyse des notifications existantes. J'ai ensuite réalisé des maquettes
            des nouvelles notifications en m'inspirant des notifications déjà présente afin de garder l'identité visuel
            des notifications mais en ajoutant des éléments de différenciation. J'ai ensuite réalisé des maquettes avec
            2 propositions de design différentes.
          </p>
          <p>
            Une fois les maquettes validées, j'ai commencé à implémenter les nouvelles notifications. J'ai commencé par
            m'impreigner du code existant et de la structure de l'application. J'ai ensuite commencé à essayer
            d'implémenter les nouvelles notifications en gardant la structure existante. J'ai rencontré quelques
            difficultés lors du développement car c'est un projet d'une grande envergure et d'une grande complexité pour
            rentre dans le code existant.
          </p>
          <p>
            J'ai donc dû faire preuve de patience et de persévérance pour réussir à implémenter les nouvelles
            notifications. La curiosité à été la clé pour trouver des solutions aux problèmes rencontrés.
          </p>
        </div>
        <img src="@/assets/img/projectsSection/LudoLabo/MaquetteAccueil.svg" alt="96%"
             class="w-44 rounded-xl drop-shadow-sm">
      </div>
    </div>
    <div class="flex flex-col gap-4 mb-10">
      <h1 class="font-bold text-2xl">Résultats</h1>
      <div class="flex flex-row">
        <img src="@/assets/img/projectsSection/LudoLabo/MaquetteClasse.svg" alt="Interface de l'application"
             class="w-96 rounded-xl ">
        <div class="flex flex-col gap-5 ml-5">
          <p>
            Nous avons réalisé une
            <a href="https://github.com/LudoLaboApp/ludolabo-client"
               class="link link-info no-underline transition-colors"><b>platforme web</b></a>
            permettant au professeur de suivre les progrès de ses élèves à l'aide
            d'un système de classe que les élèves rejoignaient avec un code. Les élèves pouvaient rejoindre une classe
            et participer à des jeux de révision. Les jeux étaient basés sur des questions de physique-chimie et
            permettaient aux élèves de gagner des points en répondant correctement aux questions et en terminant le jeu
            rapidement.
          </p>
          <p>
            Les professeurs pouvaient aussi gérer les classes, ajouter des élèves et changer l'ordre des chapitres,
            qui sont des monde dans le jeu. Chaques chapitres contient des questions de physique-chimie sur un thème
            particulier, permettant aux élèves de réviser chapitre par chapitre.
          </p>
          <p>
            Au sein d'une classe, les élèves pouvaient voir leur progression par rapport aux autres élèves de la classe.
            Les professeurs pouvaient voir la progression de chaque élève et leur score. Ils pouvaient également voir
            les questions auxquelles les élèves avaient répondu et les réponses données par les élèves.
            Les professeurs avaient également accès à un diagramme de progression de la classe et de chaque élèves,
            leur permettant de voir les points forts et les points faibles de chaque élève.
          </p>
          <p>
            Dans cette interface, nous avons intégré
            <a href="https://github.com/LudoLaboApp/ludolabo-game"
               class="link link-info no-underline transition-colors"><b>un jeu</b></a>
            de révision basé sur des questions de physique-chimie.
            Le jeu contient des monde qui représentent un chapitre. Chaque monde contient des enigmes et des questions
            de physique-chimie. Par expemple l'un des monde s'appelle "Les lacs chimiques" et contient des questions
            sur les réactions chimiques et les molecules ou encore "les terres cinetiques" qui contient des questions
            sur les forces et les mouvements.
          </p>
          <p>
            Ce projet à été réalisé au cours de 3 semaines consécutives. Nous avons réalisé une application web en
            <a href="https://vuejs.org/" class="link link-primary"><b>Vue.Js</b></a>
            complétée par
            <a href="https://tailwindcss.com/" class="link link-primary"><b>TailWind CSS</b></a>
            et
            <a href="https://preline.co/" class="link link-primary"><b>PrelineUI</b></a>
            comme librairie de composants.
            Pour le jeu, nous étions parti sur Fase.Js, mais nous avons finalement décidé de réaliser le jeu en Unity
            pour des raisons de performance et de facilité de développement.
          </p>
        </div>
      </div>
    </div>
    <div class="divider m-0 divider-neutral"></div>
    <div>
      <h1 class="font-bold text-2xl mb-2">Conclusion</h1>
      <div class="flex flex-row items-center gap-5">
        <img src="@/assets/img/projectsSection/LudoLabo/LudoConclu.svg" alt="" class="w-32 rounded-xl">
        <p>
          Ce projet a été une expérience extrêmement enrichissante pour moi. J'ai eu l'occasion de travailler sur un
          projet de grande envergure et de grande complexité. J'ai pu apprendre à travailler avec des technologies
          que je ne connaissais pas et à m'adapter à un code existant.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
<script setup lang="ts">
</script>