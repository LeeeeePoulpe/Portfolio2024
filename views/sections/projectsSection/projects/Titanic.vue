<template>
  <div class="text-justify">
    <div class="flex mb-10">
      <div class="max-w-[700px] flex flex-col gap-4 pr-5">
        <h1 class="font-bold text-2xl">Contexte</h1>
        <p>
          Ce projet, réalisé dans le cadre de la formation BUT Informatique à l'IUT2 de Grenoble
          lors du premier semestre, s'est déroulé en binôme.
        </p>
        <p>
          Ce projet a été découpé en trois phases distinctes. La première consistait en la réalisation d'un schéma
          entité association (SEA) qui avait pour objectif de représenter toutes les entités et les relations dans la
          base de données.
          Par la suite, nous devions créer la base de données à partir du schéma défini. Puis nous avons
          peuplé la base de données à l'aide d'un fichier fourni par l'IUT.
          La dernière partie consistait en l'interogation de la base de données à l'aide de requêtes SQL pour répondre
          à la liste de questions imposées par l'IUT.
        </p>
      </div>
      <div class="flex justify-center w-72">
        <img src="@/assets/img/projectsSection/Titanic/Schema.svg" alt="Développement d'IA"
             class="w-68 self-center drop-shadow-sm rounded-xl">
      </div>
    </div>
    <div class="flex flex-col gap-4 mb-10">
      <h1 class="font-bold text-2xl">Objectifs</h1>
      <p>
        L'objectif de notre projet était de développer une base de données détaillant les victimes du naufrage du
        Titanic, afin d'analyser les conditions de survie des passagers. Pour ce faire, nous devions d'abord proposer
        un schéma entité-association (SEA) prenant en compte les différents critères liés à cette situation tragique.
        Ce schéma avait pour but de représenter de manière claire et précise les entités, telles que les passagers et
        les membres de l'équipage, ainsi que les relations entre elles, comme les classes de voyage, les cabines et
        les liens familiaux.
      </p>
      <div class="flex flex-row gap-5 items-center">
        <p>
          Une fois le SEA établi, nous devions créer la base de données et la peupler avec un fichier de données fourni.
          Cette étape nous a permis de structurer les informations de manière cohérente et d'assurer l'intégrité des
          données. Ensuite, nous avons effectué les requêtes SQL nécessaires pour répondre aux diverses problématiques
          posées, telles que l'analyse des taux de survie en fonction de la classe de voyage, du sexe et de l'âge des
          passagers.
        </p>
        <img src="@/assets/img/projectsSection/Titanic/CreationBD.svg" alt="96%" class="w-56 drop-shadow-sm rounded-xl">
      </div>
      <p>
        Enfin, nous devions réaliser un rapport détaillant notre démarche et les requêtes SQL effectuées. Ce rapport
        incluait des explications sur notre méthodologie, les défis rencontrés et les solutions apportées. Il était
        également illustré par des graphiques explicatifs permettant de visualiser les résultats de nos analyses.
      </p>
    </div>
    <div class="flex flex-col gap-4 mb-10">
      <h1 class="font-bold text-2xl">Résultats</h1>
      <div class="flex flex-row gap-5 items-center">
        <img src="@/assets/img/projectsSection/Titanic/Resultats.svg" alt="96%" class="w-56 drop-shadow-sm rounded-xl">
        <p>
          Les résultats de notre projet ont été satisfaisants. Notre schéma entité-association (SEA) nous a
          permis d'aborder efficacement les requêtes posées, bien que quelques erreurs mineures aient été remarquées.
          Malheureusement, en raison de la lenteur du serveur, toutes les réponses aux requêtes n'ont pas pu être
          obtenues. Cependant, nous avons réussi à répondre à la problématique principale, notamment en analysant les
          données selon différents critères tels que la classe de voyage, le sexe et l'âge des passagers. Malgré
          quelques imprévus, ce projet nous a offert une expérience enrichissante et a renforcé notre compréhension
          des bases de données et de leur manipulation.
        </p>
      </div>
    </div>
    <div class="divider m-0 divider-neutral"></div>
    <div>
      <h1 class="font-bold text-2xl mb-2">Conclusion</h1>
      <div class="flex flex-row items-center gap-5">
        <img src="@/assets/img/projectsSection/Titanic/Conclusion.svg" alt="" class="w-24 h-24 drop-shadow-sm">
        <div>
          <p>
            En résumé, ce projet sur la base de données du Titanic a été une expérience formatrice malgré les défis
            rencontrés. La coopération en binôme a été cruciale pour produire des résultats significatifs. Nous avons
            consolidé nos compétences en SQL et en modélisation de bases de données, tout en renforçant notre aptitude à
            travailler en équipe.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">

</style>bu