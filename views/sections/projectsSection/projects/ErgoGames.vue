<template>
  <div class="text-justify">
    <div class="flex flex-col md:flex-row mb-10">
      <div class="max-w-[700px] flex flex-col gap-4 pr-5">
        <h1 class="font-bold text-2xl">Contexte</h1>
        <p>
          Le site des
          <a
            href="https://www.ergogames.fr/"
            class="link no-underline text-[#0a5e5c]"
            ><b>ErgoGames</b></a
          >. est un site Web conçu pour présenter de manière ludique les
          principes ergonomiques du numérique, tel que : les actions minimales
          ou encore la gestion des erreurs. Il propose des jeux et un quiz
          (toujours en développement) pour faciliter l'apprentissage de ces
          principes et vérifier la compréhension des utilisateurs.
        </p>
        <p>
          Ce développement a été réalisé dans le cadre d'un stage chez Sogilis,
          une entreprise de génie logiciel basée à Grenoble, spécialisée dans la
          création de solutions sur mesure de haute qualité pour divers secteurs
          industriels. Elle se distingue par ses valeurs fortes et son
          engagement envers la qualité, l'innovation et l'expérience
          utilisateur.
        </p>
        <p>
          Mon sujet de stage portait sur le développement du sixième jeu des
          ErgoGames "Au pas de course !". Ce jeu a pour objectif de présenter le
          principe ergonomique du groupement / proximité de manière simple et
          ludique, avec une représentation visuelle interactive.
        </p>
      </div>
      <div class="flex flex-col justify-center gap-5 w-72">
        <a
          href="https://sogilis.com/"
          class="self-center hover:scale-105 hover:drop-shadow-xl transition-all w-44 h-fit"
        >
          <img
            src="@/assets/img/projectsSection/ErgoGames/LogoSogilis.svg"
            alt="ErgoGames"
            class=""
          />
        </a>
        <div class="flex flex-wrap items-center justify-between">
          <a
            href="https://www.ergogames.fr/"
            class="hover:scale-105 hover:drop-shadow-xl transition-all w-44 h-fit"
          >
            <div class="flex flex-col items-center font-bold">
              <div
                class="logo_first_line text-sm md:text-base -mb-2 :md-mb-2.5"
              >
                Les
              </div>
              <div class="logo_second_line text-base md:text-2xl">
                ERGOGAMES&nbsp;!
              </div>
            </div>
          </a>
          <img
            src="@/assets/img/projectsSection/ErgoGames/Renard.svg"
            alt="ErgoGames"
            class="w-24 drop-shadow-sm"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4 mb-10">
      <h1 class="font-bold text-2xl">Objectifs</h1>
      <p>
        Développer un jeu interactif pour les ErgoGames afin d'enseigner le
        principe ergonomique du groupement/proximité. Ce principe stipule que
        les éléments proches les uns des autres sont perçus comme un groupe et
        doivent être organisés de manière à faciliter l'utilisation et l'accès.
      </p>
      <p>
        Développer une interface utilisateur intuitive pour faciliter une
        interaction fluide avec l’utilisateur. L'interface doit être
        compréhensible et accessible pour les joueurs de tous niveaux. Le jeu
        doit être captivant tout en transmettant clairement le principe
        ergonomique.
      </p>
      <p>
        Développer une page dédiée à
        <a href="https://www.ergogames.fr/principles" class="link link-primary"
          ><b> l'explication du principe ergonomique</b></a
        >. Cette page explicative fournira une analyse détaillée du concept de
        groupement/proximité, accompagnée d'exemples concrets et d'illustrations
        visuelles.
      </p>
      <div class="flex flex-wrap md:flex-row justify-center gap-20">
        <img
          src="@/assets/img/projectsSection/ErgoGames/MaquetteRules.svg"
          alt="Maquette des règles"
          class="w-60 rounded-md drop-shadow-md"
        />
        <img
          src="@/assets/img/projectsSection/ErgoGames/MaquettePrinciple.svg"
          alt="Maquette du principe"
          class="w-64 rounded-md drop-shadow-md"
        />
      </div>
    </div>
    <div class="flex flex-col gap-4 mb-10">
      <h1 class="font-bold text-2xl">Réalisations</h1>
      <p>
        Le projet consistait à développer le sixième jeu des Ergo Games "Au pas
        de course !", au cours duquel les joueurs doivent réaliser des courses
        dans des rayons de supermarchés. Le jeu est divisé en deux parties :
      </p>
      <div
        class="flex flex-col md:flex-row justify-center items-center gap-10 mb-4"
      >
        <p>
          Première partie : <br />
          Affichage aléatoire.
        </p>
        <div class="diff aspect-[16/9] w-72 h-72">
          <div class="diff-item-1">
            <img
              src="@/assets/img/projectsSection/ErgoGames/MaquetteSecondRound.svg"
              alt=""
            />
          </div>
          <div class="diff-item-2">
            <img
              src="@/assets/img/projectsSection/ErgoGames/MaquetteFirstRound.svg"
              alt=""
            />
          </div>
          <div class="diff-resizer"></div>
        </div>
        <p>
          Deuxième partie : <br />
          Affichage organisé.
        </p>
      </div>
      <div>
        <p>Livrables professionnels :</p>
        <ul class="list-disc pl-5 mb-3">
          <li>
            Jeu interactif : illustrant le principe de groupement/proximité.
          </li>
          <li>Page explicative : détail du principe ergonomique.</li>
        </ul>
        <p>Livrables personnels :</p>
        <ul class="list-disc pl-5">
          <li>
            Documentation et rapports de suivi : Journal de bord hebdomadaire et
            documentation technique.
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col gap-4 mb-10">
      <h1 class="font-bold text-2xl">Technologies utilisées</h1>
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div>
          <ul class="list-disc pl-5">
            <li>
              Framework et Langages :
              <a href="https://vuejs.org/" class="link link-primary"
                ><b>Vue.js 3</b></a
              >
              et
              <a
                href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
                class="link link-primary"
                ><b>JavaScript</b></a
              >
              pour le développement front-end.
            </li>
            <li>
              Librairies :
              <a href="https://vuetifyjs.com/en/" class="link link-primary"
                ><b>Vuetify</b></a
              >
              pour les composants UI.
            </li>
            <li>
              Gestion de Versions :
              <a href="https://about.gitlab.com/" class="link link-primary"
                ><b>GitLab</b></a
              >
              pour le contrôle de version et la collaboration.
            </li>
            <li>
              Design :
              <a href="https://www.figma.com/fr-fr/" class="link link-primary"
                ><b>Figma</b></a
              >
              pour la création des maquettes.
            </li>
            <li>
              Outils de Développement : IntelliJ IDEA pour l'édition de code.
            </li>
          </ul>
        </div>
        <div>
          <img
            src="@/assets/img/projectsSection/ErgoGames/Technologies.svg"
            alt=""
            class="w-52"
          />
        </div>
      </div>
    </div>
    <div>
      <h1 class="font-bold text-2xl">Méthodologie et équipe</h1>
      <div class="flex flex-col md:flex-row items-center">
        <img
          src="@/assets/img/projectsSection/ErgoGames/Planning.svg"
          alt=""
          class="w-48 h-48"
        />
        <p>
          Le projet a été organisé en utilisant la méthode SCRUM, fonctionnant
          par cycles de deux semaines (sprints). Chaque sprint comprenait une
          réunion quotidienne (Daily) pour le suivi des tâches, ainsi qu'une
          réunion de fin de sprint qui combinait trois étapes essentielles : la
          Sprint Review pour examiner les travaux réalisés, la Sprint
          Retrospective pour identifier des pistes d'amélioration, et la Sprint
          Planning pour planifier les prochaines étapes.
        </p>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center gap-5">
        <div>
          <p>Durant ce projet j’ai été accompagné d’une équipe :</p>
          <ul class="list-disc pl-5 mb-3">
            <li>
              <a
                href="https://www.linkedin.com/in/benoit-dumas/"
                class="link link-primary"
                ><b>Benoît Dumas</b></a
              >. : Maître de stage, a fourni encadrement et directives.
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/margaux-lergo/"
                class="link link-primary"
                ><b>Margaux Perrin</b></a
              >. : Product owner, a validé les réalisations et ajusté les
              tâches.
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/antoine-du-bois-60b429196/"
                class="link link-primary"
                ><b>Antoine Dubois</b></a
              >. : Développeur, a aidé sur des aspects techniques spécifiques.
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/benjaminbiguet/"
                class="link link-primary"
                ><b>Benjamin Biguet</b></a
              >. : Designer, a créé les maquettes et scénarios.
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lucjeanniard/"
                class="link link-primary"
                ><b>Luc Jeanniard</b></a
              >. et
              <a
                href="https://www.linkedin.com/in/c%C3%A9cile-gesbert-b4571653/"
                class="link link-primary"
                ><b>Cécile Gesbert</b></a
              >. : Support administratif.
            </li>
          </ul>
        </div>
        <img
          src="@/assets/img/projectsSection/ErgoGames/People.svg"
          alt=""
          class="w-44 h-44"
        />
      </div>
    </div>
    <hr class="my-5 border-2 border-yellow-400 rounded-md" />
    <div>
      <h1 class="font-bold text-2xl">Conclusion</h1>
      <div class="flex flex-col md:flex-row items-center gap-5">
        <img
          src="@/assets/img/projectsSection/ErgoGames/CheckList.svg"
          alt=""
          class="w-24 h-24"
        />
        <p>
          En résumé, ce projet m'a permis de développer un jeu illustrant un
          principe ergonomique numérique, en utilisant des méthodes agiles et en
          collaborant avec une équipe de professionnels expérimentés. Cette
          expérience m'a aidé à renforcer mes compétences en développement
          logiciel et en gestion de projet, tout en apprenant à travailler de
          manière autonome dans un cadre structuré.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
