<template>
  <div class="text-justify">
    <div class="flex flex-col md:flex-row mb-10">
      <div class="max-w-[700px] flex flex-col gap-4 pr-5">
        <h1 class="font-bold text-2xl">Contexte</h1>
        <p>
          La
          <a href="https://fr.wikipedia.org/wiki/Game_jam" target="_blank"
             class="link link-info no-underline transition-colors"><b>GameJam</b></a>
          est un évènement national durant lequel les étudiants doivent réaliser un jeu vidéo avec des
          contraintes en une semaine. Ce projet a été réalisé dans le cadre de la formation BUT Informatique à l'IUT2
          de Grenoble lors du deuxième semestre. Nous étions une équipe de quatre étudiants.
        </p>
        <p>
          Nous devions réaliser un jeu vidéo sur le thème "Le merveilleux monde de l'IUT2".
          Nous avions le choix du style de jeu : nous avons donc décidé de réaliser un jeu dans le style de Pokémon, se
          passant au premier étage de l'IUT où chaque salle représente une salle de boss. Ce jeu, nous l'avons appelé
          <a href="https://github.com/sadspear/gamejam2023" target="_blank"
             class="link link-info no-underline transition-colors"><b>Time striker</b></a>.
        </p>
        <p>
          Les contraintes imposées lors de cette GameJam était de développer en
          <a href="https://developer.mozilla.org/fr/docs/Glossary/Python" target="_blank"
             class="link link-info no-underline transition-colors"><b>Python</b></a> avec la bibliothèque
          <a href="https://www.pygame.org/" target="_blank" class="link link-info no-underline transition-colors"><b>PyGame</b></a>.
        </p>
      </div>
      <div class="flex justify-center w-72">
        <a href="https://github.com/sadspear/gamejam2023" class="hover:scale-105 transition-all self-center">
          <img src="@/assets/img/projectsSection/GameJam/GameJam.svg" alt="Logo Sciconf"
               class="w-60 rounded-xl self-center">
        </a>
      </div>
    </div>
    <div class="flex flex-col gap-4 mb-10">
      <h1 class="font-bold text-2xl">Déroulé</h1>
      <p>
        Tout était à faire, de la réflexion à la conception à la réalisation. Nous devions également travailler
        en équipe pour réaliser ce projet.
      </p>
      <p>
        Objectif de la GameJam était aussi de nous faire apprendre le python au sein de l'IUT, car c'est une matière
        qui n'est pas enseigné dans le curcus.
        Travailler quatre jours consécutifs sur une nouvelle technologie que nous ne connaissions pas était un réel défi,
        mais aussi une expérience enrichissante.
      </p>
      <p>
        Le développement du jeu à été réalisé en
        <a href="https://developer.mozilla.org/fr/docs/Glossary/Python" target="_blank" class="link link-info no-underline transition-colors"><b>Python</b></a>,
        mais pour ce qui est de l'affichage, nous devions utiliser
        des tuiles. Personnellement, je me suis occupé au début de réaliser l'intégralité du niveau avec l'étage de l'IUT et
        toutes les salles de boss.
        Après cela, j'ai eu l'occasion de pouvoir pouvoir m'occuper des fonctions d'animation et de déplacement du
        joueur.
      </p>
    </div>
    <div class="flex flex-col gap-4 mb-10">
      <h1 class="font-bold text-2xl">Résultats</h1>
      <p>
        Notre jeu reprend donc le principe de Pokémon, où le joueur doit affronter des ennemis dans des combats à l'aide
        d'une barre de rythme pour attaquer. Le joueur peut également se soigner en allant aux toilettes. Pour sortir de
        l'IUT, le joueur doit récupérer les clés de l'IUT et vaincre le boss final : son diplôme. Les clés sont cachées
        dans les salles de cours qui chacune représente un partiel.
      </p>
    </div>
    <div class="divider m-0 divider-neutral"></div>
    <div>
      <h1 class="font-bold text-2xl mb-2">Conclusion</h1>
      <div class="flex flex-col md:flex-row items-center gap-5">
        <img src="/GameJam.svg" alt="" class="w-44 drop-shadow-sm">
        <p>
          En conclusion, cette GameJam a été une expérience enrichissante qui nous a permis d'apprendre une nouvelle
          technologie, le Python, et de travailler en équipe. Malgré les difficultés de délais rencontrées, nous avons
          réussi à réaliser un jeu vidéo en une semaine. Ce projet nous a permis d'acquérir de nouvelles compétences
          et de renforcer notre cohésion en tant qu'équipe.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>