<template>
  <div class="text-justify">
    <div class="flex flex-col md:flex-row mb-10">
      <div class="max-w-[700px] flex flex-col gap-4 pr-5">
        <h1 class="font-bold text-2xl">Contexte</h1>
        <p>
          Ce projet à été réalisé dans le cadre de la formation BUT Informatique de l'IUT2 de Grenoble lors du quatrième
          semestre de la formation. Il s'agit d'un projet en groupe de 6.
        </p>
        <p>
          Pour la réalisation de ce projet nous avions 5 jours bloqués dans l'emploi du temps,
          durant lesquels que nous avons découpé en plusieurs étapes. Les 2 premiers jours étaient consacrés à la
          réalisation de maquettes destinées à améliorer l’ergonomie des parties web et androïd déjà existantes. Les 3
          jours suivants étaient consacrés à la réparation du sites web et de l'application androïd.
        </p>
        <p>
          Le projet consistait à réparer une application android et un site web. Cette application est un carnet de
          stage pour les étudiants de l'IUT2 de Grenoble, pour permettre aux étudiants de
          trouver les offres de stage, de postuler à ces offres et de suivre l'avancement de leur recherche.
        </p>
      </div>
      <div class="flex flex-col gap-5 justify-center w-72">
        <img src="@/assets/img/projectsSection/CarnetDeStage/Android.svg" alt="Développement d'IA"
             class="w-68 rounded-xl self-center">
        <img src="@/assets/img/projectsSection/CarnetDeStage/Web.svg" alt="Développement d'IA"
             class="w-68 rounded-xl self-center">
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-4 mb-10">
      <h1 class="font-bold text-2xl">Objectifs</h1>
      <p>
        Les objectifs de ce projet étaient de réparer l'application android et le site web du carnet de stage de
        l'IUT2 de Grenoble. Pour cela nous avions plusieurs tâches à réaliser. Nous devions tout d'abord proposer des
        améliorations de l'ergonomie à travers des maquettes. Ensuite nous devions
        réparer les bugs de l'application android et du site web. Enfin nous devions ajouter des fonctionnalités
        à l'application.
      </p>
      <div class="flex flex-col md:flex-row gap-5 items-center">
        <div class="diff aspect-[8/16] w-[150] rounded-xl">
          <div class="diff-item-1">
            <img src="@/assets/img/projectsSection/CarnetDeStage/MaquettesApres.svg" alt=""/>
          </div>
          <div class="diff-item-2">
            <img src="@/assets/img/projectsSection/CarnetDeStage/MaquetteAvant.svg" alt=""/>
          </div>
          <div class="diff-resizer"></div>
        </div>
        <div class="flex flex-col gap-5">
          <p>
            Pour atteindre ces objectifs, nous avons d'abord analysé l'existant. Nous avons identifié les problèmes
            de l'application android et du site web et les fonctionnalités manquantes. Nous avons ensuite défini les
            besoins de notre public cible et les objectifs du projet. Pour l'application android, nous avons réalisé
            que l'application était vraiment inutilisable. Pour le site web, l'ergonomie était
            déjà présente mais pouvait être améliorée et le problème principal était dans le code.
          </p>
          <p>
            Puis nous avons concu des maquettes avec une meilleure ergonomie. Ces maquettes nous ont permis de
            visualiser les améliorations nécessaires et de nous guider pour la création du site.
            Nous avons réparé les bugs de l'application. Pour l'application android, nous
            avons corrigé les problèmes de connexion et de chargement des offres de stage. Pour le site web, nous avons
            supprimé les duplicata de code.
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4 mb-10">
      <h1 class="font-bold text-2xl">Résultats</h1>
      <p>
        Nous avons optimisé le cycle de vie de l'application Android, réduisant les appels API et améliorant les
        initialisations pour de meilleures performances. Le code serveur a été ajusté avec Docker pour faciliter les
        tests. L'interface utilisateur a été rendue plus intuitive avec des Toasts pour des retours immédiats et une
        navigation simplifiée.
      </p>
      <p>
        Sur le client web, nous avons mis en avant les boutons d'accès au tableau de bord et
        ajouté des indicateurs visuels pour les administrateurs. Une fonctionnalité d'importation des offres de stage a
        également été introduite.
      </p>
      <p>
        Nous avons livré une application plus performante et plus conviviale, prête à répondre aux besoins des utilisateurs.
      </p>
    </div>
    <div class="divider m-0 divider-neutral"></div>
    <div>
      <h1 class="font-bold text-2xl mb-2">Conclusion</h1>
      <div class="flex flex-col md:flex-row items-center gap-5">
        <img src="@/assets/img/projectsSection/CarnetDeStage/CarnetConclu.svg" alt=""
             class="w-44 rounded-xl drop-shadow-sm">
        <p>
          Ce projet nous a permis d'améliorer nos compétences techniques en optimisant le cycle de vie de l'application
          Android et en repensant l'interface utilisateur du client web. Nous avons renforcé notre capacité à travailler
          en équipe et à résoudre des problèmes techniques complexes, notamment en intervenant sur un code existant pour
          le réparer.
        </p>
      </div>
    </div>
  </div>
</template>