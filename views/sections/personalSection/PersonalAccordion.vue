<template>
  <div class="flex flex-col gap-5 w-full">
    <div v-for="(info, index) in informations" :key="index" class="collapse collapse-arrow bg-white drop-shadow-md">
      <input type="radio" name="my-accordion-1" :checked="index === 0"/>
      <div class="collapse-title text-xl text-black font-medium">
        {{ info.title }}
      </div>
      <div class="collapse-content text-black">
        <p v-for="(line, index) in info.lines" :key="index">{{ line }} <br></p>
        <ul v-if="info.list" class="list-disc ml-4">
          <li v-for="(item, index) in info.list" :key="index" v-html="item"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
const informations = [
  {
    title: "Mes informations personnelles",
    lines: ["Je m'appelle Hugo Föllmi, j’ai 19 ans et je suis né le 11 Novembre 2004 à Santiago du Chili."],
  },
  {
    title: "Mes études",
    lines: [
      "J’ai décidé d’aller au lycée Vaucanson de Grenoble pour pouvoir m’orienter vers de l’informatique. En seconde j’ai choisi l’option SI qui m’a aidé à déterminer ce qui m’intéressait.",
      "Puis, j'ai opté pour un BAC STI2D avec l'option SIN en terminale car l'informatique m'intéresse depuis longtemps.",
      "Pour donner suite au BAC STI2D je suis parti en BUT informatique à l'IUT2 de Grenoble où je suis actuellement en deuxième année, dans le parcours “Réalisation d’applications : Conception, Développement et Validation”.",
    ]
  },
  {
    title: "Mes passions",
    lines: ["Mes passions 😅 j'en ai plusieurs mais faisons une liste:"],
    list: [
      "Informatique (hardware) 💻",
      "Programmation 🧑‍💻",
      "Jeux vidéo 🎮",
      "Voyager ✈️",
      "Japon 🇯🇵",
      "Manga 🍥",
      "Automobile (mécanique / course) 🏎️",
    ],
  },
  {
    title: "Mes compétences",
    lines: [
      "Parlons de mes compétences !",
      "À vrai dire je suis toujours en apprentissage, mais je partage avec vous la liste des compétences déjà acquises et en cours d'acquisition,",
      "ainsi que les logiciels que je maitrise.",
    ],
  },
];
</script>