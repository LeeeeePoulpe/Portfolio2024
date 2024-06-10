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
          Mon objectif était de réaliser une amélioration de l'interface utilisateur de l'application web d'Arcsecond :
          j'ai améliorée la page d'accueil des portails d'observatoires. Cette page est la première
          page que les utilisateurs voient lorsqu'ils se connectent à leurs portails. Elle doit être claire, intuitive
          et
          permettre aux utilisateurs de se retrouver facilement.
        </p>
        <p>
          Ce projet était un défi pour moi, car je n'avais jamais travaillé sur une application de cette envergure
          et avec les technologies utilisées :
          <a href="https://vuejs.org/" class="link link-primary"><b>Vue.Js</b></a>,
          <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" class="link link-primary"><b>JavaScript</b></a>,
          <a href="https://primeflex.org/" class="link link-primary"><b>PrimeFlex</b></a>
          et avec la librairie de composants
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
        L'objectif était d'améliorer l'interface utilisateur de l'application.
        Pour cela je me suis occupé dans un premier temps de redesigner l'affichage des évenements de la page d'accueil
        des portails d'observatoires. Ceux-ci étaient similaires les unes aux autres et il était complexe
        de distinguer les différents types d'évenements.
      </p>
      <div class="flex flex-row gap-5 items-center">
        <div class="flex flex-col gap-5">
          <p>
            J'ai commencé par réaliser une analyse de l'affichage existant. J'ai ensuite proposé 2 maquettes
            différentes,
            en m'inspirant des évenements existants afin de garder l'identité visuelle.
          </p>
          <p>
            Une fois les maquettes validées, j'ai commencé à implémenter les nouveaux évenements en tenant compte
            de la structure du code déjà existant. J'ai rencontré quelques difficultés lors du développement car c'est
            un
            projet d'une grande envergure et d'une grande complexité.
          </p>
          <p>
            J'ai donc dû faire preuve de patience et de persévérance pour réussir à implémenter les nouveaux évenements.
            La curiosité a été la clé pour solutionner les problèmes rencontrés.
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
            J'ai réussi à implémenter les nouveaux événements et à améliorer l'interface utilisateur de l'application.
            Les nouveaux événements sont plus clairs et plus intuitifs. Les utilisateurs peuvent désormais distinguer
            facilement les différents types d'événements. Cela inclut une meilleure catégorisation des évenements.
          </p>
          <p>
            Les modifications apportées à l'interface utilisateur ont également été significatives. J'ai intégré des
            éléments de design moderne qui rendent l'application non seulement plus agréable à utiliser, mais aussi plus
            fonctionnelle. Par exemple, les couleurs et les icônes sont désormais utilisées de manière stratégique pour
            attirer l'attention sur les informations les plus importantes et guider l'utilisateur à travers les
            différentes sections de l'application sans confusion.
          </p>
          <p>
            Les retours des utilisateurs ont été très positifs. Ils ont apprécié les améliorations apportées à
            l'interface utilisateur et ont trouvé l'application plus facile à utiliser.
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